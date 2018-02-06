// Libraries
import React                    from 'react';
import PropTypes                from 'prop-types';
import styled                   from 'styled-components';
import { CSSTransitionGroup }   from 'react-transition-group';

// Components
import ScrollDirectionTypes     from '../../constants/scrollDirectionTypes';
import FeatureMenu              from './FeatureMenu';
import Paragraph                from './Paragraph';
import Word                     from './Word';
import StatusBar                from './StatusBar';
import CruiseControlButton      from './CruiseControlButton';

/**
 * The Viewport component is a component used to
 */
export default class Viewport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scroll            : 0,
            assetCurrentIndex : 0,
            assets            : [],
            definitionsAreActive: false,
            highlightIsActive: false,
            rapidScrollIsActive: false,
            cruiseControlIsActive: false
        }
    }

    componentWillMount() {
        console.log("-----Viewport");

        let para = "";
        console.log(JSON.stringify(para.split(" ")));

        // Get thought assets
        // Populate viewport with first asset
        let assets = [
            {
                type: "paragraph",
                history: [],
                trailingWord: [],
                fixationWindow: [],
                future:["We","keep","claiming","that","technology","will","transform","education.","We","said","it","when","computers","hit","the","market","in","a","real","way","in","the","1980s.","We","said","it","when","artificial","intelligence","began","reaching","Siri","levels.","And","we’re","saying","it","now,","when","spatial","computing","is","taking","its","strongest","steps","forward","since","we","began","seriously","working","on","it","in","the","80s.","But","while","those","early","technologies","have","certainly","impacted","schooling,","they","haven’t","transformed","it","the","way","we","hoped","they","might."],
                index: 0
            },
            {
                type: "paragraph",
                history: [],
                trailingWord: [],
                fixationWindow: [],
                future:["Take","computers.","Many","schools","now","require","all","assignments","to","be","typed","instead","of","handwritten — they’re","easier","on","the","eyes,","after","all,","and","no","more","demerit","points","for","sloppy","cursive.","But","the","vision","of","30","students","sitting","in","a","class","for","eight","hours","a","day","in","front","of","a","computer","learning","lessons","from","programs","never","materialized.","Whether","that’s","a","positive","or","a","negative","can","be","debated","ad","nauseum,","but","the","fact","is","that","adoption","was","hampered","by","cost.","Most","schools","have","a","single","computer","lab","where","students","take","turns","studying","computers","specifically — they","aren’t","using","data","modeling","in","their","stats","class,","or","testing","components","for","chemistry.","Computers","have","been","relegated","to","something","you","learn","about","rather","than","something","you","learn","from,","and","there","are","a","lot","of","opportunities","we’ve","missed","because","of","that."],
                index: 1
            },
            {
                type: "paragraph",
                history: [],
                trailingWord: [],
                fixationWindow: [],
                future:["The","failure","to","launch","artificial","intelligence","in","education","is","directly","linked","to","the","failure","to","adopt","widespread","computers.","A","virtual","tutor","can’t","help","students","figure","out","their","unique","learning","style","if","seventy","five","students","are","all","sharing","time","on","one","computer.","These","technologies","are","finding","traction","in","alternative","education","and","tutoring,","however,","where","assessment","tests","help","students","learn","about","their","own","learning","styles.","There’s","much","further","for","AI","to","go,","of","course,","and","hopefully","in","the","future","we’ll","see","it","being","used","even","more."],
                index: 2
            },
            {
                type: "paragraph",
                history: [],
                trailingWord: [],
                fixationWindow: [],
                future:["What","a","humbling","truth","indeed,","and","to","add","fuel","to","the","fire,","recent","theories","in","Physics","posit","that","our","universe","could","be","one","of","many","universes","present","within","an","enormous","landscape","of","possible","universes — a","universe","within","a","strictly","increasing","set","of","universes","if","you","will.","Furthermore,","while","we","live","in","universe","governed","by","the","spacetime","continuum,","a","universe","composed","of","three-dimensional","matter","that","exists","through","the","passage","of","time,","in","some","circles","it","is","believed","that","there","could","be","as","many","as","ten","dimensions;","however","as","far","as","we","know,","we","are","eternally","trapped","to","live","within","three","of","these","theorized","dimensions."],
                index: 3
            },
            {
                type: "paragraph",
                history: [],
                trailingWord: [],
                fixationWindow: [],
                future:["So","now","we","begin","to","wonder","how","virtual","and","augmented","reality","will","fare","when","up","against","the","same","legislative","hurdles","that","have","hampered","past","technologies.","Virtual","reality","has","been","getting","a","lot","of","well-deserved","ink","for","its","potential","to","transform","education,","but","the","infrastructure","necessary","to","bring","in","a","program","that","every","kid","can","engage","with","is","a","stopper","even","more","significant","than","it","was","with","computers.","After","all,","VR","not","only","requires","a","computer","for","each","student — it","requires","a","top","of","the","line","computer.","Given","that","most","schools","are","still","running","computers","that","are","ten","years","old","or","more,","that’s","a","hurdle."],
                index: 4
            },
            {
                type: "paragraph",
                history: [],
                trailingWord: [],
                fixationWindow: [],
                future:["But","there","are","some","people","doing","amazing","things","with","VR","and","education.","We’re","not","going","to","waste","much","time","on","Google","Expeditions,","because","you’re","probably","all","familiar","with","them,","but","if","you","aren’t,","in","a","nutshell:","Google","lets","students","explore","the","world","using","cell","phones","and","a","piece","of","cardboard.","It’s","great","because","it","doesn’t","need","an","expensive","computer,","but","it","still","requires","a","lot","of","funding","from","Google","to","make","it","happen.","They","rent","out","the","phones,","provide","the","cardboards","for","free,","and","even","give","training","for","teachers","on","how","to","lead","the","expedition.","It’s","a","fun","learning","tool,","but","likely","to","be","used","by","teachers","the","way","they","used","to","use","crappy","British","documentaries — give","the","teacher","a","break","from","the","classroom,","let","the","students","have","some","fun,","and","then","get","back","to","the","real","learning."],
                index: 5
            },
            {
                type: "paragraph",
                history: [],
                trailingWord: [],
                fixationWindow: [],
                future:["We’ve","seen","VR","take","off","as","a","form","of","job","training,","the","advantage","there","being","the","budgets","necessary","to","pull","it","off.","But","the","boost","up","that","students","get","from","learning","first-hand","is","incredibly","important","in","schools,","too.","A","lot","of","students","learn","better","by","doing","than","listening,","and","virtual","reality","gives","them","the","opportunity","to","learn","hands","on","in","a","way","that","classic","education","simply","can’t.","Training","is","becoming","huge","in","industry,","and","hopefully","as","that","matures","it","will","trickle","down","to","high","school","level","students","as","well","(right","now","we’re","mostly","seeing","it","in","college","and","on","the","job).","Of","course,","hands-on","training","in","school","is","about","more","than","just","learning","how","to","do","a","job.","It","also","means","letting","them","explore","how","physics","works","instead","of","just","telling","them,","or","watching","a","famous","battle","to","learn","history."],
                index: 6
            },
            {
                type: "paragraph",
                history: [],
                trailingWord: [],
                fixationWindow: [],
                future:["If","virtual","reality","is","being","hampered","by","cost,","augmented","reality","might","have","a","leg-up","on","its","more","resource","intensive","cousin.","With","AR,","teachers","can","get","started","with","nothing","but","a","cell","phone.","Granted,","one","phone","for","an","entire","classroom","isn’t","an","ideal","scenario — so","AR","is","pressing","forward","using","other","avenues."],
                index: 7
            },
            {
                type: "paragraph",
                history: [],
                trailingWord: [],
                fixationWindow: [],
                future:["Take","the","augmented","reality","sandbox,","which","is","being","used","around","the","world","to","help","students","learn","about","topography","and","geography.","All","it","requires","is","a","projector,","a","single","computer,","and","a","few","sensors.","With","that","students","can","leap","into","a","fully","responsive","experience","that","reacts","to","their","input.","Following","that","line","has","the","potential","to","get","a","whole","classroom","involved","in","AR","with","realistic","resource","requirements."],
                index: 8
            },
            {
                type: "paragraph",
                history: [],
                trailingWord: [],
                fixationWindow: [],
                future:["Of","course,","we’re","also","entering","the","age","of","ARKit","and","ARCore,","which","means","that","in","a","few","years,","every","cell","phone","will","have","the","ability","to","be","used","as","an","educational","tool.","While","lots","of","students","don’t","have","their","own","phones,","buying","cheap","mobile","devices","for","a","whole","classroom","is","a","lot","easier","than","buying","computers","for","a","whole","classroom.","And","even","in","these","early","days,","we’re","seeing","exciting","concepts","like","the","Atom","Visualizer,","which","lets","you","place","models","of","atomic","structures","around","the","room","and","then","examine","them","in","3","dimensions."],
                index: 9
            },
            {
                type: "paragraph",
                history: [],
                trailingWord: [],
                fixationWindow: [],
                future:["How","soon","we’re","likely","to","see","this","take","off","remains","the","key","question.","While","the","technology","is","here,","the","point","at","which","it","becomes","cheap","enough","for","mass","adoption","is","still","at","least","a","few","years","away.","AR","will","probably","beat","its","cousin","to","the","finish","line,","but","VR","may","take","the","final","prize","of","being","the","first","technology","to","truly","change","education.","Only","time","will","tell","for","sure."],
                index: 10
            },
        ];

        this.setState({
            assets        : assets
        }, () => {
            this.loadAsset(this.state.assetCurrentIndex);
        });
    }

    render() {
        return (
            <Container
                id="viewport"
                onClick={this.toggleRapidScroll}>
                <StatusBar
                    definitionsAreActive={this.state.definitionsAreActive}
                    highlightIsActive={this.state.highlightIsActive}
                    rapidScrollIsActive={this.state.rapidScrollIsActive}
                />
                <HistoryContainer
                    fontSize={this.props.fontSize}>
                    {[this.state.assets[this.state.assetCurrentIndex]].map((asset) => {
                      return (
                          <Paragraph
                              key           ={`parent =[null], this =[type ='${asset.type}-history', index ='${this.state.assetCurrentIndex}']`}
                              type          ={"history"}
                              asset         ={asset}
                              fontSize      ={this.props.fontSize}
                              fontFamily    ={this.props.fontFamily}
                              skipToWord    ={this.skipToWord}
                              bottomMargin  ={false}
                              topMargin     ={false}
                              />
                      );
                  })}
                  {this.state.assets.slice(0, this.state.assetCurrentIndex).map((asset, index) => {
                    return (
                        <Paragraph
                            key           ={`parent =[null], this =[type ='${asset.type}', index ='${asset.index}']`}
                            type          ={"history"}
                            asset         ={asset}
                            fontSize     ={this.props.fontSize}
                            fontFamily   ={this.props.fontFamily}
                            skipToWord   ={this.skipToWord}
                            bottomMargin ={true}
                            topMargin    ={true}
                            />
                    );
                })}
                </HistoryContainer>
                <FixationWindowContainer
                    fontSize={this.props.fontSize}>
                    {this.props.fixationWidth > 1 && [this.state.assets[this.state.assetCurrentIndex]].length > 0?
                        <TrailingWord
                            fontSize   ={this.props.fontSize}
                            fontFamily ={this.props.fontFamily}>
                            <CSSTransitionGroup
                                  transitionName         ="fixation"
                                  transitionEnterTimeout ={200}
                                  transitionLeave        ={false}>
                                {this.state.assets[this.state.assetCurrentIndex].trailingWord.map((word) => {
                                    return (
                                        <Word
                                            key        ={`parent=[type='paragraph', index='${this.state.assetCurrentIndex}'], this=[type='word', index='${this.state.assets[this.state.assetCurrentIndex].history.length}']`}
                                            index      ={this.state.assets[this.state.assetCurrentIndex].history.length}
                                            paragraph  ={this.state.assetCurrentIndex}
                                            text      ={`${word} `}
                                            fontFamily ={this.props.fontFamily}
                                            skipToWord ={this.skipToWord}
                                            />
                                    );
                                })}
                            </CSSTransitionGroup>
                        </TrailingWord>
                    :
                        null
                    }
                    {[this.state.assets[this.state.assetCurrentIndex]].length > 0 ?
                        <FixationWindow
                            fontSize={this.props.fontSize}
                            fontFamily={this.props.fontFamily}>
                            <CSSTransitionGroup
                                  transitionName         ="fixation"
                                  transitionEnterTimeout ={200}
                                  transitionLeave        ={false}>
                                {this.state.assets[this.state.assetCurrentIndex].fixationWindow.map((word, index) => {
                                    return (
                                        <Word
                                            key        ={`parent=[type='paragraph', index='${this.state.assetCurrentIndex}'], this=[type='word', index='${index + this.state.assets[this.state.assetCurrentIndex].history.length + this.state.assets[this.state.assetCurrentIndex].trailingWord.length}']`}
                                            index      ={index + this.state.assets[this.state.assetCurrentIndex].history.length + this.state.assets[this.state.assetCurrentIndex].trailingWord.length}
                                            paragraph  ={this.state.assetCurrentIndex}
                                            text      ={`${word} `}
                                            fontFamily ={this.props.fontFamily}
                                            skipToWord ={this.skipToWord}
                                        />
                                    );
                                })}
                            </CSSTransitionGroup>
                        </FixationWindow>
                        :
                            null
                    }
                </FixationWindowContainer>
                <FutureContainer
                    fontSize={this.props.fontSize}>
                    {[this.state.assets[this.state.assetCurrentIndex]].map((asset) => {
                        return (
                            <Paragraph
                                key          ={`parent =[null], this =[type ='${asset.type}-future', index ='${this.state.assetCurrentIndex}']`}
                                type         ={"future"}
                                asset        ={asset}
                                fontSize     ={this.props.fontSize}
                                fontFamily   ={this.props.fontFamily}
                                skipToWord   ={this.skipToWord}
                                bottomMargin ={true}
                                topMargin    ={false}
                                />
                        );
                    })}
                    {this.state.assets.slice(this.state.assetCurrentIndex + 1).map((asset, index) => {
                        return (
                            <Paragraph
                                key          ={`parent =[null], this =[type ='${asset.type}', index ='${asset.index}']`}
                                type         ={"future"}
                                asset        ={asset}
                                fontSize     ={this.props.fontSize}
                                fontFamily   ={this.props.fontFamily}
                                skipToWord   ={this.skipToWord}
                                bottomMargin ={true}
                                topMargin    ={true}
                                />
                        );
                })}
                </FutureContainer>
                <FeatureMenu />
                <CruiseControlButton
                    cruiseControlIsActive={this.state.cruiseControlIsActive}
                    toggleCruiseControl={this.toggleCruiseControl}/>
            </Container>
        );
    }

    componentDidMount() {
        console.log("+++++Viewport");
        window.addEventListener('DOMMouseScroll', this.handleScroll, false);
        window.onwheel      = this.handleScroll; // modern standard
        window.onmousewheel = document.onmousewheel = this.handleScroll; // older browsers, IE
        window.ontouchmove  = this.handleScroll; // mobile
        document.onkeydown  = this.handleKeys;

    }

    componentWillUnmount() {
        window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
    }

    // ========== Methods ===========

    handleKeys = (e) => {

        let keys = {
            37: true,   // Left
            38: true,   // Up
            39: true,   // Right
            40: true    // Down
        };

        if (keys[e.keyCode]) {
            this.preventDefault(e);

            // Up or Left
            if (e.keyCode == 37 || e.keyCode == 38) {
                this.updateViewport(ScrollDirectionTypes.UP);
            // Down or Right
            } else if (e.keyCode == 39 || e.keyCode == 40) {
                this.updateViewport(ScrollDirectionTypes.DOWN);
            }

            return false;
        }
    }

    handleScroll = (e) => {
        this.preventDefault(e);

        if (!this.state.rapidScrollIsActive && this.state.scroll == this.props.trackingSpeed) {
            let direction = this.getScrollDirection(e);
            this.updateViewport(direction);
        } else if (this.state.rapidScrollIsActive && this.state.scroll == 0.5 * this.props.trackingSpeed) {
            let direction = this.getScrollDirection(e);
            this.updateViewport(direction);
        }

        this.setState({
            scroll: this.state.scroll + 1
        });
    }

    updateViewport = (direction) => {
        let history         = this.state.assets[this.state.assetCurrentIndex].history,
        trailingWord        = this.state.assets[this.state.assetCurrentIndex].trailingWord,
        fixationWindow      = this.state.assets[this.state.assetCurrentIndex].fixationWindow,
        future              = this.state.assets[this.state.assetCurrentIndex].future;
        let sliceDistance   = this.props.fixationWidth - 1;

        if (direction == ScrollDirectionTypes.UP) {
            if (this.props.fixationWidth > 1) {
                if (history.length - sliceDistance > 0) {
                    // Read from bottom to top to understand logic
                    future         = fixationWindow.concat(future);
                    fixationWindow = history.slice(history.length - sliceDistance + 1).concat(trailingWord);
                    trailingWord   = history.slice(history.length - sliceDistance, history.length - sliceDistance + 1);
                    history        = history.slice(0, history.length - sliceDistance);
                } else {
                    // Edge Case that causes wrong fixation window
                    future         = history.concat(trailingWord, fixationWindow, future); // proxy future to re-establish fixationWindow
                    history        = [];
                    trailingWord   = [];
                    fixationWindow = future.slice(0, this.props.fixationWidth);
                    future         = future.slice(this.props.fixationWidth);
                }
            } else {
                if (history.length - sliceDistance > 0) {
                    future         = fixationWindow.concat(future);
                    fixationWindow = history.slice(history.length - 1, history.length);
                    history        = history.slice(0, history.length - 1);
                } else {
                    // Edge Case that causes wrong fixation window
                    future         = history.concat(fixationWindow, future); // proxy future to re-establish fixationWindow
                    history        = [];
                    fixationWindow = future.slice(0, 1);
                    future         = future.slice(1);
                }
            }
        } else {
            // Scroll Direction Down
            if (this.props.fixationWidth > 1) {
                if (future.length > 0) {
                    history        = history.concat(trailingWord).concat(fixationWindow.slice(0, fixationWindow.length - 1));
                    trailingWord   = fixationWindow.slice(-1);
                    fixationWindow = future.slice(0, sliceDistance);
                    future         = future.slice(sliceDistance);
                } else {
                    history        = history.concat(trailingWord).concat(fixationWindow);
                    trailingWord   = [];
                    fixationWindow = [];
                }
            } else {
                history        = history.concat(fixationWindow);
                fixationWindow = future.slice(0, 1);
                future         = future.slice(1, future.length);
            }
        }

        let assets                                          = this.state.assets;
        assets[this.state.assetCurrentIndex].history        = history;
        assets[this.state.assetCurrentIndex].trailingWord   = trailingWord;
        assets[this.state.assetCurrentIndex].fixationWindow = fixationWindow;
        assets[this.state.assetCurrentIndex].future         = future;

        this.setState({
            assets        : assets,
            scroll        : 0
        }, () => {
            if (direction == ScrollDirectionTypes.DOWN
                && trailingWord.length == 0
                && fixationWindow.length == 0
                && future.length == 0
                && this.state.assetCurrentIndex + 1 < this.state.assets.length) {
                // We have hit end of current asset
                // Load next one
                this.loadAsset(this.state.assetCurrentIndex + 1);
            } else if (direction = ScrollDirectionTypes.UP
                        && history.length == 0
                        && trailingWord.length == 0
                        && this.state.assetCurrentIndex > 0) {
                // We have hit beginning of current asset
                // Load previous one
                this.loadAsset(this.state.assetCurrentIndex - 1);
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

        let wordParagraph    = this.state.assets[paragraphIndex];
        let assets           = this.state.assets;

        let history          = wordParagraph.history,
        trailingWord         = wordParagraph.trailingWord,
        fixationWindow       = wordParagraph.fixationWindow,
        future               = wordParagraph.future;

        // reset current paragraph is skipping to a new one
        if (paragraphIndex > this.state.assetCurrentIndex) {
            // Skip ahead
            let currentAsset = assets[this.state.assetCurrentIndex];
            assets[this.state.assetCurrentIndex].history = currentAsset.history.concat(currentAsset.trailingWord, currentAsset.fixationWindow, currentAsset.future);
            assets[this.state.assetCurrentIndex].trailingWord = [];
            assets[this.state.assetCurrentIndex].fixationWindow = [];
            assets[this.state.assetCurrentIndex].future = [];
        } else if (paragraphIndex < this.state.assetCurrentIndex) {
            // Skip back
            let currentAsset = assets[this.state.assetCurrentIndex];
            assets[this.state.assetCurrentIndex].future = currentAsset.history.concat(currentAsset.trailingWord, currentAsset.fixationWindow, currentAsset.future);
            assets[this.state.assetCurrentIndex].history = [];
            assets[this.state.assetCurrentIndex].trailingWord = [];
            assets[this.state.assetCurrentIndex].fixationWindow = [];
        }

        let words = history.concat(trailingWord, fixationWindow, future);
        history = words.slice(0, wordIndex);
        trailingWord   = [];
        fixationWindow = words.slice(wordIndex, wordIndex + this.props.fixationWidth);
        future = words.slice(wordIndex + this.props.fixationWidth);

        assets[paragraphIndex].history        = history;
        assets[paragraphIndex].trailingWord   = trailingWord;
        assets[paragraphIndex].fixationWindow = fixationWindow;
        assets[paragraphIndex].future         = future;

        this.setState({
            assetCurrentIndex : paragraphIndex,
            assets            : assets
        });
    }

    loadAsset = (index) => {
        let assets                   = this.state.assets;
        assets[index].fixationWindow = assets[index].future.slice(0, this.props.fixationWidth);
        assets[index].future         = assets[index].future.slice(this.props.fixationWidth);

        this.setState({
            scroll            : 0,
            assets            : assets,
            assetCurrentIndex : index
        });
    }

    toggleRapidScroll = () => {

        this.setState({
            rapidScrollIsActive: !this.state.rapidScrollIsActive
        });
    }

    toggleCruiseControl = (e) => {
        e.stopPropagation();

        this.setState({
            cruiseControlIsActive: !this.state.cruiseControlIsActive
        });
    }
}

// ============= PropTypes ==============

Viewport.propTypes = {
    fontSize     : PropTypes.number.isRequired,
    fontFamily   : PropTypes.object.isRequired,
    fixationWidth: PropTypes.number.isRequired,
    skin         : PropTypes.string.isRequired,
    hand         : PropTypes.string.isRequired,
    trackingSpeed: PropTypes.number.isRequired
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
    cursor: ${props => props.rapidScrollIsActive ? props.customCursor : "auto"};
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
        background    : linear-gradient(to bottom,
         rgba(255,255,255, 1) 20%,
         rgba(255,255,255, 0) 70%
        );
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
    transition        : all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition   : all 0.3s;
    -ms-transition    : all 0.3s;
`;

const TrailingWord = styled.p`
    font-family       : ${props => props.fontFamily.regular || serif};
    font-size         : ${props => 2.5*props.fontSize + 'px' || '40px'};
    line-height       : ${props => 2.5*props.fontSize + 'px' || '40px'};
    opacity           : 0.5;
    margin            : 0;
    margin-right      : ${props => props.fontSize/2 + 'px' || '8px'};
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
        background    : linear-gradient(to top,
         rgba(255,255,255, 1) 40%,
         rgba(255,255,255, 0) 80%
        );
        pointer-events: none; /* so the text is still selectable */
    }
`;
