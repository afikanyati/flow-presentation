// Libraries
import React                    from 'react';
import firebase                 from 'firebase';
import PropTypes                from 'prop-types';
import styled                   from 'styled-components';
import uuid                     from 'uuid';
import { CSSTransitionGroup }   from 'react-transition-group'

// Components
import Word                     from './Word';
import ScrollDirectionTypes     from '../../constants/scrollDirectionTypes';

/**
 * The Viewport component is a component used to
 */
export default class Viewport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scroll        : 0,
            currentAsset  : 0,
            history       : [],
            trailingWord  : [],
            fixationWindow: ["I","have", "found", "myself"],
            future        :["thinking","a","lot","about","death","lately.","I","know,","what","a","morbid","topic","for","a","young","adult","at","his","physical","peak","with","a","potentially","prosperous","career","and","life","ahead","of","him","to","preoccupy","his","waking","thoughts","with.","“Why","are","you","thinking","about","death?","You","still","have","life","ahead","of","you.","You","go","to","MIT,","you","have","a","loving","family,","you’re","good-looking,","you’re","most","likely","going","to","be","rich!","You","live","the","life","of","the","one","percent.”","Don’t","get","me","wrong,","I","acknowledge","and","appreciate","my","privileged","position,","but","a","lot","of","people","seem","to","be","missing","the","point.","Moreover,","the","more","time","I’ve","devoted","to","pondering","said","point,","the","more","I’ve","become","disillusioned","and","disheartened","by","the","civilization","into","which","I","was","born,","and","as","this","think","piece","unfolds,","I","hope","at","a","minimum","to","help","you","understand","my","grievances,","if","not","to","persuade","you","towards","similar","outlooks.","I","am","I","suicidal?","No.","On","the","contrary,","I","love","life,","and","it’s","this","interminable","love","that","gave","rise","to","my","fear","of","death","and","ignited","the","onset","of","existential","thoughts","that","become","the","basis","for","what","I","will","share","in","this","think","piece."],
            assets        : []
                }
            }

    componentWillMount() {
        console.log("-----Viewport");
    }

    render() {
        return (
            <Container id="viewport">
                <HistoryContainer
                    fontSize={this.props.fontSize}>
                    <History
                        fontSize   ={this.props.fontSize}
                        fontFamily ={this.props.fontFamily}>
                        <CSSTransitionGroup
                              transitionName         ="periphery"
                              transitionEnterTimeout ={300}
                              transitionLeaveTimeout ={200}>
                            {this.state.history.slice(Math.max(0, this.state.history.length - 120)).map((word, index, arr) => {
                                return (
                                        <Word
                                            key        ={index}
                                            value      ={`${word} `}
                                            index      ={index}
                                            fontFamily ={this.props.fontFamily}
                                            skipToWord ={this.skipToWord}
                                            />
                                );
                            })}
                        </CSSTransitionGroup>
                    </History>
                </HistoryContainer>
                <FixationWindowContainer
                    fontSize={this.props.fontSize}>
                    {this.props.fixationWidth > 1 ?
                        <TrailingWord
                            fontSize   ={this.props.fontSize}
                            fontFamily ={this.props.fontFamily}>
                            <CSSTransitionGroup
                                  transitionName         ="fixation"
                                  transitionEnterTimeout ={200}
                                  transitionLeave        ={false}>
                                {this.state.trailingWord.map((word, index, arr) => {
                                    return (
                                        <Word
                                            key        ={this.state.history.length}
                                            value      ={`${word} `}
                                            index      ={this.state.history.length}
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
                    <FixationWindow
                        fontSize={this.props.fontSize}
                        fontFamily={this.props.fontFamily}>
                        <CSSTransitionGroup
                              transitionName         ="fixation"
                              transitionEnterTimeout ={200}
                              transitionLeave        ={false}>
                            {this.state.fixationWindow.map((word, index, arr) => {
                                return (
                                    <Word
                                        key        ={index + this.state.history.length + this.state.trailingWord.length}
                                        value      ={`${word} `}
                                        index      ={index + this.state.history.length + this.state.trailingWord.length}
                                        fontFamily ={this.props.fontFamily}
                                        skipToWord ={this.skipToWord}
                                    />
                                );
                            })}
                        </CSSTransitionGroup>
                    </FixationWindow>
                </FixationWindowContainer>
                <FutureContainer
                    fontSize={this.props.fontSize}>
                    <Future
                        fontSize   ={this.props.fontSize}
                        fontFamily ={this.props.fontFamily}>
                        {this.state.future.slice(0, Math.min(96, this.state.future.length)).map((word, index, arr) => {
                            return (
                                <Word
                                    key        ={index + this.state.history.length + this.state.trailingWord.length + this.state.fixationWindow.length}
                                    value      ={`${word} `}
                                    index      ={index + this.state.history.length + this.state.trailingWord.length + this.state.fixationWindow.length}
                                    fontFamily ={this.props.fontFamily}
                                    skipToWord ={this.skipToWord}
                                    />
                            );
                        })}
                    </Future>
                </FutureContainer>
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

        // Get thought assets
        // Populate viewport with first asset
        let assets = [
            {
                type: "paragraph",
                asset: {
                    history: [],
                    trailingWord: [],
                    fixationWindow: [],
                    future:["I","have", "found", "myself","thinking","a","lot","about","death","lately.","I","know,","what","a","morbid","topic","for","a","young","adult","at","his","physical","peak","with","a","potentially","prosperous","career","and","life","ahead","of","him","to","preoccupy","his","waking","thoughts","with.","“Why","are","you","thinking","about","death?","You","still","have","life","ahead","of","you.","You","go","to","MIT,","you","have","a","loving","family,","you’re","good-looking,","you’re","most","likely","going","to","be","rich!","You","live","the","life","of","the","one","percent.”","Don’t","get","me","wrong,","I","acknowledge","and","appreciate","my","privileged","position,","but","a","lot","of","people","seem","to","be","missing","the","point.","Moreover,","the","more","time","I’ve","devoted","to","pondering","said","point,","the","more","I’ve","become","disillusioned","and","disheartened","by","the","civilization","into","which","I","was","born,","and","as","this","think","piece","unfolds,","I","hope","at","a","minimum","to","help","you","understand","my","grievances,","if","not","to","persuade","you","towards","similar","outlooks.","I","am","I","suicidal?","No.","On","the","contrary,","I","love","life,","and","it’s","this","interminable","love","that","gave","rise","to","my","fear","of","death","and","ignited","the","onset","of","existential","thoughts","that","become","the","basis","for","what","I","will","share","in","this","think","piece."]
                }
            },
            {
                type: "paragraph",
                asset: {
                    history: [],
                    trailingWord: [],
                    fixationWindow: [],
                    future:["Be", "warned,", "this","think","piece","is","incomplete,","it’s","overoptimistic","about","human","nature,","and","is","likely","fraught","with","many","inaccuracies,","technical","inconsistencies,","and","assumptions","about","how","the","world","works.","But","nonetheless,","I’ve","felt","the","urge","to","translate","the","mental","dialogue","I’ve","had","since","I","left","high","school","into","a","physical","record,","if","not","for","the","purpose","of","starting","a","conversation,","then","for","therapeutic","exercise","inherent","in","the","process.","“But","what","is","this","think","piece","about?”","I’ve","had","trouble","articulating","this","to","my","peers","recently,","but","if","I","had","to","give","a","one-line","summary,","it","would","best","be","summarized","as","an","attempt","at","constructing","a","model","of","physical","reality","and","a","proposal","for","steering","humanity","towards","some","best-case","utopian","future.","This","is","a","bold","and","somewhat","arrogant","undertaking;","this","I","understand.","But","barring","billionaire","Elon","Musk,","I","see","few","denizens","of","our","planet","actively","attempting","to","deter","humanity","from","precipitating","its","imminent","self-inflicted","extinction.","I","just","want","to","make","my","contribution","using","the","means","I","currently","have — my","knowledge","of","the","current","and","prospective","technological","landscape","and","my","voice.","But","before","getting","to","the","heart","of","the","matter,","I’m","going","to","dial","back","a","bit","and","give","you","some","context","on","human","civilization","and","present","how","our","history","and","biological","evolution","has","lead","to","our","present-day","society.","We","often","overlook","these","details","or","classify","them","as","fixed","conditions,","but","I","want","to","convince","you","otherwise."]
                }
            }
        ];

        assets[0].asset.fixationWindow = assets[0].asset.future.slice(0, this.props.fixationWidth);
        assets[0].asset.future         = assets[0].asset.future.slice(this.props.fixationWidth);

        this.setState({
            assets        : assets,
            fixationWindow: assets[0].asset.fixationWindow,
            future        : assets[0].asset.future
        })

    }

    componentWillUnmount() {
        window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
    }

    // ========== Methods ===========

    handleKeys = (e) => {

        // 37 = Left, 38 = Up, 39 = Right, 40 = Down
        let keys = {
            37: true,
            38: true,
            39: true,
            40: true
        };

        if (keys[e.keyCode]) {
            this.preventDefault(e);

            let history         = this.state.assets[this.state.currentAsset].asset.history,
            trailingWord        = this.state.assets[this.state.currentAsset].asset.trailingWord,
            fixationWindow      = this.state.assets[this.state.currentAsset].asset.fixationWindow,
            future              = this.state.assets[this.state.currentAsset].asset.future;
            let sliceDistance   = this.props.fixationWidth - 1;

            // Up or Left
            if (e.keyCode == 37 || e.keyCode == 38) {
                if (this.props.fixationWidth > 1) {
                    future         = fixationWindow.concat(future);
                    fixationWindow = history.slice(history.length - sliceDistance + 1).concat(trailingWord);
                    trailingWord   = history.slice(history.length - sliceDistance, history.length - sliceDistance + 1);
                    history        = history.slice(0, history.length - sliceDistance);
                } else {
                    future         = fixationWindow.concat(future);
                    fixationWindow = history.slice(history.length - 1, history.length);
                    history        = history.slice(0, history.length - 1);
                }
            // Down or Right
            } else if (e.keyCode == 39 || e.keyCode == 40) {
                if (this.props.fixationWidth > 1) {
                    history        = history.concat(trailingWord).concat(fixationWindow.slice(0, fixationWindow.length - 1));
                    trailingWord   = fixationWindow.slice(-1);
                    fixationWindow = future.slice(0, sliceDistance);
                    future         = future.slice(sliceDistance);
                } else {
                    history        = history.concat(fixationWindow);
                    fixationWindow = future.slice(0, 1);
                    future         = future.slice(1, future.length);
                }
            }

            let assets                                           = this.state.assets;
            assets[this.state.currentAsset].asset.history        = history;
            assets[this.state.currentAsset].asset.trailingWord   = trailingWord;
            assets[this.state.currentAsset].asset.fixationWindow = fixationWindow;
            assets[this.state.currentAsset].asset.future         = future;

            this.setState({
                history       : history,
                trailingWord  : trailingWord,
                fixationWindow: fixationWindow,
                future        : future,
                assets        : assets
            });

            return false;
        }
    }

    handleScroll = (e) => {
        this.preventDefault(e);

        if (this.state.scroll == 15) {
            let scrollDirection = this.getScrollDirection(e);
            let history         = this.state.assets[this.state.currentAsset].asset.history,
            trailingWord        = this.state.assets[this.state.currentAsset].asset.trailingWord,
            fixationWindow      = this.state.assets[this.state.currentAsset].asset.fixationWindow,
            future              = this.state.assets[this.state.currentAsset].asset.future;
            let sliceDistance   = this.props.fixationWidth - 1;

            if (scrollDirection == ScrollDirectionTypes.UP) {
                if (this.props.fixationWidth > 1) {
                    future         = fixationWindow.concat(future);
                    fixationWindow = history.slice(history.length - sliceDistance + 1).concat(trailingWord);
                    trailingWord   = history.slice(history.length - sliceDistance, history.length - sliceDistance + 1);
                    history        = history.slice(0, history.length - sliceDistance);
                } else {
                    future         = fixationWindow.concat(future);
                    fixationWindow = history.slice(history.length - 1, history.length);
                    history        = history.slice(0, history.length - 1);
                }
            } else if (scrollDirection == ScrollDirectionTypes.DOWN) {
                if (this.props.fixationWidth > 1) {
                    history        = history.concat(trailingWord).concat(fixationWindow.slice(0, fixationWindow.length - 1));
                    trailingWord   = fixationWindow.slice(-1);
                    fixationWindow = future.slice(0, sliceDistance);
                    future         = future.slice(sliceDistance);
                } else {
                    history        = history.concat(fixationWindow);
                    fixationWindow = future.slice(0, 1);
                    future         = future.slice(1, future.length);
                }
            }

            let assets                                           = this.state.assets;
            assets[this.state.currentAsset].asset.history        = history;
            assets[this.state.currentAsset].asset.trailingWord   = trailingWord;
            assets[this.state.currentAsset].asset.fixationWindow = fixationWindow;
            assets[this.state.currentAsset].asset.future         = future;

            this.setState({
                history       : history,
                trailingWord  : trailingWord,
                fixationWindow: fixationWindow,
                future        : future,
                assets        : assets,
                scroll        : 0
            });
        }

        this.setState({
            scroll: this.state.scroll + 1
        });

        console.log(JSON.stringify(this.state.history.slice(Math.max(0, this.state.history.length - 120))));
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

    skipToWord = (value, index) => {
        let currentAsset     = this.state.assets[this.state.currentAsset];

        let historyLength    = currentAsset.asset.history.length,
        trailingWordLength   = currentAsset.asset.trailingWord.length,
        fixationWindowLength = currentAsset.asset.fixationWindow.length,
        futureLength         = currentAsset.asset.future.length;

        let history          = currentAsset.asset.history,
        trailingWord         = currentAsset.asset.trailingWord,
        fixationWindow       = currentAsset.asset.fixationWindow,
        future               = currentAsset.asset.future;
        let sliceDistance    = this.props.fixationWidth - 1;

        if (this.props.fixationWidth > 1) {
            // determine which section of viewport word is in
            if (index < historyLength) {
                // History Word
                let position   = history.indexOf(value); // where position is local to array and index is global
                future         = history.slice(position).concat(trailingWord, fixationWindow, future); // proxy future to re-establish fixationWindow
                history        = history.slice(0, position);
                trailingWord   = [];
                fixationWindow = future.slice(0, this.props.fixationWidth);
                future         = future.slice(this.props.fixationWidth);
            } else if (index == historyLength) {
                // Trailing Word
                fixationWindow = trailingWord.concat(fixationWindow);
                trailingWord   = [];
            } else if (index > historyLength && index < historyLength + trailingWordLength + fixationWindowLength) {
                // Fixation Window
                let position   = fixationWindow.indexOf(value); // where position is local to array and index is global
                history        = history.concat(trailingWord,fixationWindow.slice(0, position));
                trailingWord   = [];
                future         = fixationWindow.slice(position).concat(future); // proxy future to re-establish fixationWindow
                fixationWindow = future.slice(0, this.props.fixationWidth);
                future         = future.slice(this.props.fixationWidth);
            } else if (index >= historyLength + trailingWordLength + fixationWindowLength) {
                // Future Word
                let position   = future.indexOf(value); // where position is local to array and index is global
                history        = history.concat(trailingWord,fixationWindow, future.slice(0, position));
                trailingWord   = [];
                fixationWindow = future.slice(position, position + this.props.fixationWidth);
                future         = future.slice(position + this.props.fixationWidth);
            }
        } else {
            // determine which section of viewport word is in
            if (index < historyLength) {
                // History Word
                let position   = history.indexOf(value); // where position is local to array and index is global
                future         = history.slice(position).concat(fixationWindow, future); // proxy future to re-establish fixationWindow
                history        = history.slice(0, position);
                fixationWindow = future.slice(0, this.props.fixationWidth);
                future         = future.slice(this.props.fixationWidth);

            } else if (index >= historyLength && index < historyLength + fixationWindowLength) {
                // Trailing Word or Fixation Window
                // Do nothing
                return;
            } else if (index >= historyLength + fixationWindowLength) {
                // Future Word
                let position   = future.indexOf(value); // where position is local to array and index is global
                history        = history.concat(fixationWindow, future.slice(0, position));
                fixationWindow = [future[position]];
                future         = future.slice(position + 1);
            }
        }

        // Viewport History might have reminants of old
        // asset.
        // Keep this content
        let position        = this.state.history.lastIndexOf("\n") != -1 ? this.state.history.lastIndexOf("\n") : 0;
        let viewportHistory = this.state.history.slice(0, position).concat(history);

        let assets                                           = this.state.assets;
        assets[this.state.currentAsset].asset.history        = history;
        assets[this.state.currentAsset].asset.trailingWord   = trailingWord;
        assets[this.state.currentAsset].asset.fixationWindow = fixationWindow;
        assets[this.state.currentAsset].asset.future         = future;

        this.setState({
            history       : viewportHistory,
            trailingWord  : trailingWord,
            fixationWindow: fixationWindow,
            future        : future,
            assets        : assets
        });
    }
}

// ============= PropTypes ==============

Viewport.propTypes = {
    fontSize     : PropTypes.number.isRequired,
    fontFamily   : PropTypes.object.isRequired,
    fixationWidth: PropTypes.number.isRequired,
    theme         : PropTypes.string.isRequired,
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
         rgba(255,255,255, 1) 0%,
         rgba(255,255,255, 0) 50%
        );
        pointer-events: none; /* so the text is still selectable */
    }
`;

const History = styled.p`
    position          : absolute;
    bottom            : 0;
    right             : 0;
    max-width         : ${props => 30*props.fontSize + 'px'};
    font-family       : ${props => props.fontFamily.regular || serif};
    font-size         : ${props => props.fontSize + 'px' || '16px'};
    line-height       : ${props => 1.5*props.fontSize + 'px' || '40px'};
    margin            : 0;
    transition        : all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition   : all 0.3s;
    -ms-transition    : all 0.3s;
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
    opacity           : 0.7;
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
         rgba(255,255,255, 1) 20%,
         rgba(255,255,255, 0) 80%
        );
        pointer-events: none; /* so the text is still selectable */
    }
`;

const Future = styled.p`
    position   : absolute;
    width      : 100%;
    font-family: ${props => props.fontFamily.regular || serif};
    font-size  : ${props => props.fontSize + 'px' || '16px'};
    line-height: ${props => 1.5*props.fontSize + 'px' || '40px'};
    margin     : 0;
`;
