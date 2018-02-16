// Libs
import React                    from 'react';
import PropTypes                from 'prop-types';
import styled                   from 'styled-components';
import ReactHintFactory         from 'react-hint';

// Components
import BackButton               from './BackButton';
import HandTypes                from '../../constants/handTypes';
import SkinTypes                from '../../constants/skinTypes';
import FeatureTypes             from '../../constants/featureTypes';
import AttachmentTypes             from '../../constants/attachmentOperationTypes';

import FlowIconColor            from '../../assets/images/icons/flow-icon-color.svg';
import FlowIconWhite            from '../../assets/images/icons/flow-icon-white.svg';
import BookmarkWhite            from '../../assets/images/icons/bookmark-white.svg';
import BookmarkColor            from '../../assets/images/icons/bookmark-red.svg';
import AttachmentWhite          from '../../assets/images/icons/attachment-white.svg';
import AttachmentColor          from '../../assets/images/icons/attachment-purple.svg';
import HighlightWhite           from '../../assets/images/icons/highlight-white.svg';
import HighlightColor           from '../../assets/images/icons/highlight-green.svg';
import WriteIcon                from '../../assets/images/icons/write-purple.svg';
import ImageIcon                from '../../assets/images/icons/picture-purple.svg';
import RecordIcon               from '../../assets/images/icons/microphone-purple.svg';
import DrawIcon                 from '../../assets/images/icons/draw-purple.svg';
import BackPurple               from '../../assets/images/icons/back-purple.svg';

/**
 * The FeatureMenu component is a component used to
 *
 * It consists of a menu element with an
 * unordered list inside, and also a button to toggle the actual menu.
 * It's fixed to the bottom-right of the screen, and each of the items are
 * positioned absolutely inside the parent menu tag. The default set up above is
 * 5 menu items. Because all the transforms and such are calculated wrt
 * this number, you'll need to edit it accordingly depending on how many items
 ``* you decide to put in the markup.
 */
