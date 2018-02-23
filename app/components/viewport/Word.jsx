// Libs
import React                    from 'react';
import PropTypes                from 'prop-types';
import styled                   from 'styled-components';

// Components
import FontTypes                from '../../constants/fontTypes';
import SkinTypes                from '../../constants/skinTypes';
import BookmarkFilled           from '../../assets/images/icons/bookmark-red-fill.svg';
import AttachmentFilled         from '../../assets/images/icons/attachment-purple.svg';
import { CSSTransitionGroup }   from 'react-transition-group';

/**
 * The Word component is a component used to
 */
export default class Word extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // console.log("-----Word");
    }

    render() {
        return (
            <TextContainer
                hasBookmark={this.props.word.hasBookmark}
                hasAttachment={Object.keys(this.props.word.attachment).length != 0}
                inFixationWindow={this.props.inFixationWindow}>
                <AttachmentIcon
                    src={AttachmentFilled}
                    hasAttachment={Object.keys(this.props.word.attachment).length != 0}
                    inFixationWindow={this.props.inFixationWindow} />
                <Text
                    skin={this.props.skin}
                    italic        ={this.props.italic}
                    bold          ={this.props.bold}
                    isHighlighted ={this.props.word.isHighlighted}
                    hasBookmark={this.props.word.hasBookmark}
                    hasAttachment={Object.keys(this.props.word.attachment).length != 0}
                    inFixationWindow={this.props.inFixationWindow}
                    fontFamily    ={this.props.fontFamily}
                    onClick       ={this.props.skipToWord.bind({}, this.props.word.text, this.props.paragraph, this.props.word.index)}>
                    {`${this.props.word.text} `}
                </Text>
                <BookmarkIcon
                    src={BookmarkFilled}
                    hasBookmark={this.props.word.hasBookmark}
                    inFixationWindow={this.props.inFixationWindow} />
            </TextContainer>
        );
    }

    componentDidMount() {
        // console.log("+++++Word");
    }

    // ========== Methods ===========

}

// ============= PropTypes ==============

Word.propTypes = {
    paragraph          : PropTypes.number.isRequired,
    word               : PropTypes.object.isRequired,
    italic             : PropTypes.bool,
    bold               : PropTypes.bool,
    skipToWord         : PropTypes.func.isRequired,
    fontFamily         : PropTypes.object.isRequired,
    toggleWordHighlight: PropTypes.func.isRequired,
    inFixationWindow   : PropTypes.bool.isRequired,
    skin               : PropTypes.string.isRequired
};

// ============= Styled Components ==============

const TextContainer = styled.span`
    display: inline-flex;
    flex-direction: column;
    margin: 0;
    margin-top: ${props => props.hasBookmark && !props.hasAttachment && props.inFixationWindow ? "50px" : "0px"};
    padding: 0;
`;

const Text = styled.span`
    background-color: ${props => props.isHighlighted ? props.theme.green : "transparent"};
    border-bottom-width: ${props =>  !props.inFixationWindow && (props.hasBookmark || props.hasAttachment) ? "3px" : "0px"};
    border-bottom-color: transparent;
    border-bottom-style: solid;
    border-image: ${props => props.hasBookmark && props.hasAttachment ?
            "linear-gradient(to right, #d3224f 0%, #65266d 100%)"
        :
            props.hasBookmark ?
                    "linear-gradient(to right, #d3224f 0%, #d3224f 100%)"
                :
                    props.hasAttachment ?
                        "linear-gradient(to right, #65266d 0%, #65266d 100%)"
                    :
                        "none 100% 1 0 stretch"
    };
    border-image-slice: 1;
    font-family: ${props => props.italic ? props.fontFamily.italic : props.fontFamily.regular};
    font-style : ${props => props.italic ? 'italic'                : 'normal'};
    font-weight: ${props => props.bold ?
            700
        :
            props.fontFamily == FontTypes.AVERTA || props.fontFamily == FontTypes.AVENIR ?
                300
            :
                400
    };
    margin     : 0;
    cursor     : pointer;
    display    : inline-block;
    white-space: pre;
    transition        : all 0.2s;
    -webkit-transition: all 0.2s;
    -moz-transition   : all 0.2s;
    -ms-transition    : all 0.2s;

    &:hover {
        color: ${props => props.skin == SkinTypes.WHITE ?
                    props.theme.purple
                :
                    props.theme.lightPurple
                };
        transition        : all 0.2s;
        -webkit-transition: all 0.2s;
        -moz-transition   : all 0.2s;
        -ms-transition    : all 0.2s;
    }
`;

const BookmarkIcon = styled.img`
    display: ${props => props.hasBookmark && props.inFixationWindow ? "static" : "none"};
    position: relative;
    left: -8px;
    top: 5px;
    height: 50px;
    margin: 0;
    padding: 0;
    cursor: pointer;
    animation: .2s fadeIn;
`;

const AttachmentIcon = styled.img`
    display: ${props => props.hasAttachment && props.inFixationWindow ? "static" : "none"};
    position: relative;
    left: -8px;
    bottom: 5px;
    height: 50px;
    margin: 0;
    padding: 0;
    opacity: 0.3;
    cursor: pointer;
    animation: .2s fadeIn;
    transition        : all 0.2s;
    -webkit-transition: all 0.2s;
    -moz-transition   : all 0.2s;
    -ms-transition    : all 0.2s;

    &:hover {
        opacity: 1;
        transition        : all 0.2s;
        -webkit-transition: all 0.2s;
        -moz-transition   : all 0.2s;
        -ms-transition    : all 0.2s;
    }
`;
