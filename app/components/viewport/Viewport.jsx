// Libraries
import React                    from 'react';
import firebase                 from 'firebase';
import PropTypes                from 'prop-types';
import styled                   from 'styled-components';
import { CSSTransitionGroup }   from 'react-transition-group';
import equal                    from 'deep-equal';

// Components
import ScrollDirectionTypes     from '../../constants/scrollDirectionTypes';
import HighlightTypes          from '../../constants/highlightColorTypes';
import SkinTypes                from '../../constants/skinTypes';
import FeatureMenu              from './FeatureMenu';
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
            scroll            : 0,
            assetCurrentIndex : 0,
            doc            : {},
            highlightIsActive: false,
            cruiseControlIsActive: false,
            cruiseControlHaltIsActive: false,
            timePerFixation: 0, // In milliseconds,
            checkAddDelay: false, // checked once every fixation cycle
            showAnnotations: true,
            highlightColor : null,
            drawerIsOpen: false
        }
    }

    componentWillMount() {
        // console.log("-----Viewport");

        // let assets = doc.assets;
        // for (let asset in assets) {
        //     let words = assets[asset].future;
        //     let refactoredWords = [];
        //     for (let i in words) {
        //         let word = words[i];
        //         word["italic"] = false;
        //         word["bold"] = false;
        //         refactoredWords.push(word);
        //     }
        //     assets[asset].future = refactoredWords;
        // }
        //
        // doc["assets"] = assets;
        // console.log(JSON.stringify(doc));

        // let assetDelay = 0;
        // let sentenceEndingSet = new Set([".", "?", "!", "..."]);
        // let pauseSet = new Set([",", ";", ":", "\u2014", "—"]); // \u2014 is the em dash
        // let transitionSet = new Set(TransitionWords);
        //
        // for (let asset in assets) {
        //     let words = assets[asset].future;
        //     let refactoredWords = [];
        //     let paragraphDelay = 0;
        //     for (let i in words) {
        //         let word = words[i];
        //         word["attachments"] = {};
        //         word["delay"] = {};
        //         if (sentenceEndingSet.has(word.text.charAt(word.text.length - 1))) {
        //             // Sentence Ending
        //             word["delay"] = {type: "ending", factor: 2};
        //             paragraphDelay += 2;
        //         } else if (pauseSet.has(word.text.charAt(word.text.length - 1))) {
        //             // Punctuation Pauses
        //             word["delay"] = {type: "pause", factor: 1};
        //             paragraphDelay += 1;
        //         } else if (transitionSet.has(word.text.replace(/[,.?!;:]/, '').toLowerCase())) {
        //             // Propositional Integration Word Pause
        //             word["delay"] = {type: "proposition", factor: 1};
        //             paragraphDelay += 1;
        //         }
        //         refactoredWords.push(word);
        //     }
        //     assets[asset].future = refactoredWords;
        //     assets[asset]["delay"] = paragraphDelay;
        //     assetDelay += paragraphDelay;
        // }
        //
        // doc = {
        //     assets: assets,
        //     delay: assetDelay + assets.length,
        //     title: "Virtual Reality and Augmented Reality in Education",
        //     author: "Hammer & Tusk",
        //     date: new Date().toISOString(),
        //     subtitle: "",
        //     cover: "",
        //     tags: ["Virtual Reality", "Augmented Reality", "Education", "Immersive", "VR"],
        //     genre: "Science"
        // };
        //

        // console.log(JSON.stringify(doc));
        //

        // let assets = doc.assets;
        // let sentenceEndingSet = new Set([".", "?", "!", "..."]);
        // let pauseSet = new Set([",", ";", ":", "\u2014", "—"]); // \u2014 is the em dash
        // let transitionSet = new Set(TransitionWords);
        //
        // for (let asset in assets) {
        //     let words = assets[asset].future;
        //     let refactoredWords = [];
        //     let x = 0;
        //     let sentenceCount = 0
        //     for (let i in words) {
        //         let word = words[i];
        //         if (sentenceEndingSet.has(word.text.charAt(word.text.length - 1))) {
        //             sentenceCount += 1;
        //         }
        //         if (word.text.includes(" — ")) {
        //             console.log("index: ", x);
        //             let word1 = {
        //                 index: x,
        //                 text: word.text.split(" — ")[0] + " —",
        //                 definition: {},
        //                 highlight: {active: false, color: null},
        //                 hasBookmark: false,
        //                 attachments: {}
        //             };
        //             let word2 = {
        //                 index: x+1,
        //                 text: word.text.split(" — ")[1],
        //                 definition: {},
        //                 highlight: {active: false, color: null},
        //                 hasBookmark: false,
        //                 attachments: {}
        //             };
        //             word1["delay"] = {};
        //             word2["delay"] = {};
        //             if (sentenceEndingSet.has(word1.text.charAt(word1.text.length - 1))) {
        //                 // Sentence Ending
        //                 word1["delay"] = {type: "ending", factor: 2};
        //             } else if (pauseSet.has(word1.text.charAt(word1.text.length - 1))) {
        //                 // Punctuation Pauses
        //                 word1["delay"] = {type: "pause", factor: 1};
        //             } else if (transitionSet.has(word1.text.replace(/[,.?!;:]/, '').toLowerCase())) {
        //                 // Propositional Integration Word Pause
        //                 word1["delay"] = {type: "proposition", factor: 1};
        //             }
        //
        //             if (sentenceEndingSet.has(word2.text.charAt(word1.text.length - 1))) {
        //                 // Sentence Ending
        //                 word2["delay"] = {type: "ending", factor: 2};
        //             } else if (pauseSet.has(word2.text.charAt(word2.text.length - 1))) {
        //                 // Punctuation Pauses
        //                 word2["delay"] = {type: "pause", factor: 1};
        //             } else if (transitionSet.has(word2.text.replace(/[,.?!;:]/, '').toLowerCase())) {
        //                 // Propositional Integration Word Pause
        //                 word2["delay"] = {type: "proposition", factor: 1};
        //             }
        //             refactoredWords.push(word1);
        //             refactoredWords.push(word2);
        //             x += 2;
        //         } if (word.text.includes(" — ")) {
        //             console.log("index: ", x);
        //             let word1 = {
        //                 index: x,
        //                 text: word.text.split(" — ")[0] + " —",
        //                 definition: {},
        //                 highlight: {active: false, color: null},
        //                 hasBookmark: false,
        //                 attachments: {}
        //             };
        //             let word2 = {
        //                 index: x+1,
        //                 text: word.text.split(" — ")[1],
        //                 definition: {},
        //                 highlight: {active: false, color: null},
        //                 hasBookmark: false,
        //                 attachments: {}
        //             };
        //             word1["delay"] = {};
        //             word2["delay"] = {};
        //             if (sentenceEndingSet.has(word1.text.charAt(word1.text.length - 1))) {
        //                 // Sentence Ending
        //                 word1["delay"] = {type: "ending", factor: 2};
        //             } else if (pauseSet.has(word1.text.charAt(word1.text.length - 1))) {
        //                 // Punctuation Pauses
        //                 word1["delay"] = {type: "pause", factor: 1};
        //             } else if (transitionSet.has(word1.text.replace(/[,.?!;:]/, '').toLowerCase())) {
        //                 // Propositional Integration Word Pause
        //                 word1["delay"] = {type: "proposition", factor: 1};
        //             }
        //
        //             if (sentenceEndingSet.has(word2.text.charAt(word1.text.length - 1))) {
        //                 // Sentence Ending
        //                 word2["delay"] = {type: "ending", factor: 2};
        //             } else if (pauseSet.has(word2.text.charAt(word2.text.length - 1))) {
        //                 // Punctuation Pauses
        //                 word2["delay"] = {type: "pause", factor: 1};
        //             } else if (transitionSet.has(word2.text.replace(/[,.?!;:]/, '').toLowerCase())) {
        //                 // Propositional Integration Word Pause
        //                 word2["delay"] = {type: "proposition", factor: 1};
        //             }
        //             refactoredWords.push(word1);
        //             refactoredWords.push(word2);
        //             x += 2;
        //         } else if (word.text.includes(" - ")) {
        //             let word1 = {
        //                 index: x,
        //                 text: word.text.split(" - ")[0] + " -",
        //                 definition: {},
        //                 highlight: {active: false, color: null},
        //                 hasBookmark: false,
        //                 attachments: {}
        //             };
        //             let word2 = {
        //                 index: x+1,
        //                 text: word.text.split(" - ")[1],
        //                 definition: {},
        //                 highlight: {active: false, color: null},
        //                 hasBookmark: false,
        //                 attachments: {}
        //             };
        //             word1["delay"] = {};
        //             word2["delay"] = {};
        //             if (sentenceEndingSet.has(word1.text.charAt(word1.text.length - 1))) {
        //                 // Sentence Ending
        //                 word1["delay"] = {type: "ending", factor: 2};
        //             } else if (pauseSet.has(word1.text.charAt(word1.text.length - 1))) {
        //                 // Punctuation Pauses
        //                 word1["delay"] = {type: "pause", factor: 1};
        //             } else if (transitionSet.has(word1.text.replace(/[,.?!;:]/, '').toLowerCase())) {
        //                 // Propositional Integration Word Pause
        //                 word1["delay"] = {type: "proposition", factor: 1};
        //             }
        //
        //             if (sentenceEndingSet.has(word2.text.charAt(word2.text.length - 1))) {
        //                 // Sentence Ending
        //                 word2["delay"] = {type: "ending", factor: 2};
        //             } else if (pauseSet.has(word2.text.charAt(word2.text.length - 1))) {
        //                 // Punctuation Pauses
        //                 word2["delay"] = {type: "pause", factor: 1};
        //             } else if (transitionSet.has(word2.text.replace(/[,.?!;:]/, '').toLowerCase())) {
        //                 // Propositional Integration Word Pause
        //                 word2["delay"] = {type: "proposition", factor: 1};
        //             }
        //             refactoredWords.push(word1);
        //             refactoredWords.push(word2);
        //             x += 2;
        //         } else {
        //             word.index = x;
        //             refactoredWords.push(word);
        //             x+=1;
        //         }
        //     }
        //     assets[asset].future = refactoredWords;
        //     assets[asset].wordCount = assets[asset].length;
        //     delete assets[asset].length;
        //     assets[asset].sentenceCount = sentenceCount;
        // }
        //
        // doc.assets = assets;
        //
        // console.log(JSON.stringify(doc));

        // Count number of sentences in a paragraph


    }

    render() {
        let progress = this.state.doc.assets ? this.getProgress() : 0;
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
                <TitleBar>{this.state.doc.title}</TitleBar>
                <HistoryContainer
                    skin={this.props.skin}
                    fontSize={this.props.fontSize}>
                    {this.state.doc.assets ? [this.state.doc.assets[this.state.assetCurrentIndex]].map((asset) => {
                      return (
                          <Paragraph
                              key           ={`parent =[null], this =[type ='${asset.type}-history', index ='${this.state.assetCurrentIndex}']`}
                              type          ={"history"}
                              asset         ={asset}
                              fontSize      ={this.props.fontSize}
                              fontFamily    ={this.props.fontFamily}
                              skipToWord    ={this.skipToWord}
                              skin={this.props.skin}
                              showAnnotations={this.state.showAnnotations}
                              cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                              />
                      );
                  }) : null}
                  {this.state.doc.assets ? this.state.doc.assets.slice(Math.max(0, this.state.assetCurrentIndex - 2), this.state.assetCurrentIndex).map((asset, index) => {
                    return (
                        <Paragraph
                            key           ={`parent =[null], this =[type ='${asset.type}', index ='${asset.index}']`}
                            type          ={"history"}
                            asset         ={asset}
                            fontSize     ={this.props.fontSize}
                            fontFamily   ={this.props.fontFamily}
                            skipToWord   ={this.skipToWord}
                            skin={this.props.skin}
                            showAnnotations={this.state.showAnnotations}
                            cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                            />
                    );
                }) : null}
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
                              transitionEnterTimeout ={400}
                              transitionLeave        ={false}>
                            {this.state.doc.assets ? this.state.doc.assets[this.state.assetCurrentIndex].fixationWindow.map((word, index) => {
                                return (
                                    <Word
                                        key        ={`parent=[type='paragraph', index='${this.state.assetCurrentIndex}'], this=[type='word', index='${word.index}']`}
                                        paragraph  ={this.state.assetCurrentIndex}
                                        word       ={word}
                                        inFixationWindow={true}
                                        fontFamily ={this.props.fontFamily}
                                        skipToWord ={this.skipToWord}
                                        skin={this.props.skin}
                                        showAnnotations={this.state.showAnnotations}
                                        cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                                    />
                                );
                            }) : null}
                        </CSSTransitionGroup>
                    </FixationWindow>
                </FixationWindowContainer>
                <FutureContainer
                    skin={this.props.skin}
                    fontSize={this.props.fontSize}>
                    {this.state.doc.assets ? [this.state.doc.assets[this.state.assetCurrentIndex]].map((asset) => {
                        return (
                            <Paragraph
                                key          ={`parent =[null], this =[type ='${asset.type}-future', index ='${this.state.assetCurrentIndex}']`}
                                type         ={"future"}
                                asset        ={asset}
                                fontSize     ={this.props.fontSize}
                                fontFamily   ={this.props.fontFamily}
                                skipToWord   ={this.skipToWord}
                                skin={this.props.skin}
                                showAnnotations={this.state.showAnnotations}
                                cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                                />
                        );
                    }) : null}
                    {this.state.doc.assets ? this.state.doc.assets.slice(this.state.assetCurrentIndex + 1, Math.min(this.state.assetCurrentIndex + 3, this.state.doc.assets.length)).map((asset, index) => {
                        return (
                            <Paragraph
                                key                 ={`parent =[null], this =[type ='${asset.type}', index ='${asset.index}']`}
                                type                ={"future"}
                                asset               ={asset}
                                fontSize            ={this.props.fontSize}
                                fontFamily          ={this.props.fontFamily}
                                skipToWord          ={this.skipToWord}
                                skin={this.props.skin}
                                showAnnotations={this.state.showAnnotations}
                                cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                                />
                        );
                }) : null}
                </FutureContainer>
                <DefinitionsDrawer
                    skin={this.props.skin}
                    drawerIsOpen={this.state.drawerIsOpen}
                    toggleDrawer={this.toggleDrawer}
                    fixationWords={this.state.doc.assets ? this.state.doc.assets[this.state.assetCurrentIndex].fixationWindow : []}
                    cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                />
                <FeatureMenu
                    hand                  ={this.props.hand}
                    skin={this.props.skin}
                    handleHighlight={this.handleHighlight}
                    toggleWordBookmark={this.toggleWordBookmark}
                    fixationWindow={this.state.doc.assets ? this.state.doc.assets[this.state.assetCurrentIndex].fixationWindow : []}
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
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.readingSpeed != this.props.readingSpeed) {
            let currentAsset = this.state.doc.assets[this.state.assetCurrentIndex];
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
        } else if (!equal(this.props.doc, nextProps.doc)) {
            this.setState({
                doc: nextProps.doc
            }, () => {
                if (this.state.doc.assets) {
                    // Load first asset
                    this.loadAsset(this.state.assetCurrentIndex);
                    // Set timePerFixation
                    this.setTimePerFixation(0);
                }
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        window.removeEventListener('mousedown', this.handleCruiseMouseDown, false);
        window.removeEventListener('mouseup', this.handleCruiseMouseUp, false);
        clearTimeout(this.timer);
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
            this.setState({
                scroll: 0
            });
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
        let doc = this.state.doc;
        let assets = doc.assets;
        let history = assets[this.state.assetCurrentIndex].history,
            fixationWindow = assets[this.state.assetCurrentIndex].fixationWindow,
            future = assets[this.state.assetCurrentIndex].future;


        if (direction == ScrollDirectionTypes.UP
            && assets[this.state.assetCurrentIndex].history.length == 0
            && this.state.assetCurrentIndex > 0) {
            // We have hit beginning of current asset
            // Load previous one
            if (this.state.highlightIsActive) {
                let start, end;
                start = 0;
                end = assets[this.state.assetCurrentIndex].fixationWindow[assets[this.state.assetCurrentIndex].fixationWindow.length - 1].index + 1;

                assets = this.toggleWordHighlight(this.state.assetCurrentIndex, start, end);
                doc.assets = assets;

                this.setState({
                    doc : doc
                });
            }

            this.loadAsset(this.state.assetCurrentIndex - 1);
        } else if (direction == ScrollDirectionTypes.UP
            && assets[this.state.assetCurrentIndex].history.length == 0
            && this.state.assetCurrentIndex == 0) {
            // We have hit beginning of document
            // Exit function
            return;
        }

        if (direction == ScrollDirectionTypes.UP) {
            if (assets[this.state.assetCurrentIndex].history.length - this.props.fixationWidth > 0) {
                if (this.state.highlightIsActive) {
                    let start, end;

                    if (assets[this.state.assetCurrentIndex].history[assets[this.state.assetCurrentIndex].history.length - 1].isHighlighted) {
                        start = assets[this.state.assetCurrentIndex].history[assets[this.state.assetCurrentIndex].history.length - this.props.fixationWidth].index;
                        end = assets[this.state.assetCurrentIndex].history.length;
                    } else {
                        start = assets[this.state.assetCurrentIndex].fixationWindow[0].index;
                        end = assets[this.state.assetCurrentIndex].fixationWindow[assets[this.state.assetCurrentIndex].fixationWindow.length - 1].index + 1;
                    }

                    assets = this.toggleWordHighlight(this.state.assetCurrentIndex, start, end);
                }


                future         = assets[this.state.assetCurrentIndex].fixationWindow.concat(assets[this.state.assetCurrentIndex].future);
                fixationWindow = assets[this.state.assetCurrentIndex].history.slice(assets[this.state.assetCurrentIndex].history.length - this.props.fixationWidth, assets[this.state.assetCurrentIndex].history.length);
                history        = assets[this.state.assetCurrentIndex].history.slice(0, assets[this.state.assetCurrentIndex].history.length - this.props.fixationWidth);
            } else {
                // Edge Case that causes wrong fixation window
                if (this.state.highlightIsActive) {
                    let start, end;

                    if (assets[this.state.assetCurrentIndex].history[assets[this.state.assetCurrentIndex].history.length - 1].isHighlighted) {
                        start = 0;
                        end = assets[this.state.assetCurrentIndex].history.length;
                    } else {
                        let diff = assets[this.state.assetCurrentIndex].history.length;
                        start = assets[this.state.assetCurrentIndex].fixationWindow[assets[this.state.assetCurrentIndex].fixationWindow.length - diff].index;
                        end = assets[this.state.assetCurrentIndex].fixationWindow[assets[this.state.assetCurrentIndex].fixationWindow.length - 1].index + 1;
                    }

                    assets = this.toggleWordHighlight(this.state.assetCurrentIndex, start, end);
                }

                future         = assets[this.state.assetCurrentIndex].history.concat(assets[this.state.assetCurrentIndex].fixationWindow, assets[this.state.assetCurrentIndex].future); // proxy future to re-establish fixationWindow
                history       = [];
                fixationWindow = future.slice(0, this.props.fixationWidth);
                future         = future.slice(this.props.fixationWidth);
            }
        } else {
            // Scroll Direction Down
            if (this.state.highlightIsActive) {
                let start, end;

                start = assets[this.state.assetCurrentIndex].fixationWindow[0].index;
                end = assets[this.state.assetCurrentIndex].fixationWindow[assets[this.state.assetCurrentIndex].fixationWindow.length - 1].index + 1;

                assets = this.toggleWordHighlight(this.state.assetCurrentIndex, start, end);
            }
            history        = assets[this.state.assetCurrentIndex].history.concat(assets[this.state.assetCurrentIndex].fixationWindow);
            fixationWindow = assets[this.state.assetCurrentIndex].future.slice(0, this.props.fixationWidth);
            future         = assets[this.state.assetCurrentIndex].future.slice(this.props.fixationWidth, assets[this.state.assetCurrentIndex].future.length);
        }

        assets[this.state.assetCurrentIndex].history        = history;
        assets[this.state.assetCurrentIndex].fixationWindow = fixationWindow;
        assets[this.state.assetCurrentIndex].future         = future;

        doc.assets = assets;

        this.setState({
            doc : doc
        }, () => {
            if (direction == ScrollDirectionTypes.DOWN
                && fixationWindow.length == 0
                && future.length == 0
                && this.state.assetCurrentIndex + 1 < this.state.doc.assets.length) {
                // End of paragraph, have pause
                this.setTimePerFixation(this.state.timePerFixation);
                // We have hit end of current asset
                // Load next one
                this.loadAsset(this.state.assetCurrentIndex + 1);
            } else if (direction == ScrollDirectionTypes.DOWN
                && fixationWindow.length == 0
                && future.length == 0
                && this.state.assetCurrentIndex + 1 == this.state.doc.assets.length
                && this.state.cruiseControlIsActive) {
                // We have hit end of document
                // and Cruise Control is active
                // We deactivate it
                this.toggleCruiseControl();
            } else if (direction == ScrollDirectionTypes.DOWN
                && fixationWindow.length == 0
                && future.length == 0
                && this.state.assetCurrentIndex + 1 == this.state.doc.assets.length) {
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

    skipToWord = (word, paragraphIndex, wordIndex, e) => {
        e.stopPropagation();
        let doc = this.state.doc;
        let assets           = doc.assets;

        // reset current paragraph if skipping to a new one
        if (paragraphIndex > this.state.assetCurrentIndex) {
            // Skip ahead
            // Make current asset history

            // Highlight if active
            if (this.state.highlightIsActive) {
                let start = assets[this.state.assetCurrentIndex].fixationWindow[0].index;
                let end = assets[this.state.assetCurrentIndex].future.length > 0 ? assets[this.state.assetCurrentIndex].future[assets[this.state.assetCurrentIndex].future.length - 1].index + 1 : assets[this.state.assetCurrentIndex].fixationWindow[assets[this.state.assetCurrentIndex].fixationWindow.length - 1].index + 1;
                assets = this.toggleWordHighlight(this.state.assetCurrentIndex, start, end);
            }

            let currentAsset = assets[this.state.assetCurrentIndex];
            assets[this.state.assetCurrentIndex].history = currentAsset.history.concat(currentAsset.fixationWindow, currentAsset.future);
            assets[this.state.assetCurrentIndex].fixationWindow = [];
            assets[this.state.assetCurrentIndex].future = [];
        } else if (paragraphIndex < this.state.assetCurrentIndex) {
            // Skip back
            // Make current asset future

            // Highlight if active
            if (this.state.highlightIsActive) {
                let start = 0;
                let end = assets[this.state.assetCurrentIndex].history[assets[this.state.assetCurrentIndex].history.length - 1].index + 1;
                assets = this.toggleWordHighlight(this.state.assetCurrentIndex, start, end);
            }

            let currentAsset = assets[this.state.assetCurrentIndex];
            assets[this.state.assetCurrentIndex].future = currentAsset.history.concat(currentAsset.fixationWindow, currentAsset.future);
            assets[this.state.assetCurrentIndex].history = [];
            assets[this.state.assetCurrentIndex].fixationWindow = [];
        }

        // Highlight remaining words in new asset or currentAsset
        if (this.state.highlightIsActive && paragraphIndex > this.state.assetCurrentIndex) {
            // Progression
            let nextAssetWords = assets[paragraphIndex].history.concat(assets[paragraphIndex].fixationWindow, assets[paragraphIndex].future);
            let start = 0;
            let end = nextAssetWords[wordIndex].index;
            assets = this.toggleWordHighlight(paragraphIndex, start, end);
        } else if (this.state.highlightIsActive && paragraphIndex < this.state.assetCurrentIndex) {
            // Regression
            let previousAssetWords = assets[paragraphIndex].history.concat(assets[paragraphIndex].fixationWindow, assets[paragraphIndex].future);
            let start = previousAssetWords[wordIndex].index;
            let end = previousAssetWords.length;
            assets = this.toggleWordHighlight(paragraphIndex, start, end);
        } else if (this.state.highlightIsActive) {
            // Same Asset
            let currentAssetWords = assets[this.state.assetCurrentIndex].history.concat(assets[this.state.assetCurrentIndex].fixationWindow, assets[this.state.assetCurrentIndex].future);
            let start = wordIndex >= assets[this.state.assetCurrentIndex].history.length ? assets[this.state.assetCurrentIndex].history.length: wordIndex;
            let end = wordIndex >= assets[this.state.assetCurrentIndex].history.length ? wordIndex : assets[this.state.assetCurrentIndex].history.length;
            assets = this.toggleWordHighlight(this.state.assetCurrentIndex, start, end);
        }

        let words = assets[paragraphIndex].history.concat(assets[paragraphIndex].fixationWindow, assets[paragraphIndex].future);
        let history = words.slice(0, wordIndex);
        let fixationWindow = words.slice(wordIndex, wordIndex + this.props.fixationWidth);
        let future = words.slice(wordIndex + this.props.fixationWidth);

        assets[paragraphIndex].history        = history;
        assets[paragraphIndex].fixationWindow = fixationWindow;
        assets[paragraphIndex].future         = future;

        doc.assets = assets;

        this.setState({
            assetCurrentIndex : paragraphIndex,
            doc            : doc
        });
    }

    loadAsset = (index) => {
        let doc = this.state.doc;
        let assets                   = doc.assets;
        let direction = index >= this.state.assetCurrentIndex ? ScrollDirectionTypes.DOWN : ScrollDirectionTypes.UP;

        if (direction == ScrollDirectionTypes.DOWN) {
            // Place first words of next asset into fixation window
            assets[index].fixationWindow = assets[index].future.slice(0, this.props.fixationWidth);
            assets[index].future         = assets[index].future.slice(this.props.fixationWidth);
        } else {
            // === Read from bottom to top to understand logic ===
            //
            // Reset last current asset to have all words in future
            assets[index + 1].future = assets[index + 1].history.concat(assets[index + 1].fixationWindow, assets[index + 1].future);
            assets[index + 1].fixationWindow = [];
            assets[index + 1].history = [];

            // Place last words of last asset into fixation window
            assets[index].fixationWindow = assets[index].history.slice(assets[index].history.length - this.props.fixationWidth);
            assets[index].history         = assets[index].history.slice(0, assets[index].history.length - this.props.fixationWidth);
        }

        doc.assets = assets;

        this.setState({
            scroll            : 0,
            doc: doc,
            assetCurrentIndex : index
        }, () => {
            return;
        });
    }

    toggleWordHighlight = (paragraphIndex, start, end) => {

        let history    = [],
        fixationWindow = [],
        future         = [];

        let lastWordIndexHistory = this.state.doc.assets[paragraphIndex].history.length > 0 ? this.state.doc.assets[paragraphIndex].history[this.state.doc.assets[paragraphIndex].history.length - 1].index : 0;
        let lastWordIndexFixationWindow = this.state.doc.assets[paragraphIndex].fixationWindow.length > 0 ? this.state.doc.assets[paragraphIndex].fixationWindow[this.state.doc.assets[paragraphIndex].fixationWindow.length - 1].index : 0;
        let words = this.state.doc.assets[paragraphIndex].history.concat(this.state.doc.assets[paragraphIndex].fixationWindow, this.state.doc.assets[paragraphIndex].future);

        for (let i = start; i < end; i++) {
            if (!words[i].highlight.active) {
                words[i].highlight.active = true;
                words[i].highlight.color = this.state.highlightColor;
            } else {
                words[i].highlight.active = false;
                words[i].highlight.color = null;
            }
        }

        history        = words.slice(0, lastWordIndexHistory + 1),
        fixationWindow = this.state.doc.assets[paragraphIndex].fixationWindow.length < this.props.fixationWidth ? words.slice(lastWordIndexHistory + 1) : words.slice(lastWordIndexHistory + 1, lastWordIndexFixationWindow + 1),
        future         = this.state.doc.assets[paragraphIndex].fixationWindow.length < this.props.fixationWidth ? [] : words.slice(lastWordIndexFixationWindow + 1);

        let assets = this.state.doc.assets;
        assets[paragraphIndex].history = history;
        assets[paragraphIndex].fixationWindow = fixationWindow;
        assets[paragraphIndex].future = future;

        return assets;
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
        let wordParagraph = assets[this.state.assetCurrentIndex];

        wordParagraph.fixationWindow[0].hasBookmark = !wordParagraph.fixationWindow[0].hasBookmark;

        assets[this.state.assetCurrentIndex] = wordParagraph;

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
        // We model the number of fixations as displacement
        // We want to determine the fixations/s (velocity)
        // We use the following equation of motion: x_f = x_0 + v_0*t + 0.5*a*t^2

        let currentAsset = this.state.doc.assets[this.state.assetCurrentIndex];
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
                oninstance(steps, count);
                let diff = (new Date().getTime() - start) - (count * speed);
                this.timer = window.setTimeout(instance, (speed - diff));
            } else {
                let timestamp = new Date().getTime();
                this.setState({
                    checkAddDelay: false
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
        if (!this.state.checkAddDelay) {
            let futureFixationWindow = this.state.doc.assets[this.state.assetCurrentIndex].future.slice(0, this.props.fixationWidth);

            // Determine if need to add time
            futureFixationWindow.forEach((word) => {
                if (word.delay && Object.keys(word.delay).length > 0) {
                    addDelay += word.delay.factor * this.state.timePerFixation/3;
                }
            });

            // Set state as checked
            this.setState({
                checkAddDelay: true
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
        //console.log("moveText diff: ", diff);
        this.doTimer(
            this.state.timePerFixation - diff,
            20,
            this.checkAddDelay
            ,
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

    getProgress = (total, asset) => {
        let completed = this.state.doc.assets[this.state.assetCurrentIndex].history.length +
                            this.state.doc.assets[this.state.assetCurrentIndex].fixationWindow.length +
                            this.state.doc.assets.slice(0, this.state.assetCurrentIndex).reduce((total, asset) => {
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
}

// ============= PropTypes ==============

Viewport.propTypes = {
    doc                : PropTypes.object.isRequired,
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