export default class FeatureMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menuIsOpen: false,
            activeFeature: null,
            features: {
                bookmark: {
                    name: FeatureTypes.BOOKMARK,
                    icon: {
                        color: BookmarkColor,
                        white: BookmarkWhite
                    },
                    description: "Bookmark Location",
                    color: {white: "red", cream: "red", night: "red"},
                    isActive: false,
                    cssTranslate: {
                        inactiveTransitionDelay: 0,
                        activeTransitionDelay: 0,
                        transition: ""
                    }
                },
                attachment: {
                    name: FeatureTypes.ATTACHMENT,
                    icon: {
                        color: AttachmentColor,
                        white: AttachmentWhite
                    },
                    description: "Create Attachment",
                    color: {white: "purple", cream: "purple", night: "purple"},
                    isActive: false,
                    cssTranslate: {
                        inactiveTransitionDelay: 0,
                        activeTransitionDelay: 0,
                        transition: ""
                    },
                    operations: {
                        write: {
                                name: AttachmentTypes.WRITE,
                                icon: {color: WriteIcon},
                                description: "Write Note",
                                color: {white: "lightGray", cream: "lightGray", night: "darkGray"},
                                cssTranslate: {
                                    inactiveTransitionDelay: 0,
                                    activeTransitionDelay: 0,
                                    transition: ""
                                },
                                func: this.props.performWriteOperation
                            },
                        image: {
                                name: AttachmentTypes.IMAGE,
                                icon: {color: ImageIcon},
                                description: "Attach Image",
                                color: {white: "lightGray", cream: "lightGray", night: "darkGray"},
                                cssTranslate: {
                                    inactiveTransitionDelay: 0,
                                    activeTransitionDelay: 0,
                                    transition: ""
                                },
                                func: this.props.performImageOperation
                            },
                        record: {
                                name: AttachmentTypes.RECORD,
                                icon: {color: RecordIcon},
                                description: "Record Voicenote",
                                color:{white: "lightGray", cream: "lightGray", night: "darkGray"},
                                cssTranslate: {
                                    inactiveTransitionDelay: 0,
                                    activeTransitionDelay: 0,
                                    transition: ""
                                },
                                func: this.props.performRecordOperation
                            },
                        draw: {
                                name: AttachmentTypes.DRAW,
                                icon: {color: DrawIcon},
                                description: "Draw Sketch",
                                color: {white: "lightGray", cream: "lightGray", night: "darkGray"},
                                cssTranslate: {
                                    inactiveTransitionDelay: 0,
                                    activeTransitionDelay: 0,
                                    transition: ""
                                },
                                func: this.props.performDrawOperation
                            },
                        cancel: {
                                name: "back",
                                icon: {color: BackPurple},
                                description: "Back",
                                color: {white: "black", cream: "black", night: "black"},
                                cssTranslate: {
                                    inactiveTransitionDelay: 0,
                                    activeTransitionDelay: 0,
                                    transition: ""
                                },
                                func: this.handleAttachmentBack
                            }
                    }
                },
                highlight: {
                    name: FeatureTypes.HIGHLIGHT,
                    icon: {
                        color: HighlightColor,
                        white: HighlightWhite
                    },
                    description: "Highlight Phrase",
                    color: {white: "green", cream: "green", night: "green"},
                    isActive: false,
                    cssTranslate: {
                        inactiveTransitionDelay: 0,
                        activeTransitionDelay: 0,
                        transition: ""
                    }
                }
            }
        }
    }

    componentWillMount() {
        //console.log("-----FeatureMenu");
        Object.keys(this.state.features).forEach(this.calcTranslate);
        Object.keys(this.state.features.attachment.operations).forEach(this.calcTranslate);
    }

    render() {
        return (
            <Menu
                hand={this.props.hand}
                menuIsOpen={this.state.menuIsOpen}>
                <ReactHint
                key={"tooltip"}
                position={this.props.hand == HandTypes.RIGHT ? "left" : "right"}
                attribute="data-custom"
                events={{hover: true}}
                onRenderContent={this.renderTooltip} />
                <MenuToggle
                    skin={this.props.skin}
                    menuIsOpen={this.state.menuIsOpen}
                    color={
                        this.state.activeFeature == null ?
                            {white: "lightGray", cream: "lightGray", night: "darkGray"}
                        :
                            this.state.features[this.state.activeFeature].color}
                    onClick={this.state.activeFeature == FeatureTypes.BOOKMARK ?
                                    this.props.toggleWordBookmark
                                :
                                    this.state.activeFeature == FeatureTypes.HIGHLIGHT ?
                                        this.handleNullClick
                                    :
                                        this.toggleMenu}>
                    <ToggleIcon
                        icon={
                            this.state.activeFeature == null ?
                                this.state.menuIsOpen ?
                                    `url(${FlowIconColor})`
                                :
                                    `url(${FlowIconWhite})`
                            :
                                `url(${this.state.features[this.state.activeFeature].icon.white})`} />
                </MenuToggle>
                <MenuItems>
                    {Object.values(this.state.activeFeature == FeatureTypes.ATTACHMENT ? this.state.features.attachment.operations : this.state.features).map((feature, index) => {
                      return (
                          <OuterMenuItem
                              key={index}
                              cssTranslate={feature.cssTranslate}
                              menuIsOpen={this.state.menuIsOpen}
                              onClick={this.state.activeFeature != FeatureTypes.ATTACHMENT ? this.activateFeature.bind({}, feature.name) : feature.func}
                              data-custom
                              data-custom-at={this.props.hand == HandTypes.RIGHT ? "left" : "right"}
                              data-description={feature.description}>
                              <InnerMenuItem
                                  activeFeature={this.state.activeFeature}
                                  color={feature.color}
                                  skin={this.props.skin}
                                  icon={`url(${feature.icon.color})`} />
                          </OuterMenuItem>
                      );
                  })}
              </MenuItems>
                <BackButton
                    activeFeature={this.state.activeFeature}
                    backFunction={this.deactivateFeature}/>
            </Menu>
        );
    }

    componentDidMount() {
        // console.log("+++++FeatureMenu");
    }

    // ========== Methods ===========

    toggleMenu = (e) => {
        e.stopPropagation();
        this.setState({
            menuIsOpen: !this.state.menuIsOpen
        });
    }

    calcTranslate = (value, index, arr) => {

        let translateInfo = {};
        let numItems = arr.length;
        let handMultiplier = this.props.hand == HandTypes.LEFT ? 1 : -1;

        let sweepDeg = 180,
            increment = sweepDeg/(numItems - 1),
            angle = increment,
            spreadRadius = 120,
            delayIncrement = 0.08,
            initialDelay = delayIncrement,
            nMinus1InitialDelay = (numItems - 2) * delayIncrement,
            finalDelay = (numItems - 1) * delayIncrement;

        switch (index) {
            case 0:
                translateInfo["inactiveTransitionDelay"] = `${finalDelay}s`;
                translateInfo["activeTransitionDelay"] = `${0}s`;
                translateInfo["transition"] = `translate(0px, ${-spreadRadius}px)`;
                break;

            case numItems - 1:
                translateInfo["inactiveTransitionDelay"] = `${0}s`;
                translateInfo["activeTransitionDelay"] = `${finalDelay}s`;
                translateInfo["transition"] = `translate(0px, ${spreadRadius}px)`;
                break;

            default:
                let i = 1;
                while (i != index) {
                    nMinus1InitialDelay -= delayIncrement;
                    initialDelay += delayIncrement;
                    angle += increment;
                    i += 1;
                }
                translateInfo["inactiveTransitionDelay"] = `${nMinus1InitialDelay}s`;
                translateInfo["activeTransitionDelay"] = `${initialDelay}s`;
                translateInfo["transition"] = `translate(${handMultiplier * Math.floor(spreadRadius * Math.sin(Math.PI/180*angle))}px, ${-Math.floor(spreadRadius * Math.cos(Math.PI/180*angle))}px)`;
        }

        let features = this.state.features;

        if (arr.length == 3) {
            features[value].cssTranslate = translateInfo;
        } else {
            features.attachment.operations[value].cssTranslate = translateInfo;
        }

        this.setState({
            features: features
        });

    }

    renderTooltip = (target, content) => {
        const {description} = target.dataset;

        return (
            <Tooltip>
                {description}
            </Tooltip>
        );
    }

    activateFeature = (feature, e) => {
        e.stopPropagation();

        let features = this.state.features;
        features[feature].isActive = true;

        switch (feature) {
            case FeatureTypes.BOOKMARK:
                break;
            case FeatureTypes.HIGHLIGHT:
                this.props.toggleHighlight();
                break;
            case FeatureTypes.ATTACHMENT:
                break;
        }

        if (feature == FeatureTypes.ATTACHMENT) {
            this.setState({
                activeFeature: feature,
                features: features,
                menuIsOpen : !this.state.menuIsOpen
            }, () => {
                this.setState({
                    menuIsOpen : !this.state.menuIsOpen
                });
            });
        } else {
            this.setState({
                menuIsOpen : !this.state.menuIsOpen
            }, () => {
                setTimeout(() => {
                    this.setState({
                        activeFeature: feature,
                        features: features
                    });
                }, 240);
            });
        }
    }

    deactivateFeature = (feature, e) => {
        e.stopPropagation();
        this.setState({
            activeFeature: null
        });

        switch (feature) {
            case FeatureTypes.BOOKMARK:
                break;
            case FeatureTypes.HIGHLIGHT:
                this.props.toggleHighlight();
                break;
            case FeatureTypes.ATTACHMENT:
                break;
        }
    }

    handleAttachmentBack = (e) => {
        this.deactivateFeature(FeatureTypes.ATTACHMENT, e);
        this.setState({
            menuIsOpen : !this.state.menuIsOpen
        });
    }

    handleNullClick = (e) => {
        e.stopPropagation();
    }
}

