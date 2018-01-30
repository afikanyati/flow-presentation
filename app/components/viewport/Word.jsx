// Libs
import React        from 'react';
import PropTypes    from 'prop-types';
import styled       from 'styled-components';

/**
 * The Word component is a component used to
 */
export default class Word extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text   : "",
            index   : -1,
            paragraph: -1,
            messages: {}
        }
    }

    componentWillMount() {
        // console.log("-----Word");
    }

    render() {
        return (
            <Text
                italic     ={this.props.italic}
                bold       ={this.props.bold}
                fontFamily ={this.props.fontFamily}
                onClick    ={this.props.skipToWord.bind({}, this.state.text.slice(0, -1), this.state.paragraph, this.state.index)}>
                {this.state.text}
            </Text>
        );
    }

    componentDidMount() {
        // console.log("+++++Word");

        this.setState({
            text   : this.props.text,
            index   : this.props.index,
            paragraph: this.props.paragraph,
            messages: this.props.messages
        });
    }

    // ========== Methods ===========

    /*

     */
}

// ============= PropTypes ==============

Word.propTypes = {
    paragraph          : PropTypes.number.isRequired,
    text               : PropTypes.string.isRequired,
    index              : PropTypes.number.isRequired,
    messages           : PropTypes.object,
    italic             : PropTypes.bool,
    bold               : PropTypes.bool,
    skipToWord         : PropTypes.func.isRequired,
    fontFamily         : PropTypes.object.isRequired
};

// ============= Styled Components ==============

const Text = styled.span`
    font-family: ${props => props.italic ? props.fontFamily.italic : props.fontFamily.regular};
    font-style : ${props => props.italic ? 'italic'                : 'normal'};
    font-weight: ${props => props.bold ? 700                       : 400};
    margin     : 0;
    cursor     : pointer;
    display    : inline-block;
    white-space: pre;
    transition        : all 0.2s;
    -webkit-transition: all 0.2s;
    -moz-transition   : all 0.2s;
    -ms-transition    : all 0.2s;

    &:hover {
        color: ${props => props.theme.red};
        transition        : all 0.2s;
        -webkit-transition: all 0.2s;
        -moz-transition   : all 0.2s;
        -ms-transition    : all 0.2s;
    }
`;
