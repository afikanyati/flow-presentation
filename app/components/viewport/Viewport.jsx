// Libraries
import React                    from 'react';
import firebase                 from 'firebase';
import PropTypes                from 'prop-types';
import styled                   from 'styled-components';
import { CSSTransitionGroup }   from 'react-transition-group';
import update                   from 'immutability-helper';

// Components
import ScrollDirectionTypes     from '../../constants/scrollDirectionTypes';
import HighlightTypes          from '../../constants/highlightColorTypes';
import SkinTypes                from '../../constants/skinTypes';
import ToolMenu              from './ToolMenu';
import Paragraph                from './Paragraph';
import Word                     from './Word';
import StatusBar              from './StatusBar';
import CruiseControlButton      from './CruiseControlButton';
import MapButton                from './MapButton';
import DefinitionsDrawer        from './DefinitionsDrawer';
import CompletionBar            from './CompletionBar';

/**
 * The Viewport component is a component used to
 */
export default class Viewport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scroll                   : 0,
            docPosition              : {
                asset                : 0,
                sentence             : 0,
                fixation             : [0, this.props.fixationWidth] // end: one index ahead because of split
            },
            doc                      : {},
            highlightIsActive        : false,
            cruiseControlIsActive    : false,
            cruiseControlHaltIsActive: false,
            timePerFixation          : 0, // In milliseconds,
            checkAddDelay            : true, // checked once every fixation cycle
            showAnnotations          : true,
            highlightColor           : null,
            drawerIsOpen             : false,
            docLoaded                : false
        }
    }

    componentWillMount() {
        // console.log("-----Viewport");
    }

    render() {
        if (this.state.docLoaded) {
            return this.viewportView();
        } else {
            return this.loadingView();
        }
    }

    componentDidMount() {
        // console.log("+++++Viewport");
        window.addEventListener('DOMMouseScroll', this.handleScroll, false);
        window.onwheel      = this.handleScroll; // modern standard
        window.onmousewheel = document.onmousewheel = this.handleScroll; // older browsers, IE
        window.ontouchmove  = this.handleScroll; // mobile
        document.onkeydown  = this.handleKeys;
        //document.onkeypress = this.handleKeys;
        window.addEventListener('mousedown', this.handleCruiseMouseDown, false);
        window.addEventListener('mouseup', this.handleCruiseMouseUp, false);
        // Web App Visibility
        document.addEventListener('visibilitychange', this.handleWindowFocusState);

        firebase.database().ref(this.props.docURL).once('value', (snapshot) => {
            let doc = snapshot.val();

            // Set feed to state
            this.setState({
                doc: doc,
                docLoaded: true
            }, () => {
                // Set timePerFixation
                this.setTimePerFixation(0);
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.readingSpeed != this.props.readingSpeed) {
            let currentAsset = this.state.doc.assets[this.state.docPosition.asset];
            let millisecondsInMinute = 60000;
            let readMinutes = currentAsset.wordCount/nextProps.readingSpeed;
            let numFixations = (nextProps.readingSpeed/this.props.fixationWidth); // in 60 seconds
            let effectiveMillisecondsInMinute = millisecondsInMinute/(1 + currentAsset.delay/(3*readMinutes*numFixations));
            let timePerFixation = effectiveMillisecondsInMinute/numFixations; // measured in ms

            this.setState({
                timePerFixation: timePerFixation
            }, () => {
                this.isScrolling = setTimeout(() => {
                    clearTimeout(this.timer);
                    this.moveText(new Date().getTime());
                }, 200);
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        window.removeEventListener('mousedown', this.handleCruiseMouseDown, false);
        window.removeEventListener('mouseup', this.handleCruiseMouseUp, false);
        clearTimeout(this.timer);
    }

    // ======== Flow Control =========

    loadingView = () => {
        return (
            <h1>LOADING</h1>
        );
    }

    viewportView = () => {
        let progress = this.getProgress();
        let history = this.getCurrentAssetHistory();
        let fixationWindow = this.getFixationWindow();
        let future = this.getCurrentAssetFuture();
        let doc = {...this.state.doc};
        return (
            <Container
                skin={this.props.skin}
                cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                customCursor={this.props.skin == SkinTypes.DARK ?
                        PauseLightPurple
                    :
                        PausePurple}
                onClick={this.handleClick}>
                <StatusBar
                    hand                  ={this.props.hand}
                    skin={this.props.skin}
                    readingSpeed={this.props.readingSpeed}
                    cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                    showAnnotations={this.state.showAnnotations}
                />
                <CompletionBar
                    skin={this.props.skin}
                    progress={progress}/>
                <TitleBar>{doc.title}</TitleBar>
                {/* History Container is Reverse Order
                    The first Paragraph mapping belongs to the current reading asset
                    */}
                <HistoryContainer
                    skin={this.props.skin}
                    fontSize={this.props.fontSize}>
                    {[history].map((asset) => {
                      return (
                          <Paragraph
                              key           ={`parent =[null], this =[type ='${asset.type}-history', index ='${this.state.docPosition.asset}']`}
                              asset     ={asset}
                              fontSize      ={this.props.fontSize}
                              fontFamily    ={this.props.fontFamily}
                              skipToWord    ={this.skipToWord}
                              skin={this.props.skin}
                              showAnnotations={this.state.showAnnotations}
                              cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                              />
                      );
                  })}
                  {doc.assets.slice(Math.max(0, this.state.docPosition.asset - 2), this.state.docPosition.asset).reverse().map((asset, index) => {
                    return (
                        <Paragraph
                            key           ={`parent =[null], this =[type ='${asset.type}', index ='${asset.index.asset}']`}
                            asset     ={asset}
                            fontSize     ={this.props.fontSize}
                            fontFamily   ={this.props.fontFamily}
                            skipToWord   ={this.skipToWord}
                            skin={this.props.skin}
                            showAnnotations={this.state.showAnnotations}
                            cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                            />
                    );
                })}
                </HistoryContainer>
                <FixationWindowContainer
                    fontSize={this.props.fontSize}>
                    <FixationWindow
                        highlightIsActive={this.state.highlightIsActive}
                        highlightColor={this.state.highlightColor}
                        fontSize={this.props.fontSize}
                        fontFamily={this.props.fontFamily}>
                        <CSSTransitionGroup
                              transitionName         ="fixation"
                              transitionEnterTimeout ={200}
                              transitionLeave        ={false}>
                            {fixationWindow.map((word) => {
                                return (
                                    <Word
                                        key        ={`parent=[type='paragraph', index='${this.state.docPosition.asset}'], this=[type='word', index='${word.index.word}']`}
                                        paragraph  ={this.state.docPosition.asset}
                                        word       ={word}
                                        inFixationWindow={true}
                                        fontFamily ={this.props.fontFamily}
                                        skipToWord ={this.skipToWord}
                                        skin={this.props.skin}
                                        showAnnotations={this.state.showAnnotations}
                                        cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                                    />
                                );
                            })}
                        </CSSTransitionGroup>
                    </FixationWindow>
                </FixationWindowContainer>
                <FutureContainer
                    skin={this.props.skin}
                    fontSize={this.props.fontSize}>
                    {[future].map((asset) => {
                        return (
                            <Paragraph
                                key          ={`parent =[null], this =[type ='${asset.type}-future', index ='${this.state.docPosition.asset}']`}
                                asset    ={asset}
                                fontSize     ={this.props.fontSize}
                                fontFamily   ={this.props.fontFamily}
                                skipToWord   ={this.skipToWord}
                                skin={this.props.skin}
                                showAnnotations={this.state.showAnnotations}
                                cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                                />
                        );
                    })}
                    {doc.assets.slice(this.state.docPosition.asset + 1, Math.min(this.state.docPosition.asset + 3, this.state.doc.assets.length)).map((asset, index) => {
                        return (
                            <Paragraph
                                key                 ={`parent =[null], this =[type ='paragraph', index ='${asset.index.asset}']`}
                                asset           ={asset}
                                fontSize            ={this.props.fontSize}
                                fontFamily          ={this.props.fontFamily}
                                skipToWord          ={this.skipToWord}
                                skin={this.props.skin}
                                showAnnotations={this.state.showAnnotations}
                                cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                                />
                        );
                    })}
                </FutureContainer>
                <DefinitionsDrawer
                    skin={this.props.skin}
                    drawerIsOpen={this.state.drawerIsOpen}
                    toggleDrawer={this.toggleDrawer}
                    fixationWords={fixationWindow}
                    cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                />
                <ToolMenu
                    hand                  ={this.props.hand}
                    skin={this.props.skin}
                    handleHighlight={this.handleHighlight}
                    toggleWordBookmark={this.toggleWordBookmark}
                    fixationWindow={fixationWindow}
                    highlightIsActive={this.state.highlightIsActive}
                    highlightColor={this.state.highlightColor}
                    deactivateHighlight={this.deactivateHighlight}
                    performWriteOperation={this.performWriteOperation}
                    performImageOperation={this.performImageOperation}
                    performRecordOperation={this.performRecordOperation}
                    performDrawOperation={this.performDrawOperation}
                    cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                />
                <CruiseControlButton
                    hand                  ={this.props.hand}
                    skin={this.props.skin}
                    cruiseControlIsActive ={this.state.cruiseControlIsActive}
                    toggleCruiseControl   ={this.toggleCruiseControl}
                    cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                />
                <MapButton
                    hand={this.props.hand}
                    skin={this.props.skin}
                    toggleMap={this.toggleMap}
                    cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                />
            </Container>
        );
    }

    // ========== Methods ===========

    handleClick = (e) => {

    }

    handleCruiseMouseDown = (e) => {
        e.stopPropagation();
        if (this.state.cruiseControlIsActive &&
            e.target.offsetParent.id != "cruiseControlButton") {
            clearTimeout(this.timer);
            this.setState({
                cruiseControlHaltIsActive: true
            });
        }
    }

    handleCruiseMouseUp = (e) => {
        // NOTE: If user clicks and mouse up outside of viewport, get error
        e.stopPropagation();
        if (this.state.cruiseControlIsActive && e.target.offsetParent.id != "cruiseControlButton") {
            this.moveText(new Date().getTime());
            this.setState({
                cruiseControlHaltIsActive: false
            });
        }
    }

    handleKeys = (e) => {
        let keys = {
            37: true,   // Left
            38: true,   // Up
            39: true,   // Right
            40: true,    // Down
            32: true   // Enter
        };

        if (keys[e.keyCode]) {
            this.preventDefault(e);

            // Up or Left
            if (e.keyCode == 37 || e.keyCode == 38) {
                if (this.state.cruiseControlIsActive) {
                    window.clearTimeout(this.isScrolling);
                    this.props.changeReadingSpeed(ScrollDirectionTypes.DOWN);
                } else {
                    this.updateViewport(ScrollDirectionTypes.UP);
                }

            // Down or Right
            } else if (e.keyCode == 39 || e.keyCode == 40) {
                if (this.state.cruiseControlIsActive) {
                    window.clearTimeout(this.isScrolling);
                    this.props.changeReadingSpeed(ScrollDirectionTypes.UP);
                } else {
                    this.updateViewport(ScrollDirectionTypes.DOWN);
                }
            } else if (e.keyCode == 32) {
                this.preventDefault(e);
                this.toggleCruiseControl(e);
            }

            return false;
        } else if (e.keyCode == 73 && !e.altKey && !e.ctrlKey) {
            this.toggleDrawer(e);
        }
    }

    handleScroll = (e) => {
        this.preventDefault(e);

        if (this.state.scroll > this.props.trackingSpeed
            && !this.state.cruiseControlIsActive) {
            let direction = this.getScrollDirection(e);
            this.updateViewport(direction);
        } else if (this.state.cruiseControlIsActive) {
            let direction = this.getScrollDirection(e);
            let inverseDirection = direction == ScrollDirectionTypes.UP ? ScrollDirectionTypes.DOWN : ScrollDirectionTypes.UP;
            window.clearTimeout(this.isScrolling);
            this.props.changeReadingSpeed(inverseDirection);
        }

        this.setState({
            scroll: this.state.scroll + 1
        });
    }

    updateViewport = (direction) => {
        let doc = {...this.state.doc};
        let assets = [...doc.assets];
        let currentSentence = {...doc.assets[this.state.docPosition.asset].sentences[this.state.docPosition.sentence]}
        let nextFixation, nextSentence;

        if (direction == ScrollDirectionTypes.UP
            && this.state.docPosition.asset > 0
            && this.state.docPosition.sentence == 0
            && this.state.docPosition.fixation[0] == 0) {
            // We have hit beginning of current asset
            // Load previous one
            if (this.state.highlightIsActive) {
                let previousAsset = this.state.doc.assets[this.state.docPosition.asset - 1];
                let previousSentence = previousAsset.sentences[previousAsset.sentenceCount - 1];
                let startWord = Math.max(0, previousSentence.wordCount - this.props.fixationWidth);
                let endWord = previousSentence.wordCount;

                let start = {
                    asset: previousAsset.index.asset,
                    sentence: previousSentence.index.sentence,
                    word: startWord
                };

                let end = {
                    asset: previousAsset.index.asset,
                    sentence: previousSentence.index.sentence,
                    word: endWord
                };

                this.toggleWordHighlight(start, end);
            }

            this.loadAsset("end", this.state.docPosition.asset - 1);
            return;
        } else if (direction == ScrollDirectionTypes.UP
            && this.state.docPosition.sentence == 0
            && this.state.docPosition.fixation[0] == 0
            && this.state.docPosition.asset == 0) {
            // We have hit beginning of document
            // Exit function
            return;
        } else if (direction == ScrollDirectionTypes.DOWN
            && this.state.docPosition.asset + 1 < this.state.doc.assets.length
            && this.state.docPosition.sentence + 1 == this.state.doc.assets[this.state.docPosition.asset].sentenceCount
            && this.state.docPosition.fixation[1] == this.state.doc.assets[this.state.docPosition.asset].sentences[this.state.docPosition.sentence].wordCount) {
            // We have hit end of current asset
            // Load next one

            if (this.state.highlightIsActive) {
                let start = {
                    asset: this.state.docPosition.asset,
                    sentence: this.state.docPosition.sentence,
                    word: this.state.docPosition.fixation[0]
                };

                let end = {
                    asset: this.state.docPosition.asset,
                    sentence: this.state.docPosition.sentence,
                    word: this.state.docPosition.fixation[1]
                }

                this.toggleWordHighlight(start, end);
            }

            this.loadAsset("start", this.state.docPosition.asset + 1);
            return;
        }

        if (direction == ScrollDirectionTypes.UP) {
            // Scroll Direction Up
            if (this.state.highlightIsActive) {
                let startWord = this.state.docPosition.fixation[0] == 0 ? Math.max(0, this.state.doc.assets[this.state.docPosition.asset].sentences[Math.max(0, this.state.docPosition.sentence - 1)].wordCount - this.props.fixationWidth) : Math.max(0, this.state.docPosition.fixation[0] - this.props.fixationWidth);
                let endWord = this.state.docPosition.fixation[0] == 0 ? this.state.doc.assets[this.state.docPosition.asset].sentences[Math.max(0, this.state.docPosition.sentence - 1)].wordCount : this.state.docPosition.fixation[0];
                let sentence = this.state.docPosition.fixation[0] == 0 ? Math.max(0, this.state.docPosition.sentence - 1) : this.state.docPosition.sentence;

                let start = {
                    asset: this.state.docPosition.asset,
                    sentence: sentence,
                    word: startWord
                };

                let end = {
                    asset: this.state.docPosition.asset,
                    sentence: sentence,
                    word: endWord
                }

                this.toggleWordHighlight(start, end);
            }

            nextFixation = this.state.docPosition.fixation[0] == 0 ? [this.state.doc.assets[this.state.docPosition.asset].sentences[this.state.docPosition.sentence - 1].wordCount - this.props.fixationWidth, this.state.doc.assets[this.state.docPosition.asset].sentences[this.state.docPosition.sentence - 1].wordCount] : [Math.max(0, this.state.docPosition.fixation[0] - this.props.fixationWidth), this.state.docPosition.fixation[0]];
            nextSentence = this.state.docPosition.fixation[0] == 0 ? this.state.docPosition.sentence - 1 : this.state.docPosition.sentence;
        } else {
            // Scroll Direction Down
            if (this.state.highlightIsActive) {
                let start = {
                    asset: this.state.docPosition.asset,
                    sentence: this.state.docPosition.sentence,
                    word: this.state.docPosition.fixation[0]
                };

                let end = {
                    asset: this.state.docPosition.asset,
                    sentence: this.state.docPosition.sentence,
                    word: this.state.docPosition.fixation[1]
                }

                this.toggleWordHighlight(start, end);
            }

            nextFixation = this.state.docPosition.fixation[1] == currentSentence.wordCount ? [0, this.props.fixationWidth] : [this.state.docPosition.fixation[0] + this.props.fixationWidth, Math.min(this.state.docPosition.fixation[1] + this.props.fixationWidth, currentSentence.wordCount)];
            nextSentence = this.state.docPosition.fixation[1] == currentSentence.wordCount ? this.state.docPosition.sentence + 1 : this.state.docPosition.sentence;
        }

        let docPosition = update(this.state.docPosition, {
            sentence: {$set: nextSentence},
            fixation: {$set: nextFixation}
        });

        this.setState({
            scroll: 0,
            docPosition: docPosition
        }, () => {
             if (direction == ScrollDirectionTypes.DOWN
                && this.state.docPosition.asset + 1 == this.state.doc.assets.length
                && this.state.docPosition.sentence + 1 == this.state.doc.assets[this.state.docPosition.asset].sentenceCount
                && this.state.docPosition.fixation[1] == this.state.doc.assets[this.state.docPosition.asset].sentences[this.state.docPosition.sentence].wordCount
                && this.state.cruiseControlIsActive) {
                // We have hit end of document
                // and Cruise Control is active
                // We deactivate it
                this.toggleCruiseControl();
            } else if (direction == ScrollDirectionTypes.DOWN
                && this.state.docPosition.asset + 1 == this.state.doc.assets.length
                && this.state.docPosition.sentence + 1 == this.state.doc.assets[this.state.docPosition.asset].sentenceCount
                && this.state.docPosition.fixation[1] == this.state.doc.assets[this.state.docPosition.asset].sentences[this.state.docPosition.sentence].wordCount) {
                    // We have hit end of document
                    // Cruise Control is not Active
                    return;
            }
        });
    }

    preventDefault = (e) => {
      e = e || window.event;
      if (e.preventDefault) {
          e.preventDefault();
      }
      e.returnValue = false;
    }

    getScrollDirection = (e) => {
        let delta;

        if (e.wheelDelta) {
            delta = e.wheelDelta;
        } else {
            delta = -1 * e.deltaY;
        }

        if (delta < 0) {
            return ScrollDirectionTypes.DOWN;
        } else if (delta > 0){
            return ScrollDirectionTypes.UP;
        }
    }

    /**
     * [getCurrentAssetHistory description]
     */
    getCurrentAssetHistory = () => {
        const sentences = [...this.state.doc.assets[this.state.docPosition.asset].sentences];
        const completedSentences = sentences.slice(0, Math.max(0, this.state.docPosition.sentence));

        let wordCount = completedSentences.reduce((total, sentence)=> {
            return total + sentence.wordCount;
        }, 0);

        const incompleteSentence = {...sentences[this.state.docPosition.sentence]};
        const incompleteSentenceWords = incompleteSentence.words.filter((word) => {
            return word.index.word < this.state.docPosition.fixation[0];
        });

        wordCount += incompleteSentenceWords.length;

        const currentSentenceHistory = update(incompleteSentence, {
            words: {$set: incompleteSentenceWords}
        });

        const sentenceHistory = completedSentences.concat(currentSentenceHistory);

        return update(this.state.doc.assets[this.state.docPosition.asset], {
            sentences: {$set: sentenceHistory},
            sentenceCount: {$set: sentenceHistory.length},
            wordCount: {$set: wordCount}
        });
    }

    getFixationWindow = () => {
        const currentSentence = {...this.state.doc.assets[this.state.docPosition.asset].sentences[this.state.docPosition.sentence]};
        const fixationWords = currentSentence.words.slice(this.state.docPosition.fixation[0], this.state.docPosition.fixation[this.state.docPosition.fixation.length - 1]);
        return fixationWords;
    }

    /**
     * [getCurrentAssetFuture description]
     */
    getCurrentAssetFuture = () => {
        const sentences = [...this.state.doc.assets[this.state.docPosition.asset].sentences];
        const currentSentence = {...sentences[this.state.docPosition.sentence]};
        const currentSentenceWords = currentSentence.words.filter((word) => {
            return word.index.word >= this.state.docPosition.fixation[1];
        });
        let wordCount = currentSentenceWords.length;
        const currentSentenceFuture = update(currentSentence, {
            words: {$set: currentSentenceWords}
        });
        const futureSentences = sentences.slice(this.state.docPosition.sentence + 1, Math.max(this.state.docPosition.sentence + 1, this.state.doc.assets[this.state.docPosition.asset].sentenceCount));
        wordCount += futureSentences.reduce((total, sentence)=> {
            return total + sentence.wordCount;
        }, 0);
        const sentenceFuture = [currentSentenceFuture].concat(futureSentences);

        return update(this.state.doc.assets[this.state.docPosition.asset], {
            sentences: {$set: sentenceFuture},
            sentenceCount: {$set: sentenceFuture.length},
            wordCount: {$set: wordCount}
        });
    }

    /**
     * [skipToWord description]
     * @param  {[type]} word           [description]
     * @param  {[type]} e              [description]
     */
    skipToWord = (word, e) => {
        e.stopPropagation();

        if (word.index.paragraph > this.state.docPosition.asset) {
            // Skip ahead
            // Highlight if active, toggle highlight
            if (this.state.highlightIsActive) {
                let start = {
                    asset: this.state.docPosition.asset,
                    sentence: this.state.docPosition.sentence,
                    word: this.state.docPosition.fixation[0]
                };

                let asset = this.state.doc.assets[this.state.docPosition.asset];
                let lastAssetSentence = asset.sentences[asset.sentenceCount - 1];

                let end = {
                    asset: this.state.docPosition.asset,
                    sentence: asset.sentenceCount - 1,
                    word: lastAssetSentence.wordCount
                };

                this.toggleWordHighlight(start, end); // Handles first asset skip

                let numIntermediateAssets = word.index.paragraph - this.state.docPosition.asset;

                if (numIntermediateAssets > 1) {
                    for (let i = this.state.docPosition.asset; i < word.index.paragraph; i++) {
                        asset = this.state.doc.assets[i];
                        start = {
                            asset: i,
                            sentence: 0,
                            word: 0
                        };
                        lastAssetSentence = asset.sentences[asset.sentenceCount - 1];
                        end = {
                            asset: i,
                            sentence: asset.sentenceCount - 1,
                            word: lastAssetSentence.wordCount
                        };
                        this.toggleWordHighlight(start, end);
                    }
                }
            }
        } else if (word.index.paragraph < this.state.docPosition.asset) {
            // Skip back
            // Highlight if active, toggle highlight
            if (this.state.highlightIsActive) {
                let start = {
                    asset: this.state.docPosition.asset,
                    sentence: this.state.docPosition.sentence,
                    word: 0
                };

                let endWord = this.state.docPosition.fixation[0] - 1 > 0 ? this.state.docPosition.fixation[0] - 1 : 0;

                let end = {
                    asset: this.state.docPosition.asset,
                    sentence: this.state.docPosition.sentence,
                    word: endWord + 1
                }

                this.toggleWordHighlight(start, end);

                let numIntermediateAssets = this.state.docPosition.asset - word.index.paragraph;

                if (numIntermediateAssets > 1) {
                    for (let i = word.index.paragraph; i < this.state.docPosition.asset; i++) {
                        asset = this.state.doc.assets[i];
                        start = {
                            asset: i,
                            sentence: 0,
                            word: 0
                        };
                        lastAssetSentence = asset.sentences[asset.sentenceCount - 1];
                        end = {
                            asset: i,
                            sentence: asset.sentenceCount - 1,
                            word: lastAssetSentence.wordCount
                        };
                        this.toggleWordHighlight(start, end);
                    }
                }
            }
        }

        // Highlight remaining words in new asset or currentAsset
        if (this.state.highlightIsActive && word.index.paragraph > this.state.docPosition.asset) {
            // Progression
            let start = {
                asset: word.index.paragraph,
                sentence: 0,
                word: 0
            };

            let end = {
                asset: word.index.paragraph,
                sentence: word.index.sentence,
                word: word.index.word
            };

            this.toggleWordHighlight(start, end);
        } else if (this.state.highlightIsActive && word.index.paragraph < this.state.docPosition.asset) {
            // Regression
            let start = {
                asset: word.index.paragraph,
                sentence: word.index.sentence,
                word: word.index.word
            };

            let previousAsset = this.state.doc.assets[word.index.paragraph];
            let previousLastSentence = previousAsset.sentences[previousAsset.sentenceCount - 1];

            let end = {
                asset: word.index.paragraph,
                sentence: previousAsset.sentenceCount - 1,
                word: previousLastSentence.words[previousLastSentence.wordCount - 1].index.word + 1
            };

            this.toggleWordHighlight(start, end);
        } else if (this.state.highlightIsActive) {
            // Same Asset
            let startWord, endWord;

            if (word.index.sentence == this.state.docPosition.sentence && word.index.word > this.state.docPosition.fixation[0]
                || word.index.sentence > this.state.docPosition.sentence) {
                startWord = this.state.docPosition.fixation[0];
                endWord = word.index.word;
            } else {
                startWord = word.index.word;
                endWord = this.state.docPosition.fixation[0];
            }

            let startSentence =  word.index.sentence > this.state.docPosition.sentence ? this.state.docPosition.sentence : word.index.sentence;
            let endSentence = word.index.sentence > this.state.docPosition.sentence ? word.index.sentence : this.state.docPosition.sentence;

            let start = {
                asset: this.state.docPosition.asset,
                sentence: startSentence,
                word: startWord,
            };

            let end = {
                asset: this.state.docPosition.asset,
                sentence: endSentence,
                word: endWord,
            };

            this.toggleWordHighlight(start, end);
        }

        const fixation = [word.index.word, Math.min(word.index.word + this.props.fixationWidth, this.state.doc.assets[word.index.paragraph].sentences[word.index.sentence].wordCount)];

        const docPosition = update(this.state.docPosition, {
            asset: {$set: word.index.paragraph},
            sentence: {$set: word.index.sentence},
            fixation: {$set: fixation}
        });

        this.setState({
            docPosition : docPosition
        });
    }

    loadAsset = (type, index) => {
        let fixation, docPosition;

        if (type === "start") {
            fixation = [0, this.props.fixationWidth];
            docPosition = update(this.state.docPosition, {
                asset: {$set: index},
                sentence: {$set: 0},
                fixation: {$set: fixation}
            });
        } else {
            let lastSentence = this.state.doc.assets[index].sentences[this.state.doc.assets[index].sentenceCount - 1];
            fixation = [lastSentence.wordCount - this.props.fixationWidth, lastSentence.wordCount];
            docPosition = update(this.state.docPosition, {
                asset: {$set: index},
                sentence: {$set: lastSentence.index.sentence},
                fixation: {$set: fixation}
            });
        }

        this.setState({
            scroll : 0,
            docPosition: docPosition
        });
    }

    toggleWordHighlight = (start, end) => {
        let toggle = (sentence, i) => {
            if (!sentence.words[i].highlight.active) {
                sentence.words[i].highlight.active = true;
                sentence.words[i].highlight.color = this.state.highlightColor;
            } else {
                sentence.words[i].highlight.active = false;
                sentence.words[i].highlight.color = null;
            }
        }

        let sentences = this.state.doc.assets[start.asset].sentences;

        if (start.sentence == end.sentence) {
            // Highlight: Single Sentence
            let sentence = sentences[start.sentence];
            for (let i = start.word; i < end.word; i++) {
                toggle(sentence, i);
            }
        } else if (end.sentence > start.sentence && end.sentence - start.sentence > 1) {
            // Highlight: Partial start, full middle, partial end
            let initialSentence = sentences[start.sentence];
            for (let i = start.word; i < initialSentence.wordCount; i++) {
                toggle(initialSentence, i);
            }

            let finalSentence = sentences[end.sentence];
            for (let i = 0; i < end.word; i++) {
                toggle(finalSentence, i);
            }

            // Sentences with all words highlight toggled
            for (let i = start.sentence + 1; i <= end.sentence - 1; i++) {
                let sentence = sentences[i];
                for (let j = 0; j < sentence.wordCount; j++) {
                    toggle(sentence, j);
                }
            }
        } else if (end.sentence > start.sentence && end.sentence - start.sentence == 1) {
            // Highlight: Partial Start, Partial End
            let initialSentence = sentences[start.sentence];
            for (let i = start.word; i < initialSentence.wordCount; i++) {
                toggle(initialSentence, i);
            }

            let finalSentence = sentences[end.sentence];
            for (let i = 0; i < end.word; i++) {
                toggle(finalSentence, i);
            }
        }
    }

    handleHighlight = (color) => {
        if (!this.state.highlightColor) {
            // First activation
            this.setState({
                highlightIsActive: !this.state.highlightIsActive,
                highlightColor: color
            });
        } else if (color == this.state.highlightColor) {
            // Highlight active, and deactivating
            this.setState({
                highlightIsActive: !this.state.highlightIsActive,
                highlightColor: null
            });
        } else if (color != this.state.highlightColor) {
            // Highlight is active and moving colors
            this.setState({
                highlightColor: color
            });
        }
    }

    deactivateHighlight = () => {
        this.setState({
            highlightIsActive: false,
            highlightColor: null
        });
    }

    toggleWordBookmark = (e) => {
        e.stopPropagation();
        let doc = this.state.doc;
        let assets = doc.assets;
        let wordParagraph = assets[this.state.docPosition.asset];

        wordParagraph.fixationWindow[0].hasBookmark = !wordParagraph.fixationWindow[0].hasBookmark;

        assets[this.state.docPosition.asset] = wordParagraph;

        doc.assets = assets;

        this.setState({
            doc : doc
        }, () => {
            return;
        });
    }

    toggleCruiseControl = (e) => {
        if (e) e.stopPropagation();

        if (!this.state.cruiseControlIsActive) {
            this.moveText(new Date().getTime());
        } else {
            clearTimeout(this.timer);
        }

        this.setState({
            cruiseControlIsActive: !this.state.cruiseControlIsActive
        });
    }
    /**
     * [setTimePerFixation description]
     * @param {[type]} addDelay in milliseconds
     */
    setTimePerFixation = (addDelay) => {
        let currentAsset = this.state.doc.assets[this.state.docPosition.asset];
        let millisecondsInMinute = 60000;
        let readMinutes = currentAsset.wordCount/this.props.readingSpeed;
        let numFixations = (this.props.readingSpeed/this.props.fixationWidth); // in 60 seconds
        let effectiveMillisecondsInMinute = (millisecondsInMinute - (addDelay*currentAsset.delay)/(3*readMinutes))/(1 + currentAsset.delay/(3*readMinutes*numFixations));
        let timePerFixation = effectiveMillisecondsInMinute/numFixations + addDelay; // measured in ms
        this.setState({
            timePerFixation: timePerFixation
        });
    }

    /**
     * [doTimer description]
     * @param  {[type]} length     [description]
     * @param  {[type]} resolution in frames/s
     * @param  {[type]} oninstance [description]
     * @param  {[type]} oncomplete [description]
     */
    doTimer = (length, resolution, oninstance, oncomplete) => {
        let steps = (length / 100) * (resolution / 10),
            speed = length / steps,
            count = 0,
            start = new Date().getTime();

        let instance = () => {
            if(count++ < steps) {
                oninstance();
                let diff = (new Date().getTime() - start) - (count * speed);
                this.timer = window.setTimeout(instance, (speed - diff));
            } else {
                let timestamp = new Date().getTime();
                this.setState({
                    checkAddDelay: true
                });
                oncomplete();
                this.moveText(timestamp);
            }
        }

        this.timer = window.setTimeout(instance, speed);
    }

    checkAddDelay = () => {
        let addDelay = 0;
        // Runs fully once per doTimer
        // Only checks end of sentence for punctiation currently
        if (this.state.checkAddDelay) {
            let currentSentence = this.state.doc.assets[this.state.docPosition.asset].sentences[this.state.docPosition.sentence];
            let futureFixationAssetIndex = futureFixationSentenceIndex = this.state.docPosition.sentence + 1 == this.state.doc.assets[this.state.docPosition.asset].sentenceCount
                && this.state.docPosition.fixation[0] + this.props.fixationWidth > currentSentence.wordCount ?
                this.state.docPosition.asset + 1
            :
                this.state.docPosition.asset;

            let futureFixationSentenceIndex = this.state.docPosition.sentence + 1 == this.state.doc.assets[this.state.docPosition.asset].sentenceCount
                && this.state.docPosition.fixation[0] + this.props.fixationWidth > currentSentence.wordCount ?
                0
            :
                this.state.docPosition.sentence;

            let futureFixationWords = this.state.docPosition.fixation[0] + this.props.fixationWidth > currentSentence.wordCount ?
                [0, this.props.fixationWidth]
            :
                [Math.min(this.state.docPosition.fixation[0] + this.props.fixationWidth, currentSentence.wordCount), Math.min(this.state.docPosition.fixation[1] + this.props.fixationWidth, currentSentence.wordCount)];

            // Determine if need to add time
            this.range(futureFixationWords[0], futureFixationWords[1]).forEach((index) => {
                let word = this.state.doc.assets[futureFixationAssetIndex].sentences[futureFixationSentenceIndex].words[index];
                if (word.delay && Object.keys(word.delay).length > 0) {
                    addDelay += word.delay.factor * this.state.timePerFixation/3;
                }
            });

            if (this.state.docPosition.sentence + 1 == this.state.doc.assets[futureFixationAssetIndex].sentenceCount
                && futureFixationWords[1] == this.state.doc.assets[futureFixationAssetIndex].sentences[futureFixationSentenceIndex].wordCount) {
                addDelay += this.state.timePerFixation;
            }

            // Set state as checked
            this.setState({
                checkAddDelay: false
            });

            // Update FixationTime
            this.setTimePerFixation(addDelay);
        }
    }

    /**
     * [moveText description]
     * @param  {[type]} timestamp time of method call
     */
    moveText = (timestamp) => {
        // Apply first transition
        // Avoid waiting for timePerFixation to elapse
        let diff = new Date().getTime() - timestamp;

        this.doTimer(
            this.state.timePerFixation - diff,
            20,
            this.checkAddDelay,
            this.updateViewport.bind({}, ScrollDirectionTypes.DOWN));
    }

    toggleMap = (e) => {
        e.stopPropagation();
        alert("Still To Implement: Will display a global map of text document.");
    }

    performWriteOperation = (e) => {
        e.stopPropagation();
        alert("Still To Implement: Will open writing interface to attach text note.");
    }

    performImageOperation = (e) => {
        e.stopPropagation();
        alert("Still To Implement: Will open up dialog to select image to attach.");
    }

    performRecordOperation = (e) => {
        e.stopPropagation();
        alert("Still To Implement: Will open up interface to record voicenote to attach.");
    }

    performDrawOperation = (e) => {
        e.stopPropagation();
        alert("Still To Implement: Will open up interface to draw a sketch to attach.");
    }

    getProgress = () => {
        let completed = this.getCurrentAssetHistory().wordCount +
                        this.state.doc.assets.slice(0, this.state.docPosition.asset).reduce((total, asset) => {
                            return total + asset.wordCount;
                        }, 0);

        let totalWords = this.state.doc.assets.reduce((total, asset) => {
            return total + asset.wordCount;
        }, 0);

        let progress = completed/totalWords * 100;

        return progress;
    }

    handleWindowFocusState = (e) => {
        if (!document.hidden && this.state.cruiseControlIsActive) {
            // Stop cruise control if leave web app tab
            this.moveText(new Date().getTime());
        } else if (document.hidden && this.state.cruiseControlIsActive) {
            // Resume cruise control if return to web app tab
            clearTimeout(this.timer);
        }
    }

    toggleDrawer = (e) => {
        e.stopPropagation();
        this.setState({
            drawerIsOpen: !this.state.drawerIsOpen
        });
    }

    range = (start, end, step = 1) => {
        end -= 1; // Makes range end exclusive
        const len = Math.floor((end - start) / step) + 1;
        return Array(len).fill().map((_, idx) => start + (idx * step));
    }
}

// ============= PropTypes ==============

Viewport.propTypes = {
    docURL             : PropTypes.string.isRequired,
    fontSize           : PropTypes.number.isRequired,
    fontFamily         : PropTypes.object.isRequired,
    fixationWidth      : PropTypes.number.isRequired,
    trackingSpeed      : PropTypes.number.isRequired,
    hand               : PropTypes.string.isRequired,
    skin               : PropTypes.string.isRequired,
    readingSpeed       : PropTypes.number.isRequired,
    changeReadingSpeed : PropTypes.func.isRequired

};

// ============= Styled Components ==============
const Container = styled.div`
    height                : 100vh;
    width                 : 100vw;
    display               : -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display               : -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display               : -ms-flexbox; /* TWEENER - IE 10 */
    display               : -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display               : flex;
    -webkit-flex-direction: column;
    -ms-flex-direction    : column;
    -moz-flex-direction   : column;
    flex-direction        : column;
    -webkit-align-items   : center;
	-ms-align-items       : center;
	-moz-align-items      : center;
	align-items           : center;
    overflow              : hidden;
    cursor: ${props => props.cruiseControlHaltIsActive ? props.customCursor : "auto"};
    color: ${props => props.skin == SkinTypes.LIGHT ?
                "rgba(0,0,0,0.87)"
            :
                props.skin == SkinTypes.CREAM ?
                        "#5f3e24"
                    :
                        "#bebebe"
            };
    background: ${props => props.skin == SkinTypes.LIGHT ?
                "#ffffff"
            :
                props.skin == SkinTypes.CREAM ?
                        "#f9f3e9"
                    :
                        "#171717"
            };
`;

const HistoryContainer = styled.section`
    position : relative;
    display               : -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display               : -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display               : -ms-flexbox; /* TWEENER - IE 10 */
    display               : -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display               : flex;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction    : column-reverse;
    -moz-flex-direction   : column-reverse;
    flex-direction        : column-reverse;
    -webkit-align-items   : flex-end;
	-ms-align-items       : flex-end;
	-moz-align-items      : flex-end;
	align-items           : flex-end;
    width    : 100%;
    max-width: ${props => 30*props.fontSize + 'px'};
    height   : 35vh;
    margin   : 0;
    opacity  : 0.8;

    &:after {
        position      : absolute;
        bottom        : 0;
        height        : 100%;
        width         : 100%;
        content       : "";
        background: ${props => props.skin == SkinTypes.LIGHT ?
                    "linear-gradient(to bottom,rgba(255,255,255, 1) 20%,rgba(255,255,255, 0) 70%)"
                :
                    props.skin == SkinTypes.CREAM ?
                            "linear-gradient(to bottom,rgba(249,243,233, 1) 20%,rgba(249,243,233, 0) 70%)"
                        :
                            "linear-gradient(to bottom,rgba(23,23,23, 1) 20%, rgba(23,23,23, 0) 70%)"
                };
        pointer-events: none; /* so the text is still selectable */
    }
`;

const FixationWindowContainer = styled.section`
    position                 : relative;
    display                  : -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display                  : -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display                  : -ms-flexbox; /* TWEENER - IE 10 */
    display                  : -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display                  : flex;
    -webkit-flex-direction   : row;
    -ms-flex-direction       : row;
    -moz-flex-direction      : row;
    flex-direction           : row;
    -webkit-align-items      : center;
	-ms-align-items          : center;
	-moz-align-items         : center;
	align-items              : center;
    -webkit-justify-content  : center;
    -ms-align-justify-content: center;
    -moz-justify-content     : center;
    justify-content          : center;
    width                    : 100vw;
    max-width                : ${window.innerWidth - 200};
    height                   : 30vh;
    margin                   : 0;
`;

const FixationWindow = styled.p`
    font-family       : ${props => props.fontFamily.regular || serif};
    font-size         : ${props => 2.5*props.fontSize + 'px' || '40px'};
    line-height       : ${props => 2.5*props.fontSize + 'px' || '40px'};
    margin            : 0;
    border-left-width: ${props => props.highlightIsActive ? "5px" : "0px"};
    border-left-color: ${props => props.theme[props.highlightColor]};
    border-left-style: solid;
    padding-left: ${props => props.highlightIsActive ? "10px" : "0px"};
    transition        : all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition   : all 0.3s;
    -ms-transition    : all 0.3s;
`;

const FutureContainer = styled.section`
    position : relative;
    display               : -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display               : -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display               : -ms-flexbox; /* TWEENER - IE 10 */
    display               : -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display               : flex;
    -webkit-flex-direction: column;
    -ms-flex-direction    : column;
    -moz-flex-direction   : column;
    flex-direction        : column;
    width    : 100%;
    max-width: ${props => 30*props.fontSize + 'px'};
    height   : 35vh;
    margin   : 0;
    opacity  : 0.2;

    &:after {
        position      : absolute;
        bottom        : 0;
        height        : 100%;
        width         : 100%;
        content       : "";
        background: ${props => props.skin == SkinTypes.LIGHT ?
                    "linear-gradient(to top, rgba(255,255,255, 1) 40%, rgba(255,255,255, 0) 80%)"
                :
                    props.skin == SkinTypes.CREAM ?
                            "linear-gradient(to top, rgba(249,243,233, 1) 40%, rgba(249,243,233, 0) 80%)"
                        :
                            "linear-gradient(to top, rgba(23,23,23, 1) 40%, rgba(23,23,23, 0) 80%)"
                };
        pointer-events: none; /* so the text is still selectable */
    }
`;

const TitleBar = styled.h3`
    position: fixed;
    top: 0px;
    left: 50%;
    margin: 15px 0px;
    transform: translateX(-50%);
    color: ${props => props.theme.gray};
    z-index: 5;
    font-weight: 200;
    font-size: 0.9em;
    user-select: none;
`;

const PauseLightPurple = "url(https://firebasestorage.googleapis.com/v0/b/flow-3db7f.appspot.com/o/flow-app-resources%2Fpause-lightpurple.png?alt=media&token=8e07a08e-ba26-4658-be64-df2e4ca2c77c), auto";
const PausePurple = "url(https://firebasestorage.googleapis.com/v0/b/flow-3db7f.appspot.com/o/flow-app-resources%2Fpause-purple.png?alt=media&token=854021c2-d26c-4f5e-8e94-22d703564351), auto";
const TransitionWords = ["and", "also", "then", "moreoever", "likewise", "comparatively", "correspondingly", "similarly", "furthermore", "additionally",
    "notably", "including", "namely", "chiefly", "indeed", "surely", "markedly", "especially", "specifically", "expressively", "surprisingly", "frequently", "significantly",
    "hence", "suddenly", "shortly", "henceforth", "meanwhile", "presently", "occasionally", "thus", "because", "but", "unlike", "or", "yet", "while", "albeit", "besides",
    "if", "unless", "lest", "lastly", "finally", "too", "although"];