// ============= PropTypes ==============

FeatureMenu.propTypes = {
    hand                  : PropTypes.string.isRequired,
    toggleHighlight       : PropTypes.func.isRequired,
    toggleWordBookmark    : PropTypes.func.isRequired,
    performWriteOperation : PropTypes.func.isRequired,
    performImageOperation : PropTypes.func.isRequired,
    performRecordOperation: PropTypes.func.isRequired,
    performDrawOperation  : PropTypes.func.isRequired,
    skin               : PropTypes.string.isRequired
};

// ============= React Hint ==============

const ReactHint = ReactHintFactory(React);

// ============= Styled Components ==============

const Menu = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: ${props => props.hand == HandTypes.LEFT ? "30px" : "auto"};
    right: ${props => props.hand == HandTypes.RIGHT ? "30px" : "auto"};
    width: 60px;
    height: 60px;
    z-index: 1000;
    border-radius: 30px;
    transition: top 0.2s;

    @media (max-width: 480px) and (max-height: 480px) {
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }
`;

const MenuItems = styled.ul`
    display: block;
    list-style: none;
    position: absolute;
    z-index: 2;
    margin: 0;
    padding: 0;
`;

const OuterMenuItem = styled.li`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    opacity: ${props => props.menuIsOpen ? 1 : 0};
    transition: transform, opacity;
    transition-duration: 0.3s, 0.3s;
    transition-timing-function: ${props => props.menuIsOpen ? "cubic-bezier(0.35, 0.03, 0.47, 1.59)" : "cubic-bezier(0.35, -0.59, 0.47, 0.97)"};

    @media (max-width: 480px) and (max-height: 480px) {
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }

    /**
     * Transisition delays at the default state.
     */

    &:nth-child(1) {
        transition-delay: ${props => props.menuIsOpen ? props.cssTranslate.activeTransitionDelay : props.cssTranslate.inactiveTransitionDelay};
        transform: ${props => props.menuIsOpen ? props.cssTranslate.transition : "none"};

        @media (max-width: 480px) and (max-height: 480px) {
        }
    }

    &:nth-child(2) {
        transition-delay: ${props => props.menuIsOpen ? props.cssTranslate.activeTransitionDelay : props.cssTranslate.inactiveTransitionDelay};
        transform: ${props => props.menuIsOpen ? props.cssTranslate.transition : "none"};

        @media (max-width: 480px) and (max-height: 480px) {
        }
    }

    &:nth-child(3) {
        transition-delay: ${props => props.menuIsOpen ? props.cssTranslate.activeTransitionDelay : props.cssTranslate.inactiveTransitionDelay};
        transform: ${props => props.menuIsOpen ? props.cssTranslate.transition : "none"};

        @media (max-width: 480px) and (max-height: 480px) {
        }
    }

    &:nth-child(4) {
        transition-delay: ${props => props.menuIsOpen ? props.cssTranslate.activeTransitionDelay : props.cssTranslate.inactiveTransitionDelay};
        transform: ${props => props.menuIsOpen ? props.cssTranslate.transition : "none"};

        @media (max-width: 480px) and (max-height: 480px) {
        }
    }

    &:nth-child(5) {
        transition-delay: ${props => props.menuIsOpen ? props.cssTranslate.activeTransitionDelay : props.cssTranslate.inactiveTransitionDelay};
        transform: ${props => props.menuIsOpen ? props.cssTranslate.transition : "none"};

        @media (max-width: 480px) and (max-height: 480px) {
        }
    }
