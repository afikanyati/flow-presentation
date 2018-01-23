// Libraries
import React            from 'react';
import firebase         from 'firebase';
import PropTypes        from 'prop-types';
import styled           from 'styled-components';

// Components


/**
 * The Viewport component is a component used to
 */
export default class Viewport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            history: "",
            trailingWord: "",
            fixationWindow: "I have found myself",
            future: "thinking a lot about death lately. I know, what a morbid topic for a young adult at his physical peak with a potentially prosperous career and life ahead of him to preoccupy his waking thoughts with. “Why are you thinking about death? You still have life ahead of you. You go to MIT, you have a loving family, you’re good-looking, you’re most likely going to be rich! You live the life of the one percent.” Don’t get me wrong, I acknowledge and appreciate my privileged position, but a lot of people seem to be missing the point. Moreover, the more time I’ve devoted to pondering said point, the more I’ve become disillusioned and disheartened by the civilization into which I was born, and as this think piece unfolds, I hope at a minimum to help you understand my grievances, if not to persuade you towards similar outlooks. I am I suicidal? No. On the contrary, I love life, and it’s this interminable love that gave rise to my fear of death and ignited the onset of existential thoughts that become the basis for what I will share in this think piece. \n Be warned, this think piece is incomplete, it’s overoptimistic about human nature, and is likely fraught with many inaccuracies, technical inconsistencies, and assumptions about how the world works. But nonetheless, I’ve felt the urge to translate the mental dialogue I’ve had since I left high school into a physical record, if not for the purpose of starting a conversation, then for therapeutic exercise inherent in the process. “But what is this think piece about?” I’ve had trouble articulating this to my peers recently, but if I had to give a one-line summary, it would best be summarized as an attempt at constructing a model of physical reality and a proposal for steering humanity towards some best-case utopian future. This is a bold and somewhat arrogant undertaking; this I understand. But barring billionaire Elon Musk, I see few denizens of our planet actively attempting to deter humanity from precipitating its imminent self-inflicted extinction. I just want to make my contribution using the means I currently have — my knowledge of the current and prospective technological landscape and my voice. But before getting to the heart of the matter, I’m going to dial back a bit and give you some context on human civilization and present how our history and biological evolution has lead to our present-day society. We often overlook these details or classify them as fixed conditions, but I want to convince you otherwise.",
            scroll: 0
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
                        fontSize={this.props.fontSize}
                        fontFamily={this.props.fontFamily}>
                        {this.state.history}
                    </History>
                </HistoryContainer>
                <FixationWindowContainer
                    fontSize={this.props.fontSize}>
                    <TrailingWord
                        fontSize={this.props.fontSize}
                        fontFamily={this.props.fontFamily}>
                        {this.state.trailingWord}
                    </TrailingWord>
                    <FixationWindow
                        fontSize={this.props.fontSize}
                        fontFamily={this.props.fontFamily}>
                        {this.state.fixationWindow}
                    </FixationWindow>
                </FixationWindowContainer>
                <FutureContainer
                    fontSize={this.props.fontSize}>
                    <Future
                        fontSize={this.props.fontSize}
                        fontFamily={this.props.fontFamily}>
                        {this.state.future}
                    </Future>
                </FutureContainer>
            </Container>
        );
    }

    componentDidMount() {
        console.log("+++++Viewport");
        window.addEventListener('DOMMouseScroll', this.preventDefault, false);
        window.onwheel = this.preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
        window.ontouchmove  = this.preventDefault; // mobile
        document.onkeydown  = this.preventDefaultForScrollKeys;
    }

    componentWillUnmount() {
        window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
    }

    // ========== Methods ===========
    //
    getScrollDirection = (e) => {
        var delta;

        if (e.wheelDelta) {
            delta = e.wheelDelta;
        } else {
            delta = -1 * e.deltaY;
        }

        if (delta < 0) {
            return "down";
        } else if (delta > 0){
            return "up";
        }
    }

    /*

     */
    handleScroll = (e) => {
        if (this.state.scroll == 40) {
            let scrollDirection = this.getScrollDirection(e);
            let historyArray = this.state.history.split(" ");
            let fixationWindowArray = this.state.fixationWindow.split(" ");
            let futureArray = this.state.future.split(" ");
            let history, trailingWord , fixationWindow, future;
            if (this.state.history == "" && this.state.trailingWord != "") {
                history = "";
                trailingWord = "";
                fixationWindow = `${this.state.trailingWord} ${this.state.fixationWindow}`;
                future = this.state.future;
            } else if (scrollDirection == "up" && this.state.history != "" && this.state.trailingWord != "") {
                history = historyArray.slice(0, historyArray.length - 3).join(" ");
                trailingWord = historyArray.slice(historyArray.length - 3, historyArray.length - 2)[0];
                fixationWindow = `${historyArray.slice(historyArray.length - 2).join(" ")} ${this.state.trailingWord}`;
                future =`${fixationWindowArray.slice(0, fixationWindowArray.length - 1).join(" ")} ` + this.state.future;
            } else if (scrollDirection == "down"){
                history = this.state.history != "" ? this.state.history + ` ${this.state.trailingWord} ${fixationWindowArray.slice(0, fixationWindowArray.length - 1).join(" ")}`: `${fixationWindowArray.slice(0, fixationWindowArray.length - 1).join(" ")}`;
                trailingWord = fixationWindowArray.slice(-1)[0];
                fixationWindow = futureArray.slice(0,3).join(" ");
                future = futureArray.slice(3).join(" ");
            }

            this.setState({
                history: history,
                trailingWord: trailingWord,
                fixationWindow: fixationWindow,
                future: future,
                scroll: 0
            });
        }

        this.setState({
            scroll: this.state.scroll + 1
        });
    }

    preventDefault = (e) => {
      e = e || window.event;
      if (e.preventDefault)
          e.preventDefault();
          this.handleScroll(e);
      e.returnValue = false;
    }

    preventDefaultForScrollKeys = (e) => {
        let keys = {37: 1, 38: 1, 39: 1, 40: 1};
        if (keys[e.keyCode]) {
            this.preventDefault(e);
            return false;
        }
    }
}

