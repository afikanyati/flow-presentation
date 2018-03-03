const functions = require('firebase-functions');
const unirest = require('unirest');
const Lemmer = require('lemmer');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

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

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
exports.getDefinition = functions.database.ref('/document/assets/{assetIndex}/future/{wordIndex}').onWrite((event) => {
  // Grab the current value of what was written to the Realtime Database.
  const word     = event.data._delta;
  let text = word.text.toLowerCase();
  text = text.split(" ")[0];
  text = text.replace(/[.,#!—$%^&*;:{}=\-_`~()—]/g,"");
  console.log("Text before Lemma: ", text);

  let definition = new Promise ((resolve) => {
      Lemmer.lemmatize([text]).then((words) => {
          console.log("Text after Lemma: ", words[0]);
          return words[0];
      }).then((text) => {
          console.log('Getting definition of: ', text);

          let promise = new Promise ((resolve) => {
              unirest.get("https://wordsapiv1.p.mashape.com/words/" + text)
                      .header("X-Mashape-Key", "ArZ5J0IzQTmshWUjCqqKJXu7ipLBp1nLczBjsnYI1fMQQDsxmN")
                      .header("X-Mashape-Host", "wordsapiv1.p.mashape.com")
                      .end((result) => {
                          return resolve(result.body);
                      });
          });
          return resolve(promise.then((resolve) => {
              console.log("Finished definition for: ", resolve);
              return resolve;
          }));
      });
  });

  return definition.then((resolve) => {
      return event.data.ref.child('definition').set(resolve);
  });
});