`;

const InnerMenuItem = styled.button`
    display: block;
    margin: 0;
    padding: 0;
    width: 60px;
    height: 60px;
    background: ${props => props.activeFeature == FeatureTypes.ATTACHMENT ?
            props => props.skin == SkinTypes.WHITE ?
                        props.theme[props.color.white]
                    :
                        props.skin == SkinTypes.CREAM ?
                                props.theme[props.color.cream]
                            :
                                props.theme[props.color.night]
        :
            props => props.skin == SkinTypes.NIGHT ?
                        props.theme.darkGray
                    :
                        props.theme.lightGray};
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0 4px 8px -2px rgba(0,0,0,.5), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    transition: box-shadow 0.15s;
    background-image: ${props => props.icon};
    background-position: 50%;
    background-size: 35px 35px;
    background-repeat: no-repeat;

    @media (max-width: 480px) and (max-height: 480px) {
        border-radius: 15px;
    }

    &:hover {
        box-shadow: 0 8px 16px -4px rgba(0,0,0,.5), 0 6px 2px -4px rgba(0,0,0,.2), 0 2px 10px 0 rgba(0,0,0,.12);
    }
`;

const MenuToggle = styled.button`
    display: block;
    position: absolute;
    z-index: 100;
    margin: 0;
    padding: 0;
    width: 60px;
    height: 60px;
    background-color: ${props => props.skin == SkinTypes.WHITE ?
                            props.theme[props.color.white]
                        :
                            props.skin == SkinTypes.CREAM ?
                                    props.theme[props.color.cream]
                                :
                                    props.theme[props.color.night]};
    box-shadow: 0 4px 8px -2px rgba(0,0,0,.5), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    border-radius: 30px;
    transition: box-shadow 0.15s, background-color 0.3s;
    /* reset some browser defaults */
    cursor: pointer;
    border: none;
    appearance: none;

    &:hover {
        box-shadow: 0 8px 16px -4px rgba(0,0,0,.5), 0 6px 2px -4px rgba(0,0,0,.2), 0 2px 10px 0 rgba(0,0,0,.12);
    }

    @media (max-width: 480px) and (max-height: 480px) {
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }
`;

const ToggleIcon = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    background-image: ${props => props.icon};
    background-position: 50%;
    background-size: 35px 35px;
    background-repeat: no-repeat;
    transition: all 0.15s;
`;

const Tooltip = styled.h2`
    text-align: center;
    padding: 10px 15px;
    background: ${props => props.skin == SkinTypes.NIGHT ?
                props.theme.lightGray
            :
                props.theme.darkGray};
    border-radius: 18px;
    color: ${props => props.skin == SkinTypes.NIGHT ?
                props.theme.black
            :
                props.theme.white};
    font-size: 12px;
    font-weight: 200;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.4), 0 2px 10px 0 rgba(0,0,0,.12);
    transition: all 0.15s;
    z-index: 3;
`;
