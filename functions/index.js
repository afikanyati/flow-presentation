const functions = require('firebase-functions');

// Definition API
const unirest = require('unirest');

// Lemmerizer API
const Lemmer = require('lemmer');

// General Natural Language Facility
const natural = require('natural');

// POS Tagger
const pos = require('pos');
const tagger = new pos.Tagger();

// Expand Contractions
const contractions = require('contractions');

// Setences Tokenizer
const sentenceTokenizer = require('sbd');

// Webpage Scraper
const scrapeIt = require("scrape-it");

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// =========================================================================================
// Firebase Functions

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest((req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  return admin.database().ref('/messages').push({original: original}).then((snapshot) => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    return res.redirect(303, snapshot.ref);
  });
});

exports.scrapeWebpage = functions.database.ref('/webpages/{pageID}').onWrite((event) => {
    // If Data is not New
    if (event.data.previous.exists()) {return Promise.resolve()}
    // Exit when the data is deleted; After deleting the node, this function runs once more.
    if (!event.data.exists()) {return Promise.resolve()}

    let webURL = event.data.val();

    let scraperPromise = new Promise((resolve) => {
        return resolve(scrapeIt(webURL,
            {
                paragraphs: {
                    listItem: "p",
                    data: "p"
                },
                title: "title"
            }
        ).then(({data, response}) => {
            return data;
        }));
    });

    return scraperPromise.then((result) => {
        let paragraphs = result.paragraphs.filter((element) => {
            return typeof element === "string";
        });

        let doc = {
            paragraphs: paragraphs,
            title: result.title,
            year: new Date().getFullYear(),
            author: "Unknown Author",
            subtitle: "Unset Subtitle",
            cover: "Unset Cover",
            tags: ["document", "webpage"],
            genre: "Unset Genre"
        };

        return admin.database().ref('/uploads').push(doc).then((snapshot) => {
            return event.data.ref.remove();
        });
    });
});

