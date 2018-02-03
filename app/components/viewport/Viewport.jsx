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

/**
 * The Viewport component is a component used to
 */
export default class Viewport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scroll            : 0,
            assetCurrentIndex : 0,
            assets            : []
        }
    }

    componentWillMount() {
        console.log("-----Viewport");

        let para = ""
        console.log(JSON.stringify(para.split(" ")));

        // Get thought assets
        // Populate viewport with first asset
        let assets = [
            {
                type: "paragraph",
                history: [],
                trailingWord: [],
                fixationWindow: [],
                future:["I","have", "found", "myself","thinking","a","lot","about","death","lately.","I","know,","what","a","morbid","topic","for","a","young","adult","at","his","physical","peak","with","a","potentially","prosperous","career","and","life","ahead","of","him","to","preoccupy","his","waking","thoughts","with.","“Why","are","you","thinking","about","death?","You","still","have","life","ahead","of","you.","You","go","to","MIT,","you","have","a","loving","family,","you’re","good-looking,","you’re","most","likely","going","to","be","rich!","You","live","the","life","of","the","one","percent.”","Don’t","get","me","wrong,","I","acknowledge","and","appreciate","my","privileged","position,","but","a","lot","of","people","seem","to","be","missing","the","point.","Moreover,","the","more","time","I’ve","devoted","to","pondering","said","point,","the","more","I’ve","become","disillusioned","and","disheartened","by","the","civilization","into","which","I","was","born,","and","as","this","think","piece","unfolds,","I","hope","at","a","minimum","to","help","you","understand","my","grievances,","if","not","to","persuade","you","towards","similar","outlooks.","I","am","I","suicidal?","No.","On","the","contrary,","I","love","life,","and","it’s","this","interminable","love","that","gave","rise","to","my","fear","of","death","and","ignited","the","onset","of","existential","thoughts","that","become","the","basis","for","what","I","will","share","in","this","think","piece."],
                index: 0
            },
            {
                type: "paragraph",
                history: [],
                trailingWord: [],
                fixationWindow: [],
                future:["Be", "warned,", "this","think","piece","is","incomplete,","it’s","overoptimistic","about","human","nature,","and","is","likely","fraught","with","many","inaccuracies,","technical","inconsistencies,","and","assumptions","about","how","the","world","works.","But","nonetheless,","I’ve","felt","the","urge","to","translate","the","mental","dialogue","I’ve","had","since","I","left","high","school","into","a","physical","record,","if","not","for","the","purpose","of","starting","a","conversation,","then","for","therapeutic","exercise","inherent","in","the","process.","“But","what","is","this","think","piece","about?”","I’ve","had","trouble","articulating","this","to","my","peers","recently,","but","if","I","had","to","give","a","one-line","summary,","it","would","best","be","summarized","as","an","attempt","at","constructing","a","model","of","physical","reality","and","a","proposal","for","steering","humanity","towards","some","best-case","utopian","future.","This","is","a","bold","and","somewhat","arrogant","undertaking;","this","I","understand.","But","barring","billionaire","Elon","Musk,","I","see","few","denizens","of","our","planet","actively","attempting","to","deter","humanity","from","precipitating","its","imminent","self-inflicted","extinction.","I","just","want","to","make","my","contribution","using","the","means","I","currently","have — my","knowledge","of","the","current","and","prospective","technological","landscape","and","my","voice.","But","before","getting","to","the","heart","of","the","matter,","I’m","going","to","dial","back","a","bit","and","give","you","some","context","on","human","civilization","and","present","how","our","history","and","biological","evolution","has","lead","to","our","present-day","society.","We","often","overlook","these","details","or","classify","them","as","fixed","conditions,","but","I","want","to","convince","you","otherwise."],
                index: 1
            },
            {
                type: "paragraph",
                history: [],
                trailingWord: [],
                fixationWindow: [],
                future:["We","live","on","a","tiny","rock","in","a","vast","universe.","So","vast","that","it’s","immensity","at","times","is","inconceivably","hard","to","comprehend.","Few","people","barring","the","late","astrophysicist","Carl","Sagan","have","been","able","to","articulate","this","so","adeptly.","For","the","sake","of","refreshing","your","memory","and","re-igniting","your","childhood","wonder,","here’s","an","excerpt","from","Sagan’s","book","‘Pale","Blue","Dot’","voiced","over","a","pretty","curation","of","photographs","and","video","of","Earth-related","subjects:"],
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
                future:["While","it’s","“fun”","to","reflect","on","the","sheer","magnitude","of","the","universe","(of","universes","and","other","possible","higher-dimensional","spaces),","for","the","sake","of","staying","on","topic","let’s","bound","the","scope","of","our","discussion","to","the","three-dimensional","spacetime","continuum,","i.e.","the","three-dimensional","matter","existing","through","the","passage","of","time,","and","focus","on","the","scale","of","interest — the","human","scale."],
                index: 4
            },
            {
                type: "paragraph",
                history: [],
                trailingWord: [],
                fixationWindow: [],
                future:["As","far","as","physical","science","is","concerned,","the","universe","began","13.8","billion","years","ago","with","the","Big","Bang,","which","triggered","the","expansion","of","the","universe.", "However,","we’re","not","really","concerned","much","with","the","time","period","between","the","Big","Bang","and","the","formation","of","the","stars,","galaxies,","and","planets;","we’re","more","concerned","with","the","time","period","beginning","from","the","dawn","of","the","modern","homo","sapien","to","present","day","human","civilization.","Nature","has","had","billions","of","years","to","refine","the","human","species","through","a","phenomenon","know","as","survival","of","the","fittest,","which","essentially","favors","organisms","that","best","adapt","to","their","environment.","If","one","were","to","anthropomorphize","nature","into","a","designer,","survival","of","the","fittest","would","essentially","be","nature","iterating","on","its","ideas,","refining","those","prototypes","that","best","achieve","it’s","objective","function","and","abandoning","those","that","don’t.","For","those","not","familiar","with","the","concept","of","an","objective","function,","here’s","a","brief","description:"],
                index: 5
            },
            {
                type: "paragraph",
                history: [],
                trailingWord: [],
                fixationWindow: [],
                future:["For","nature","this","goal","is","survival.","So","in","essence,","one","can","envision","the","process","of","evolution","as","nature","exploring","and","creating","organisms","from","an","unbounded","option","space,","but","using","the","survival","measure","of","an","organism","as","an","optimization","instrument","to","heuristically","traverse","this","infinite","option","space","with","the","aim","of","converging","onto","some","optimal","design","that","fully","maximizes","its","desired","objective","function.","I","bring","this","point","up","to","highlight","the","fact","that","such","a","goal","might","take","forever","to","achieve,","especially","through","a","partially","stochastic","(randomized)","process","such","as","evolution.","As","a","result,","we","have","reason","to","believe","the","homo","sapien","in","its","current","form","is","in","no","way","an","optimal","design.","Furthermore,","as","a","consequence","of","the","emergence","of","consciousness,","humans","have","developed","their","own","set","of","desires","that","weren’t","initially","factored","into","the","original","objective","function","set","by","nature — desires","such","as","love,","esteem,","and","self-actualization.","For","this","reason,","humans","today","are","the","product","of","an","objective","function","that","by","our","present","standards","is","underspecified.","Indeed,","an","objective","function","built","on","survival","is","not","suitable","for","satisfying","the","needs","of","a","21st","century","human.","This","is","a","problem;","we","need","to","reconcile","our","objective","function","with","our","higher-level","needs."],
                index: 6
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
            <Container id="viewport">
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
                <FeatureMenu
                    />
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

        if (this.state.scroll == 15) {
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

    skipToWord = (word, paragraphIndex, wordIndex) => {
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
