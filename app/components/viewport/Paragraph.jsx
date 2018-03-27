// Libs
import React                    from 'react';
import PropTypes                from 'prop-types';
import styled                   from 'styled-components';
import { CSSTransitionGroup }   from 'react-transition-group';

// Components
import Word                     from './Word';

/**
 * The Paragraph component is a component used to
 */
export default class Paragraph extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //console.log("-----Paragraph");
    }

    render() {
        let words = this.props.asset.sentences.reduce((words, sentence) => {return words.concat(sentence.words)},[]);
        return (
            <ParagraphContainer
                fontSize     ={this.props.fontSize}>
                <CSSTransitionGroup
                      transitionName         ={"word"}
                      transitionEnterTimeout ={200}
                      transitionLeave        ={false}>
                      {words.map((word) => {
                          return (
                              <Word
                                  key        ={`parent=[parent=[type='paragraph', index='${word.index.paragraph}'], this=[type='sentence', index='${word.index.sentence}']], this=[type='word', index='${word.index.word}']`}
                                  word      ={word}
                                  inFixationWindow={false}
                                  fontFamily ={this.props.fontFamily}
                                  skipToWord ={this.props.skipToWord}
                                  skin={this.props.skin}
                                  showAnnotations={this.props.showAnnotations}
                                  cruiseControlHaltIsActive={this.props.cruiseControlHaltIsActive}
                              />
                              );
                          })}
                </CSSTransitionGroup>
            </ParagraphContainer>
        );
    }

    componentDidMount() {
        // console.log("+++++Paragraph");
    }

    // ========== Methods ===========
}

// ============= PropTypes ==============

Paragraph.propTypes = {
    asset          : PropTypes.object.isRequired,
    skipToWord         : PropTypes.func.isRequired,
    fontSize           : PropTypes.number.isRequired,
    fontFamily         : PropTypes.object.isRequired,
    skin               : PropTypes.string.isRequired,
    showAnnotations    : PropTypes.bool.isRequired,
    cruiseControlHaltIsActive: PropTypes.bool.isRequired
};

// ============= Styled Components ==============

const ParagraphContainer = styled.p`
    width             : 100%;
    line-height       : 1.5em;
    margin            : 15px 0;
    font-size         : ${props => props.fontSize + 'px' || '16px'};
    line-height       : ${props => 1.5*props.fontSize + 'px' || '40px'};
    transition        : all 0.3s;
`;
