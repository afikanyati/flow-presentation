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
        return (
            <ParagraphContainer
                fontSize     ={this.props.fontSize}
                marginTop    ={this.props.topMargin}
                marginBottom ={this.props.bottomMargin}>
                {this.props.type == "history" ?
                    <CSSTransitionGroup
                          transitionName         ={"word"}
                          transitionEnterTimeout ={300}
                          transitionLeaveTimeout ={200}>
                          {this.props.asset.history.map((word) => {
                              return (
                                  <Word
                                      key        ={`parent=[type='${this.props.asset.type}', index='${this.props.asset.index}'], this=[type='word', index='${word.index}']`}
                                      paragraph  ={this.props.asset.index}
                                      word      ={word}
                                      inFixationWindow={false}
                                      fontFamily ={this.props.fontFamily}
                                      skipToWord ={this.props.skipToWord}
                                      toggleWordHighlight={this.props.toggleWordHighlight}/>
                                  );
                              })}
                    </CSSTransitionGroup>
                :
                    this.props.asset.future.map((word) => {
                        return (
                            <Word
                                key        ={`parent =[type ='${this.props.asset.type}', index ='${this.props.asset.index}'], this =[type ='word', index ='${word.index}']`}
                                paragraph  ={this.props.asset.index}
                                word       ={word}
                                inFixationWindow={false}
                                fontFamily ={this.props.fontFamily}
                                skipToWord ={this.props.skipToWord}
                                toggleWordHighlight={this.props.toggleWordHighlight}/>
                            );
                        })
                }
            </ParagraphContainer>
        );
    }

    componentDidMount() {
        // console.log("+++++Paragraph");
    }

    // ========== Methods ===========

    /*

     */
}

// ============= PropTypes ==============

Paragraph.propTypes = {
    type               : PropTypes.string.isRequired,
    asset              : PropTypes.object.isRequired,
    skipToWord         : PropTypes.func.isRequired,
    fontSize           : PropTypes.number.isRequired,
    fontFamily         : PropTypes.object.isRequired,
    bottomMargin       : PropTypes.bool.isRequired,
    topMargin          : PropTypes.bool.isRequired,
    toggleWordHighlight: PropTypes.func.isRequired
};

// ============= Styled Components ==============

const ParagraphContainer = styled.p`
    width             : 100%;
    line-height       : 1.5em;
    margin            : 29px 0;
    margin-top        : ${props => props.marginTop ? null : 0};
    margin-bottom     : ${props => props.marginBottom ? null : 0};
    max-width         : ${props => 30*props.fontSize + 'px'};
    font-size         : ${props => props.fontSize + 'px' || '16px'};
    line-height       : ${props => 1.5*props.fontSize + 'px' || '40px'};
    transition        : all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition   : all 0.3s;
    -ms-transition    : all 0.3s;
`;
