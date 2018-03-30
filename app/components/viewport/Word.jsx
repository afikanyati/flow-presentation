// Libs
import React                from 'react';
import PropTypes            from 'prop-types';
import styled               from 'styled-components';

// Components
import FontTypes            from '../../constants/fontTypes';
import SkinTypes            from '../../constants/skinTypes';
import HighlightTypes       from '../../constants/highlightColorTypes';
import BookmarkFilled       from '../../assets/images/icons/bookmark-red-fill.svg';
import AnnotationFilled     from '../../assets/images/icons/annotation-purple.svg';
import PauseLightPurple     from '../../assets/images/icons/pause-lightpurple-cursor.png';
import PausePurple           from '../../assets/images/icons/pause-purple-cursor.png';

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
                hasAnnotation={this.props.word.annotations && Object.keys(this.props.word.annotations).length != 0}
                inFixationWindow={this.props.inFixationWindow}
                showAnnotations={this.props.showAnnotations}
            >
                <AnnotationIcon
                    src={AnnotationFilled}
                    hasAnnotation={this.props.word.annotations && Object.keys(this.props.word.annotations).length != 0}
                    inFixationWindow={this.props.inFixationWindow}
                    showAnnotations={this.props.showAnnotations}
                    cruiseControlHaltIsActive={this.props.cruiseControlHaltIsActive}
                    customCursor={this.props.skin == SkinTypes.DARK ?
                            `url(${PauseLightPurple}), auto`
                        :
                            `url(${PausePurple}), auto`} />
                <Text
                    skin={this.props.skin}
                    italic        ={this.props.word.italic}
                    bold          ={this.props.word.bold}
                    highlight ={this.props.word.highlight}
                    hasBookmark={this.props.word.hasBookmark}
                    hasAnnotation={this.props.word.annotations && Object.keys(this.props.word.annotations).length != 0}
                    inFixationWindow={this.props.inFixationWindow}
                    fontFamily    ={this.props.fontFamily}
                    showAnnotations={this.props.showAnnotations}
                    cruiseControlHaltIsActive={this.props.cruiseControlHaltIsActive}
                    customCursor={this.props.skin == SkinTypes.DARK ?
                            `url(${PauseLightPurple}), auto`
                        :
                            `url(${PausePurple}), auto`}
                    onClick       ={this.props.skipToWord.bind({}, this.props.word)}>
                    {`${this.props.word.text} `}
                </Text>
                <BookmarkIcon
                    src={BookmarkFilled}
                    hasBookmark={this.props.word.hasBookmark}
                    inFixationWindow={this.props.inFixationWindow}
                    showAnnotations={this.props.showAnnotations}
                    cruiseControlHaltIsActive={this.props.cruiseControlHaltIsActive}
                    customCursor={this.props.skin == SkinTypes.DARK ?
                            `url(${PauseLightPurple}), auto`
                        :
                            `url(${PausePurple}), auto`} />
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
    word               : PropTypes.object.isRequired,
    skipToWord         : PropTypes.func.isRequired,
    fontFamily         : PropTypes.object.isRequired,
    inFixationWindow   : PropTypes.bool.isRequired,
    skin               : PropTypes.string.isRequired,
    showAnnotations: PropTypes.bool.isRequired,
    cruiseControlHaltIsActive: PropTypes.bool.isRequired
};

// ============= Styled Components ==============

const TextContainer = styled.span`
    display: inline-flex;
    flex-direction: column;
    margin: 0;
    margin-top: ${props => props.showAnnotations && props.hasBookmark && !props.hasAnnotation && props.inFixationWindow ? "50px" : "0px"};
    padding: 0;
`;

const Text = styled.span`
    background-color: ${props => props => props.showAnnotations && props.highlight.active ?
            props.theme[props.highlight.color]
        :
            "transparent"};
    border-bottom-width: ${props =>  props.showAnnotations && !props.inFixationWindow && (props.hasBookmark || props.hasAnnotation) ? "3px" : "0px"};
    border-bottom-color: transparent;
    border-bottom-style: solid;
    border-image: ${props => props.showAnnotations && props.hasBookmark && props.hasAnnotation ?
            "linear-gradient(to right, #d3224f 0%, #65266d 100%)"
        :
            props.hasBookmark ?
                    "linear-gradient(to right, #d3224f 0%, #d3224f 100%)"
                :
                    props.hasAnnotation ?
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
    color: ${props => props.showAnnotations && props.highlight.active && props.skin == SkinTypes.DARK ? props.theme.white : "inherit"};
    margin     : 0;
    cursor     : ${props => props.cruiseControlHaltIsActive ? props.customCursor: "pointer"};
    display    : inline-block;
    white-space: pre;
    user-select: none;
    transition        : all 0.2s;

    &:hover {
        color: ${props => !props.cruiseControlHaltIsActive ?
                    props.skin == SkinTypes.LIGHT ?
                            props.highlight.color == HighlightTypes.PURPLE ?
                                props.theme.yellow
                            :
                                props.highlight.color == HighlightTypes.RED ?
                                    props.theme.green
                                :
                                    props.theme.purple
                        :
                            props.highlight.color == HighlightTypes.PURPLE ?
                                props.theme.yellow
                            :
                                props.highlight.color == HighlightTypes.RED ?
                                    props.theme.green
                                :
                                    props.theme.lightPurple
                :
                    "inherit"};
        transition        : all 0.2s;
    }
`;

const BookmarkIcon = styled.img`
    display: ${props => props.showAnnotations && props.hasBookmark && props.inFixationWindow ? "static" : "none"};
    position: relative;
    left: -8px;
    top: 5px;
    height: 50px;
    margin: 0;
    padding: 0;
    cursor: ${props => props.cruiseControlHaltIsActive ? props.customCursor: "pointer"};
    animation: .2s fadeIn;
`;

const AnnotationIcon = styled.img`
    display: ${props => props.showAnnotations && props.hasAnnotation && props.inFixationWindow ? "static" : "none"};
    position: relative;
    left: -8px;
    bottom: 5px;
    height: 50px;
    margin: 0;
    padding: 0;
    opacity: 0.3;
    cursor: ${props => props.cruiseControlHaltIsActive ? props.customCursor: "pointer"};
    animation: .2s fadeIn;
    transition        : all 0.2s;

    &:hover {
        opacity: 1;
        transition        : all 0.2s;
    }
`;