// ============= PropTypes ==============

Viewport.propTypes = {

};

// ============= Styled Components ==============
const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;  /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    -moz-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
	-ms-align-items: center;
	-moz-align-items: center;
	align-items: center;
    overflow: hidden;
`;

const HistoryContainer = styled.section`
    position: relative;
    width: 100%;
    max-width: ${props => 30*props.fontSize + 'px'};
    height: 35vh;
    margin: 0;
    opacity: 0.8;

    &:after {
        position: absolute;
        bottom: 0;
        height: 100%;
        width: 100%;
        content: "";
        background: linear-gradient(to bottom,
         rgba(255,255,255, 1) 0%,
         rgba(255,255,255, 0) 50%
        );
        pointer-events: none; /* so the text is still selectable */
    }
`;

const History = styled.p`
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: ${props => 30*props.fontSize + 'px'};
    font-family: ${props => props.fontFamily.regular || serif};
    font-size: ${props => props.fontSize + 'px' || '16px'};
    line-height: ${props => 1.5*props.fontSize + 'px' || '40px'};
    margin: 0;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
`;

const FixationWindowContainer = styled.section`
    position: relative;
    display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;  /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    -moz-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: center;
	-ms-align-items: center;
	-moz-align-items: center;
	align-items: center;
    -webkit-justify-content: center;
    -ms-align-justify-content: center;
    -moz-justify-content: center;
    justify-content: center;
    width: 100vw;
    max-width: ${window.innerWidth - 200};
    height: 30vh;
    margin: 0;
`;

const FixationWindow = styled.p`
    font-family: ${props => props.fontFamily.regular || serif};
    font-size: ${props => 2.5*props.fontSize + 'px' || '40px'};
    line-height: ${props => 2.5*props.fontSize + 'px' || '40px'};
    margin: 0;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
`;

const TrailingWord = styled.p`
    font-family: ${props => props.fontFamily.regular || serif};
    font-size: ${props => 2.5*props.fontSize + 'px' || '40px'};
    line-height: ${props => 2.5*props.fontSize + 'px' || '40px'};
    opacity: 0.7;
    margin: 0;
    margin-right: ${props => props.fontSize/2 + 'px' || '8px'};
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
`;

const FutureContainer = styled.section`
    position: relative;
    width: 100%;
    max-width: ${props => 30*props.fontSize + 'px'};
    height: 35vh;
    margin: 0;
    opacity: 0.2;

    &:after {
        position: absolute;
        bottom: 0;
        height: 100%;
        width: 100%;
        content: "";
        background: linear-gradient(to top,
         rgba(255,255,255, 1) 20%,
         rgba(255,255,255, 0) 80%
        );
        pointer-events: none; /* so the text is still selectable */
    }
`;

const Future = styled.p`
    position: absolute;
    width: 100%;
    font-family: ${props => props.fontFamily.regular || serif};
    font-size: ${props => props.fontSize + 'px' || '16px'};
    line-height: ${props => 1.5*props.fontSize + 'px' || '40px'};
    margin: 0;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
`;
