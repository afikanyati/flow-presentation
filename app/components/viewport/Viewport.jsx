// Libraries
import React                    from 'react';
import firebase                 from 'firebase';
import PropTypes                from 'prop-types';
import styled                   from 'styled-components';
import { CSSTransitionGroup }   from 'react-transition-group';
import update                   from 'immutability-helper';
import uuid                     from 'uuid';

// Components
import ScrollDirectionTypes     from '../../constants/scrollDirectionTypes';
import HighlightTypes           from '../../constants/highlightColorTypes';
import SkinTypes                from '../../constants/skinTypes';
import ToolMenu                 from './ToolMenu';
import Paragraph                from './Paragraph';
import Word                     from './Word';
import StatusBar                from './StatusBar';
import CruiseControlButton      from './CruiseControlButton';
import MapButton                from './MapButton';
import DefinitionsDrawer        from './DefinitionsDrawer';
import CompletionMeter          from './CompletionMeter';
import PauseLightPurple         from '../../assets/images/icons/pause-lightpurple-cursor.png';
import PausePurple               from '../../assets/images/icons/pause-purple-cursor.png';

/**
 * The Viewport component is a component used to
 */
export default class Viewport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scroll                        : 0,
            docPosition                   : {
                asset                     : 0,
                sentence                  : 0,
                fixation                  : [0, this.props.fixationWidth] // end: one index ahead because of split
            },
            doc                           : {},
            highlightIsActive             : false,
            cruiseControlIsActive         : false,
            cruiseControlHaltIsActive     : false,
            timePerFixation               : 1, // In milliseconds,
            checkSumDelay                 : true, // checked once every fixation cycle
            showAnnotations               : true,
            highlightColor                : null,
            drawerIsOpen                  : false,
            docLoaded                     : false,
            numLineChars                  : 75,
            numPageParagraphs             : 3,
            numFixationBreaksInParagraph : 0,
            editingPace                   : false,
            x                             : 0
        }
    }

    componentWillMount() {
        // console.log("-----Viewport");
        document.body.style.setProperty('--fixation-transition', `opacity ${fixationTransitionDuration}ms ease-in`);
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
                let timePerFixation = this.calcTimePerFixation(this.props.readingPace, 0);
                this.setState({
                    timePerFixation: timePerFixation
                });

                // Set Title
                if (document.title != this.state.doc.title) {
                    document.title = this.state.doc.title;
                }
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.readingPace != this.props.readingPace && this.state.cruiseControlIsActive) {
            let timePerFixation = this.calcTimePerFixation(nextProps.readingPace, 0);
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
        let history = this.getCurrentAssetHistory();
        let fixationWindow = this.getFixationWindow();
        let future = this.getCurrentAssetFuture();
        let doc = {...this.state.doc};
        return (
            <Container
                skin                      ={this.props.skin}
                cruiseControlHaltIsActive ={this.state.cruiseControlHaltIsActive}
                customCursor              ={this.props.skin == SkinTypes.DARK ?
                        `url(${PauseLightPurple}), auto`
                    :
                        `url(${PausePurple}), auto`}
                onClick                   ={this.handleClick}>
                <StatusBar
                    hand                      ={this.props.hand}
                    skin                      ={this.props.skin}
                    readingPace               ={this.props.readingPace}
                    cruiseControlHaltIsActive ={this.state.cruiseControlHaltIsActive}
                    showAnnotations           ={this.state.showAnnotations}
                    isScrolling               ={this.isScrolling}
                    setReadingPace            ={this.props.setReadingPace}
                    editingPace={this.state.editingPace}
                    toggleEditingPace={this.toggleEditingPace}/>
                <CompletionMeter
                    doc                    ={this.state.doc}
                    docPosition            ={this.state.docPosition}
                    numPageParagraphs      ={this.state.numPageParagraphs}
                    fontSize               ={this.props.fontSize}
                    skin                   ={this.props.skin}
                    getCurrentAssetHistory ={this.getCurrentAssetHistory}
                    selectPage             ={this.selectPage}
                    numLineChars           ={this.state.numLineChars} />
                {/* History Container is Reverse Order
                    The first Paragraph mapping belongs to the current reading asset
                    */}
                <HistoryContainer
                    skin         ={this.props.skin}
                    fontSize     ={this.props.fontSize}
                    numLineChars ={this.state.numLineChars}
                    className="history-container">
                    <ParagraphContainer
                        key          ={`parent =[null], this =[type ='${history.type}-history', index ='${this.state.docPosition.asset}']`}
                        fontSize     ={this.props.fontSize}
                        numLineChars ={this.state.numLineChars}>
                        <CSSTransitionGroup
                              transitionName          ={"delimiter"}
                              transitionEnter         ={false}
                              transitionLeave         ={false}
                              transitionAppear        ={true}
                              transitionAppearTimeout ={500}>
                                {history.index.asset % this.state.numPageParagraphs == 0 ?
                                    [<PageDelimiter
                                        key  ={`delimiter-history asset-index =${history.index.asset} page-number =${Math.floor(history.index.asset/this.state.numPageParagraphs)}`}
                                        skin ={this.props.skin}>
                                        <PageNumber
                                            skin={this.props.skin}>
                                            {`${Math.floor(history.index.asset/this.state.numPageParagraphs) + 1} of ${Math.floor(this.state.doc.assets[this.state.doc.assets.length - 1].index.asset/this.state.numPageParagraphs) + 1}`}
                                        </PageNumber>
                                    </PageDelimiter>]
                                :
                                    []
                                }
                        </CSSTransitionGroup>
                        <Paragraph
                            asset                      ={history}
                            fontSize                   ={this.props.fontSize}
                            fontFamily                 ={this.props.fontFamily}
                            timePerFixation            ={this.state.timePerFixation}
                            fixationTransitionDuration ={fixationTransitionDuration}
                            skipToWord                 ={this.skipToWord}
                            skin                       ={this.props.skin}
                            showAnnotations            ={this.state.showAnnotations}
                            cruiseControlHaltIsActive  ={this.state.cruiseControlHaltIsActive} />
                    </ParagraphContainer>
                      {doc.assets.slice(Math.max(0, this.state.docPosition.asset - 2), this.state.docPosition.asset).reverse().map((asset, index) => {
                        return (
                            <ParagraphContainer
                                key          ={`parent =[null], this =[type ='${asset.type}', index ='${asset.index.asset}']`}
                                fontSize     ={this.props.fontSize}
                                numLineChars ={this.state.numLineChars}>
                                <CSSTransitionGroup
                                      transitionName          ={"delimiter"}
                                      transitionEnter         ={false}
                                      transitionLeave         ={false}
                                      transitionAppear        ={true}
                                      transitionAppearTimeout ={500}>
                                    {asset.index.asset % this.state.numPageParagraphs == 0 ?
                                        [<PageDelimiter
                                            key  ={`delimiter-future asset-index =${asset.index.asset} page-number =${Math.floor(asset.index.asset/this.state.numPageParagraphs)}`}
                                            skin ={this.props.skin}>
                                            <PageNumber
                                                skin={this.props.skin}>
                                                {`${Math.floor(asset.index.asset/this.state.numPageParagraphs) + 1} of ${Math.floor(this.state.doc.assets[this.state.doc.assets.length - 1].index.asset/this.state.numPageParagraphs) + 1}`}
                                            </PageNumber>
                                        </PageDelimiter>]
                                    :
                                        []
                                    }
                                </CSSTransitionGroup>
                                <Paragraph
                                    asset                      ={asset}
                                    fontSize                   ={this.props.fontSize}
                                    fontFamily                 ={this.props.fontFamily}
                                    timePerFixation            ={this.state.timePerFixation}
                                    fixationTransitionDuration ={fixationTransitionDuration}
                                    skipToWord                 ={this.skipToWord}
                                    skin                       ={this.props.skin}
                                    showAnnotations            ={this.state.showAnnotations}
                                    cruiseControlHaltIsActive  ={this.state.cruiseControlHaltIsActive} />
                            </ParagraphContainer>
                        );
                    })}
                </HistoryContainer>
                <FixationWindowContainer>
                    <FixationWindow
                        highlightIsActive ={this.state.highlightIsActive}
                        highlightColor    ={this.state.highlightColor}
                        fontSize          ={this.props.fontSize}
                        fontFamily        ={this.props.fontFamily}
                        numLineChars ={this.state.numLineChars}
                        className={"fixation-window"}>
                        <CSSTransitionGroup
                              transitionName         ="fixation"
                              transitionEnterTimeout ={Math.min(fixationTransitionDuration, this.state.timePerFixation)}
                              transitionLeave        ={false}>
                            {fixationWindow.map((word) => {
                                return (
                                    <Word
                                        key                       ={`parent =[type ='paragraph', index ='${this.state.docPosition.asset}'], this =[type ='word', index ='${word.index.word}']`}
                                        paragraph                 ={this.state.docPosition.asset}
                                        word                      ={word}
                                        inFixationWindow          ={true}
                                        fontFamily                ={this.props.fontFamily}
                                        skipToWord                ={this.skipToWord}
                                        skin                      ={this.props.skin}
                                        showAnnotations           ={this.state.showAnnotations}
                                        cruiseControlHaltIsActive ={this.state.cruiseControlHaltIsActive} />
                                );
                            })}
                        </CSSTransitionGroup>
                    </FixationWindow>
                </FixationWindowContainer>
                <FutureContainer
                    skin         ={this.props.skin}
                    fontSize     ={this.props.fontSize}
                    numLineChars ={this.state.numLineChars}
                    className="future-container">
                    <Paragraph
                        key                        ={`parent =[null], this =[type ='${future.type}-future', index ='${this.state.docPosition.asset}']`}
                        asset                      ={future}
                        fontSize                   ={this.props.fontSize}
                        fontFamily                 ={this.props.fontFamily}
                        timePerFixation            ={this.state.timePerFixation}
                        fixationTransitionDuration ={fixationTransitionDuration}
                        skipToWord                 ={this.skipToWord}
                        skin                       ={this.props.skin}
                        showAnnotations            ={this.state.showAnnotations}
                        cruiseControlHaltIsActive  ={this.state.cruiseControlHaltIsActive} />
                        {doc.assets.slice(this.state.docPosition.asset + 1, Math.min(this.state.docPosition.asset + 3, this.state.doc.assets.length)).map((asset, index) => {
                            return (
                                <ParagraphContainer
                                    key          ={`parent =[null], this =[type ='paragraph', index ='${asset.index.asset}']`}
                                    fontSize     ={this.props.fontSize}
                                    numLineChars ={this.state.numLineChars}>
                                    <CSSTransitionGroup
                                          transitionName          ={"delimiter"}
                                          transitionEnter         ={false}
                                          transitionLeave         ={false}
                                          transitionAppear        ={true}
                                          transitionAppearTimeout ={500}>
                                        {asset.index.asset % this.state.numPageParagraphs == 0 ?
                                            [<PageDelimiter
                                                key  ={`delimiter-future asset-index =${asset.index.asset} page-number =${Math.floor(asset.index.asset/this.state.numPageParagraphs)}`}
                                                skin ={this.props.skin}>
                                                <PageNumber
                                                    skin={this.props.skin}>
                                                    {`${Math.floor(asset.index.asset/this.state.numPageParagraphs) + 1} of ${Math.floor(this.state.doc.assets[this.state.doc.assets.length - 1].index.asset/this.state.numPageParagraphs) + 1}`}
                                                </PageNumber>
                                            </PageDelimiter>]
                                        :
                                            []
                                        }
                                    </CSSTransitionGroup>
                                    <Paragraph
                                        asset                      ={asset}
                                        fontSize                   ={this.props.fontSize}
                                        fontFamily                 ={this.props.fontFamily}
                                        timePerFixation            ={this.state.timePerFixation}
                                        fixationTransitionDuration ={fixationTransitionDuration}
                                        skipToWord                 ={this.skipToWord}
                                        skin                       ={this.props.skin}
                                        showAnnotations            ={this.state.showAnnotations}
                                        cruiseControlHaltIsActive  ={this.state.cruiseControlHaltIsActive} />
                                </ParagraphContainer>
                            );
                        })}
                </FutureContainer>
                <DefinitionsDrawer
                    skin                       ={this.props.skin}
                    drawerIsOpen               ={this.state.drawerIsOpen}
                    toggleDrawer               ={this.toggleDrawer}
                    fixationWords              ={fixationWindow}
                    timePerFixation            ={this.state.timePerFixation}
                    fixationTransitionDuration ={fixationTransitionDuration}
                    cruiseControlHaltIsActive  ={this.state.cruiseControlHaltIsActive} />
                <ToolMenu
                    hand                      ={this.props.hand}
                    skin                      ={this.props.skin}
                    handleHighlight           ={this.handleHighlight}
                    toggleWordBookmark        ={this.toggleWordBookmark}
                    fixationWindow            ={fixationWindow}
                    highlightIsActive         ={this.state.highlightIsActive}
                    highlightColor            ={this.state.highlightColor}
                    deactivateHighlight       ={this.deactivateHighlight}
                    performWriteOperation     ={this.performWriteOperation}
                    performImageOperation     ={this.performImageOperation}
                    performRecordOperation    ={this.performRecordOperation}
                    performDrawOperation      ={this.performDrawOperation}
                    cruiseControlHaltIsActive ={this.state.cruiseControlHaltIsActive} />
                <CruiseControlButton
                    hand                      ={this.props.hand}
                    skin                      ={this.props.skin}
                    cruiseControlIsActive     ={this.state.cruiseControlIsActive}
                    toggleCruiseControl       ={this.toggleCruiseControl}
                    cruiseControlHaltIsActive ={this.state.cruiseControlHaltIsActive} />
                <MapButton
                    hand                      ={this.props.hand}
                    skin                      ={this.props.skin}
                    toggleMap                 ={this.toggleMap}
                    cruiseControlHaltIsActive ={this.state.cruiseControlHaltIsActive} />
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

        if (keys[e.keyCode] && !this.state.editingPace) {
            this.preventDefault(e);

            if (e.keyCode == 32) {
                // Space Key
                this.preventDefault(e);
                this.toggleCruiseControl(e);
                return true;
            } else if ((e.keyCode == 37 || e.keyCode == 38) && this.state.cruiseControlIsActive) {
                // Up or Left and Cruise Control Active
                window.clearTimeout(this.isScrolling);
                this.props.setReadingPace(this.props.readingPace + 1);
                return true;
            } else if ((e.keyCode == 37 || e.keyCode == 38) && !this.state.cruiseControlIsActive) {
                // Up or Left and Cruise Control Inactive
                this.updateViewport(ScrollDirectionTypes.UP);
                return true;
            } else if ((e.keyCode == 39 || e.keyCode == 40) && this.state.cruiseControlIsActive) {
                // Down or Right and Cruise Control Active
                window.clearTimeout(this.isScrolling);
                this.props.setReadingPace(this.props.readingPace - 1);
                return true;
            } else if ((e.keyCode == 39 || e.keyCode == 40) && !this.state.cruiseControlIsActive) {
                // Down or Right and Cruise Control Inactive
                this.updateViewport(ScrollDirectionTypes.DOWN);
                return true;
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
            let pace = direction == ScrollDirectionTypes.UP ? this.props.readingPace + 1 : this.props.readingPace - 1;
            window.clearTimeout(this.isScrolling);
            this.props.setReadingPace(pace);
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

            let historyFixation = this.getPreviousFixation();
            nextSentence = historyFixation[1];
            nextFixation = historyFixation[2];
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

            let futureFixation = this.getNextFixation();

            nextSentence = futureFixation[1];
            nextFixation = futureFixation[2];
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
        const fixationWords = currentSentence.words.slice(this.state.docPosition.fixation[0], this.state.docPosition.fixation[1]);
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

    getPreviousFixation = () => {
        let lastFixationAssetIndex = this.state.docPosition.asset - 1 >=0 && this.state.docPosition.sentence - 1 < 0
            && this.state.docPosition.fixation[0] == 0 ?
            this.state.docPosition.asset - 1
        :
            this.state.docPosition.asset;

        let lastFixationSentenceIndex = this.state.docPosition.fixation[0] == 0 ?   // You're at beginning of sentence
            this.state.docPosition.sentence - 1 < 0 ?   // You're at beginning of asset
                this.state.docPosition.asset - 1 < 0 ? // You're at beginning of document
                    this.state.docPosition.sentence
                :
                    this.state.doc.assets[lastFixationAssetIndex].sentences[this.state.doc.assets[lastFixationAssetIndex].sentenceCount - 1].index.sentence
            :
                this.state.docPosition.sentence - 1
        :
            this.state.docPosition.sentence;

        let lastFixationWords = this.state.docPosition.fixation[0] == 0 ? // You're at beginning of sentence
            this.state.docPosition.sentence - 1 < 0 ? // You're at beginning of asset
                this.state.docPosition.asset - 1 < 0 ? // You're at beginning of document
                    [0,0]
                :
                    [this.state.doc.assets[lastFixationAssetIndex].sentences[lastFixationSentenceIndex].wordCount - this.props.fixationWidth, this.state.doc.assets[lastFixationAssetIndex].sentences[lastFixationSentenceIndex].wordCount]
            :
                [this.state.doc.assets[lastFixationAssetIndex].sentences[lastFixationSentenceIndex].wordCount - this.props.fixationWidth, this.state.doc.assets[lastFixationAssetIndex].sentences[lastFixationSentenceIndex].wordCount]
        :
            [Math.max(0, this.state.docPosition.fixation[0] - this.props.fixationWidth), this.state.docPosition.fixation[0]];

        let fixationLength = document.getElementsByClassName('history-container')[0].clientWidth;

        while (this.calcFixationLength(lastFixationAssetIndex, lastFixationSentenceIndex, lastFixationWords) >= fixationLength) {
            lastFixationWords = update(lastFixationWords, {
                0: {$set: lastFixationWords[0] + 1}
            });
        }

        return [lastFixationAssetIndex, lastFixationSentenceIndex, lastFixationWords];
    }

    getNextFixation = () => {
        let fixationBreaks = 0
        let currentSentence = this.state.doc.assets[this.state.docPosition.asset].sentences[this.state.docPosition.sentence];
        let nextFixationAssetIndex = this.state.docPosition.asset + 1 < this.state.doc.assets.length
            && this.state.docPosition.sentence + 1 == this.state.doc.assets[this.state.docPosition.asset].sentenceCount
            && this.state.docPosition.fixation[1] == currentSentence.wordCount ?
            this.state.docPosition.asset + 1
        :
            this.state.docPosition.asset;

        let nextFixationSentenceIndex = this.state.docPosition.fixation[1] == currentSentence.wordCount && this.state.docPosition.asset + 1 < this.state.doc.assets.length ?
            this.state.docPosition.sentence + 1 == this.state.doc.assets[this.state.docPosition.asset].sentenceCount ?
                0
            :
                this.state.docPosition.sentence + 1
        :
            this.state.docPosition.sentence;

        let nextFixationWords = this.state.docPosition.fixation[1] == currentSentence.wordCount && this.state.docPosition.asset + 1 < this.state.doc.assets.length ?
            [0, this.props.fixationWidth]
        :
            [this.state.docPosition.fixation[1], Math.min(this.state.docPosition.fixation[1] + this.props.fixationWidth, currentSentence.wordCount)];

        let fixationLength = document.getElementsByClassName('history-container')[0].clientWidth;
        console.log("fixationLength: ", fixationLength);
        console.log("Current Fixation Length: ", this.calcFixationLength(nextFixationAssetIndex, nextFixationSentenceIndex, nextFixationWords));
        while (this.calcFixationLength(nextFixationAssetIndex, nextFixationSentenceIndex, nextFixationWords) >= fixationLength) {
            nextFixationWords = update(nextFixationWords, {
                1: {$set: nextFixationWords[1] - 1}
            });
            fixationBreaks += 1;
        }

        this.setState({
            numFixationBreaksInParagraph: this.state.numFixationBreaksInParagraph + fixationBreaks
        });

        return [nextFixationAssetIndex, nextFixationSentenceIndex, nextFixationWords];
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

        let nextFixation = [word.index.word, Math.min(word.index.word + this.props.fixationWidth, this.state.doc.assets[word.index.paragraph].sentences[word.index.sentence].wordCount)];
        let fixationLength = document.getElementsByClassName('history-container')[0].clientWidth;

        // Constrain Fixation Words to Window
        while (this.calcFixationLength(word.index.paragraph, word.index.sentence, nextFixation) >= fixationLength) {
            nextFixation = update(nextFixation, {
                1: {$set: nextFixation[1] - 1}
            });
        }

        const docPosition = update(this.state.docPosition, {
            asset: {$set: word.index.paragraph},
            sentence: {$set: word.index.sentence},
            fixation: {$set: nextFixation}
        });

        this.setState({
            docPosition : docPosition
        });
    }

    loadAsset = (type, index) => {
        let fixation, docPosition;

        if (type === "start") {
            fixation = [0, this.props.fixationWidth];
            let fixationLength = document.getElementsByClassName('history-container')[0].clientWidth;
            while (this.calcFixationLength(index, 0, fixation) >= fixationLength) {
                fixation = update(fixation, {
                    1: {$set: fixation[1] - 1}
                });
            }

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
            docPosition: docPosition,
            numFixationBreaksInParagraph: 0
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
        let wordSentence = this.state.doc.assets[this.state.docPosition.asset].sentences[this.state.docPosition.sentence];
        let hasBookmark = !wordSentence.words[this.state.docPosition.fixation[0]].hasBookmark;

        const doc = update(this.state.doc, {
            assets: {
                [this.state.docPosition.asset]:
                    {sentences: {
                        [this.state.docPosition.sentence]: {
                            words: {
                                [this.state.docPosition.fixation[0]]: {
                                    hasBookmark: {
                                        $set: hasBookmark
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        this.setState({
            doc: doc
        })
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
     * Called for every fixation
     * Readjusts timePerFixation to factor in delay of given fixation Window
     * Attempts to reconcile expected reading time of sentence to consider overall delay time of sentence
     * Using a timePerFixation that includes Delay of Current Fixation
     * @param {[type]} sumDelay in milliseconds
     */
    calcTimePerFixation = (readingPace, sumDelay) => {
        const millisecondsInMinute = 60000;
        let currentAsset = this.state.doc.assets[this.state.docPosition.asset];
        let readMinutes = currentAsset.wordCount/readingPace;
        let numFixations = (readingPace/this.props.fixationWidth) + this.state.numFixationBreaksInParagraph; // in 60 seconds
        let effectiveMillisecondsInMinute = millisecondsInMinute/(1 + currentAsset.delay/(fractionOfFixation*readMinutes*numFixations));
        let timePerFixation = (1 + sumDelay/fractionOfFixation) * effectiveMillisecondsInMinute/numFixations; // measured in ms
        if (timePerFixation < fixationTransitionDuration) {
            document.body.style.setProperty('--fixation-transition', `opacity ${timePerFixation}ms ease-in`);
        } else if (parseInt(getComputedStyle(document.body).getPropertyValue('--fixation-transition').replace(/([A-Za-z]|\s|-)/g,'')) < fixationTransitionDuration) {
            document.body.style.setProperty('--fixation-transition', `opacity ${fixationTransitionDuration}ms ease-in`);
        }

        this.setState({
            x: this.state.x + timePerFixation
        });
        // console.log("timePerFixation: ", timePerFixation);
        // console.log("Accumulated timePerFixation: ", this.state.x);
        // console.log("numFixationBreaksInParagraph: ", this.state.numFixationBreaksInParagraph);
        return timePerFixation;
    }

    checkSumDelay = () => {
        let sumDelay = 0;
        // Runs fully once per doTimer
        // Only checks end of sentence for punctiation currently
        if (this.state.checkSumDelay) {
            let futureFixation = this.getNextFixation();

            // Determine if need to add time
            this.range(futureFixation[2][0], futureFixation[2][1]).forEach((index) => {
                let word = this.state.doc.assets[futureFixation[0]].sentences[futureFixation[1]].words[index];
                if (word && word.delay && word.delay.length > 0) {
                    word.delay.forEach((delay) => {
                        sumDelay += delay.factor;
                    });
                }
            });

            // Delay Next Paragraph
            if (this.state.docPosition.sentence + 1 == this.state.doc.assets[futureFixation[0]].sentenceCount
                && futureFixation[2][1] == this.state.doc.assets[futureFixation[0]].sentences[futureFixation[1]].wordCount) {
                sumDelay += fractionOfFixation; // Should last one timePerFixation = delay.factor (fractionOfFixation) * timePerFixation/fractionOfFixation
            }

            // Update FixationTime
            let timePerFixation = this.calcTimePerFixation(this.props.readingPace, sumDelay);

            // Set state as checked
            this.setState({
                checkSumDelay: false,
                timePerFixation: timePerFixation
            });
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
            10,
            this.checkSumDelay,
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

    toggleEditingPace = () => {
        this.setState({
            editingPace: !this.state.editingPace
        });
    }

    selectPage = (pageNumber) => {
        let assetIndex = pageNumber * this.state.numPageParagraphs;
        let finalAssetIndex = this.state.doc.assets[this.state.doc.assets.length - 1].index.asset;
        if (0 <= assetIndex && assetIndex <= finalAssetIndex) this.loadAsset("start", assetIndex);
    }

    // ========== Helper Functions ==========

    /**
     * Helper Function
     * @param  {[type]} length     [description]
     * @param  {[type]} resolution in frames/s
     * @param  {[type]} oninstance [description]
     * @param  {[type]} oncomplete [description]
     */
    doTimer = (length, resolution, oninstance, oncomplete) => {
        let steps = (length/100) * (resolution/10),
            speed = length/steps,
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
                    checkSumDelay: true
                });
                oncomplete();
                this.moveText(timestamp);
            }
        }

        this.timer = window.setTimeout(instance, speed);
    }

    /**
     * Helper Function
     * @param  {[type]} start    [description]
     * @param  {[type]} end      [description]
     * @param  {Number} [step=1] [description]
     * @return {[type]}          [description]
     */
    range = (start, end, step = 1) => {
        end -= 1; // Makes range end exclusive
        const len = Math.floor((end - start) / step) + 1;
        return Array(len).fill().map((_, idx) => start + (idx * step));
    }

    /**
     * Helper Function
     * @param  {[type]} words [description]
     * @return {[type]}       [description]
     */
    calcFixationLength = (assetIndex, sentenceIndex, fixation) => {
        const sentence = {...this.state.doc.assets[assetIndex].sentences[sentenceIndex]};
        const words = sentence.words.slice(fixation[0], fixation[1]);

        if (!this.canvas) {
            let canvas = document.createElement('canvas');
            this.canvasContext = canvas.getContext("2d");
            this.canvasContext.font = `${this.props.fontSize}px ${this.props.fontFamily.regular}`;
        }
        let width = this.canvasContext.measureText(words.join(" ") + " ");
        this.canvasContext.clearRect(0, 0, this.canvasContext.width, this.canvasContext.height);

        return width.width;
    }
}

// ============= PropTypes ==============

Viewport.propTypes = {
    docURL         : PropTypes.string.isRequired,
    fontSize       : PropTypes.number.isRequired,
    fontFamily     : PropTypes.object.isRequired,
    fixationWidth  : PropTypes.number.isRequired,
    trackingSpeed  : PropTypes.number.isRequired,
    hand           : PropTypes.string.isRequired,
    skin           : PropTypes.string.isRequired,
    readingPace    : PropTypes.number.isRequired,
    setReadingPace : PropTypes.func.isRequired

};

// ============= Styled Components ==============
const Container = styled.div`
    height                : 100vh;
    width                 : 100vw;
    display               : flex;
    flex-direction        : column;
	align-items           : center;
    overflow              : hidden;
    cursor: ${props => props.cruiseControlHaltIsActive ? props.customCursor : "auto"};
    color: ${props => props.skin == SkinTypes.LIGHT ?
                props.theme.lightTextColor
            :
                props.skin == SkinTypes.CREAM ?
                        props.theme.creamTextColor
                    :
                        props.theme.darkTextColor
            };
    background: ${props => props.skin == SkinTypes.LIGHT ?
                props.theme.white
            :
                props.skin == SkinTypes.CREAM ?
                        props.theme.cream
                    :
                        props.theme.pitchBlack
            };
`;

const HistoryContainer = styled.section`
    position : relative;
    display               : flex;
    flex-direction        : column-reverse;
	align-items           : flex-end;
    width: ${props => props.numLineChars + 'ch'};
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
                    "linear-gradient(to bottom,rgba(255,255,255, 1) 18%,rgba(255,255,255, 0) 70%)"
                :
                    props.skin == SkinTypes.CREAM ?
                            "linear-gradient(to bottom,rgba(249,243,233, 1) 18%,rgba(249,243,233, 0) 70%)"
                        :
                            "linear-gradient(to bottom,rgba(23,23,23, 1) 18%, rgba(23,23,23, 0) 70%)"
                };
        pointer-events: none; /* so the text is still selectable */
    }

    @media (max-width: ${props => props.numLineChars + 'ch'}) {
        width: 90vw;
    }
`;

const FixationWindowContainer = styled.section`
    position                 : relative;
    display                  : flex;
    flex-direction           : row;
	align-items              : center;
    justify-content          : center;
    width                    : 100vw;
    height                   : 30vh;
    margin                   : 0;
`;

const FixationWindow = styled.p`
    width: ${props => props.numLineChars + 'ch'};
    font-family       : ${props => props.fontFamily.regular || serif};
    font-size         : ${props => 2.5*props.fontSize + 'px' || '40px'};
    line-height       : ${props => 2.5*props.fontSize + 'px' || '40px'};
    margin            : 0;
    border-left-width: ${props => props.highlightIsActive ? "5px" : "0px"};
    border-left-color: ${props => props.theme[props.highlightColor]};
    border-left-style: solid;
    padding-left: ${props => props.highlightIsActive ? "10px" : "0px"};
    text-align: center;
    transition        : all 0.3s;
`;

const FutureContainer = styled.section`
    position : relative;
    display               : flex;
    flex-direction        : column;
    width: ${props => props.numLineChars + 'ch'};
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

    @media (max-width: ${props => props.numLineChars + 'ch'}) {
        width: 90vw;
    }
`;

const PageDelimiter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1px;
    width: 100%;
    background: ${props => props.skin == SkinTypes.LIGHT ?
                props.theme.black
            :
                props.skin == SkinTypes.CREAM ?
                        props.theme.creamTextColor
                    :
                        props.theme.gray
            };
    margin: 30px 0;
`;

const PageNumber = styled.h3`
    color: ${props => props.skin == SkinTypes.LIGHT ?
                props.theme.black
            :
                props.skin == SkinTypes.CREAM ?
                        props.theme.creamTextColor
                    :
                        props.theme.gray
            };
    font-weight: 300;
    font-size: 1em;
    background: ${props => props.skin == SkinTypes.LIGHT ?
                props.theme.white
            :
                props.skin == SkinTypes.CREAM ?
                        props.theme.cream
                    :
                        props.theme.pitchBlack
            };
    margin: 0;
    padding: 5px 15px;
    user-select: none;
`;

const ParagraphContainer = styled.div`
    width: ${props => props.numLineChars + 'ch'};

    @media (max-width: ${props => props.numLineChars + 'ch'}) {
        width: 90vw;
    }
`;

const fractionOfFixation = 3;
const fixationTransitionDuration = 200;