exports.getPartOfSpeech = functions.database.ref('/documents/{docIndex}/assets/{assetIndex}/sentences/{sentenceIndex}').onWrite((event) => {
    // If data is not new
    if (event.data.previous.exists()) {return Promise.resolve()}

    // Exit when the data is deleted; After deleting the node, this function runs once more.
    if (!event.data.exists()) {return Promise.resolve()}

    let data = event.data.val();
    // console.log("[1] Sentence Data: ", data);

    let words = data.words.map((wordObject) => {
        return wordObject.text.replace(/[.,#!$%^&*;:{}=_`~()\s\u0022\u0027\u2018\u2019\u201C\u201D]/g,'').toLowerCase();
    });
    // console.log("[2] Word List: ", words);

    let assignTags = (words) => {
        return new Promise((resolve) => {
            return resolve(tagger.tag(words));
        }).then((taggedWords) => {
            let posTaggedWords = data.words;
            for (i in taggedWords) {
                let taggedWord = taggedWords[i];
                let tag = taggedWord[1];
                posTaggedWords[i].partOfSpeech = tag;
            }
            //console.log("[3] Tagged Words: ", posTaggedWords);
            return posTaggedWords;
        });
    };

    return new Promise ((resolve) => {
        return resolve(assignTags(words));
    }).then((posTaggedWords) => {
        // console.log("[4] POS Tagged Data: ", posTaggedWords);
        let result = data;
        result.words = posTaggedWords;
        return event.data.ref.set(result);
    });
});

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
exports.getDefinition = functions.database.ref('/documents/{docIndex}/assets/{assetIndex}/sentences/{sentenceIndex}/words/{wordIndex}').onWrite((event) => {
    // If data is not new
    if (event.data.previous.exists()) {return Promise.resolve()}
    // Exit when the data is deleted; After deleting the node, this function runs once more.
    if (!event.data.exists()) {return Promise.resolve()}

    // Grab the current value of what was written to the Realtime Database.
    const word = event.data.val();

    // Expand Constractions
    let inspectContraction = word.text.replace(/[.,#!$%^&*;:{}=_`~()\s\u0022\u2018\u201C\u201D]/g,"").replace("’", "'").toLowerCase();
    if (inspectContraction.search(/\w+'\w+/g) !== -1) {
        let contractionExpansion = new Promise((resolve) => {
            return resolve(contractions.expand(inspectContraction));
        });

        return contractionExpansion.then((expandedWord)=> {
            let definition = {
                word: inspectContraction,
                results: [{definition: expandedWord, partOfSpeech: "contraction"}]
            };
            return event.data.ref.child('definition').set(definition);
        });
    }

    let text = word.text.replace(/[.,#!$%^&*;:{}=_`~()\s\u0022\u0027\u2018\u2019\u201C\u201D]/g,"").toLowerCase();

    let definition = new Promise ((resolve) => {
        Lemmer.lemmatize([text]).then((words) => {
            return words[0];
    }).then((text) => {
      let promise = new Promise ((resolve) => {
          unirest.get("https://wordsapiv1.p.mashape.com/words/" + text)
                  .header("X-Mashape-Key", "ArZ5J0IzQTmshWUjCqqKJXu7ipLBp1nLczBjsnYI1fMQQDsxmN")
                  .header("X-Mashape-Host", "wordsapiv1.p.mashape.com")
                  .end((result) => {
                      return resolve(result.body);
                  });
      });
      return resolve(promise.then((resolve) => {
          // console.log("Obtained definition for: ", resolve);
          return resolve;
      }));
    });
    });

    return definition.then((resolve) => {
        return event.data.ref.child('definition').set(resolve);
    });
});

exports.createDocument = functions.database.ref('/uploads/{docID}').onWrite((event) => {
    const numPageParagraphs = 3;

    // If Data is not New
    if (event.data.previous.exists()) {return Promise.resolve()}
    // Exit when the data is deleted; After deleting the node, this function runs once more.
    if (!event.data.exists()) {return Promise.resolve()}

    let pauseSet = new Set([",", ";", ":", "\u2014", "—"]); // \u2014 is the em dash
    let transitionSet = new Set(TransitionWords);
    let commonSet = new Set(CommonWords);

    let data = event.data.val();

    let constructParagraph = (sentences, i) => {
        // Don't create empty paragraphs
        if (sentences.length === 0) {
            return;
        }

        // Create Paragraph Element
        let paragraph = {
            type: "paragraph",
            index: {asset: i},
            sentences: sentences,
            delay: sentences.reduce((total, sentence) => {return total + sentence.delay}, 0),
            sentenceCount: sentences.length,
            wordCount: sentences.reduce((total, sentence) => {return total + sentence.wordCount}, 0)
        };
        return paragraph;
    }

    let calcWordLengthDelay = (text) => {
        return parseFloat((375/144 * Math.pow(text.length, 2)).toFixed(1));
    };

    let constructSentences = (sentences, i) => {
        let sentenceObjects = [];
        for (let j = 0; j < sentences.length; j++) {
            // Create Sentence Object
            let sentence = {
                index: {paragraph: i, sentence: j},
                type: "",
                words: [],
                wordCount: sentences[j].length,
                delay: 0
            };

            for (let k = 0; k < sentences[j].length; k++) {
                let word = {
                    index: {paragraph: i, sentence: j, word: k},
                    text: sentences[j][k],
                    partOfSpeech: "",
                    definition: {},
                    highlight: {
                        active: false,
                        color: null
                    },
                    hasBookmark: false,
                    annotations: {},
                    delay: [],
                    bold: false,
                    italic: false,
                    underline: false
                };

                // Identify Delays and Accelerators
                if (pauseSet.has(word.text.charAt(word.text.length - 1))) {
                    // Punctuation Pauses
                    word.delay.push({type: "pause", factor: 1});
                    sentence.delay += 1;
                } else if (transitionSet.has(word.text.replace(/[.,#!$%^&*;:{}=_`~()\s\u0022\u0027\u2018\u2019\u201C\u201D]/g,"").toLowerCase())) {
                    // Propositional Integration Word Pause
                    word.delay.push({type: "proposition", factor: 0.5});
                    sentence.delay += 0.5;
                } else if (commonSet.has(word.text.replace(/[.,#!$%^&*;:{}=_`~()\s\u0022\u0027\u2018\u2019\u201C\u201D]/g,"").toLowerCase())) {
                    // Common Word Accelerator
                    word.delay.push({type: "common", factor: -0.1});
                    sentence.delay += -0.1;
                } else if (sentences[j][k].length > 7) {
                    // Word Length
                    // 0.3 * fixation per letter over 7
                    let factor = 0.3 * (sentences[j][k].length - 7);
                    word.delay.push({type: "word-length", factor: factor});
                    sentence.delay += factor;
                }

                // Find out type of sentence (if last word in sentence)
                if (k === sentences[j].length - 1) {
                    switch (word.text.charAt(word.text.length - 1)) {
                        case "!":
                            sentence.type = "exclamation";
                            break;
                        case "?":
                            sentence.type = "question";
                            break;
                        case "...":
                            sentence.type = "ellipsis";
                            break;
                        default:
                            sentence.type = "statement";
                    }

                    // End of Sentence Pause
                    word.delay.push({type: "sentence-end", factor: 1});
                    sentence.delay += 1;
                }
                sentence.words.push(word);
            }
            sentenceObjects.push(sentence);
        }
        return sentenceObjects;
    };

    let tokenizeSentenceWords = (sentenceString) => {
        return sentenceString.split(" ");
    };

    let constructAssets = (paragraphSentenceStrings, i) => {
        // Tokenizes Paragraph into Sentences
        return new Promise((resolve) => {
            return resolve(sentenceTokenizer.sentences(data.paragraphs[i], sentenceTokenizerOptions));
        }).then((sentenceStrings) => {
            // Will Promise Return of Paragraphs
            return new Promise((resolve) => {
                return resolve(
                    Promise.all(sentenceStrings.map(tokenizeSentenceWords))
                        .then((tokenizedSentences) => {
                            // Construct Sentence Objects
                            return new Promise((resolve) => {
                                return resolve(
                                    constructSentences(tokenizedSentences, i)
                                );
                            });
                        }).then((sentenceObjects) => {
                            // Construct Paragraph Objects
                            return new Promise((resolve) => {
                                return resolve(
                                    constructParagraph(sentenceObjects, i)
                                );
                            });
                        })
                );
            });
        });
    };

    // Will Promise Return of Flowheap-structured Document
    return new Promise((resolve) => {
        return resolve(Promise.all(data.paragraphs.map(constructAssets))
            .then((assets) => {
                let doc = {
                    assets: assets,
                    delay: assets.reduce((total, asset) => {return total + asset.delay}, 0),
                    title: data.title,
                    year: data.year,
                    author: data.author,
                    uploaded: new Date().toISOString(),
                    subtitle: data.subtitle,
                    cover: data.cover,
                    tags: data.tags,
                    genre: data.genre,
                    index: {
                        asset: 0,
                        sentence: 0,
                        fixation: []
                    }
                };

                return doc;
            }));
        // Need to Resolve
    }).then((resolve) => {
        return admin.database().ref('/documents').push(resolve).then((snapshot) => {
            return event.data.ref.remove(); // Doc Promises
        });
    });
});

const TransitionWords = ["and", "also", "then", "moreoever", "likewise", "comparatively", "correspondingly", "similarly", "furthermore", "additionally",
    "notably", "including", "namely", "chiefly", "indeed", "surely", "markedly", "especially", "specifically", "expressively", "surprisingly", "frequently", "significantly",
    "hence", "suddenly", "shortly", "henceforth", "meanwhile", "presently", "occasionally", "thus", "because", "but", "unlike", "or", "yet", "while", "albeit", "besides",
    "if", "unless", "lest", "lastly", "finally", "although"];

const CommonWords = ["he", "she", "it", "you", "the", "a", "to", "of", "and", "in", "too"];

const sentenceTokenizerOptions = {
    "newline_boundaries" : true,
    "html_boundaries"    : true,
    "sanitize"           : true,
    "allowed_tags"       : false,
    "abbreviations"      : null
};
