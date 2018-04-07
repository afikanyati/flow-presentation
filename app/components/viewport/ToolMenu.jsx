// Libs
import React                from 'react';
import PropTypes            from 'prop-types';
import styled               from 'styled-components';
import ReactHintFactory     from 'react-hint';

// Components
import BackButton           from './BackButton';
import HandTypes            from '../../constants/handTypes';
import SkinTypes            from '../../constants/skinTypes';
import ToolTypes            from '../../constants/toolTypes';
import AnnotationTypes      from '../../constants/annotationOperationTypes';
import HighlightTypes       from '../../constants/highlightColorTypes';

// Icons
import FlowIconColor        from '../../assets/images/icons/flow-icon-color.svg';
import FlowIconWhite        from '../../assets/images/icons/flow-icon-white.svg';
import BookmarkWhite        from '../../assets/images/icons/bookmark-white.svg';
import BookmarkColor        from '../../assets/images/icons/bookmark-red.svg';
import AnnotationWhite      from '../../assets/images/icons/annotation-white.svg';
import AnnotationColor      from '../../assets/images/icons/annotation-purple.svg';
import HighlightWhite       from '../../assets/images/icons/highlight-white.svg';
import HighlightRed         from '../../assets/images/icons/highlight-red.svg'
import HighlightPurple      from '../../assets/images/icons/highlight-purple.svg'
import HighlightBlue        from '../../assets/images/icons/highlight-blue.svg'
import HighlightGreen       from '../../assets/images/icons/highlight-green.svg'
import HighlightYellow      from '../../assets/images/icons/highlight-yellow.svg';
import WriteIcon            from '../../assets/images/icons/write-purple.svg';
import ImageIcon            from '../../assets/images/icons/picture-purple.svg';
import RecordIcon           from '../../assets/images/icons/microphone-purple.svg';
import DrawIcon             from '../../assets/images/icons/draw-purple.svg';
import BackPurple           from '../../assets/images/icons/back-purple.svg';
import BackWhite            from '../../assets/images/icons/back-white.svg';
import PauseLightPurple     from '../../assets/images/icons/pause-lightpurple-cursor.png';
import PausePurple           from '../../assets/images/icons/pause-purple-cursor.png';

/**
 * The ToolMenu component is a component used to
 *
 * It consists of a menu element with an
 * unordered list inside, and also a button to toggle the actual menu.
 * It's fixed to the bottom-right of the screen, and each of the items are
 * positioned absolutely inside the parent menu tag. The default set up above is
 * 5 menu items. Because all the transforms and such are calculated wrt
 * this number, you'll need to edit it accordingly depending on how many items
 ``* you decide to put in the markup.
 */
export default class ToolMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menuIsOpen: false,
            activeFeature: null,
            tools: {
                bookmark: {
                    name: ToolTypes.BOOKMARK,
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
                annotation: {
                    name: ToolTypes.ATTACHMENT,
                    icon: {
                        color: AnnotationColor,
                        white: AnnotationWhite
                    },
                    description: "Add Annotation",
                    color: {white: "purple", cream: "purple", night: "purple"},
                    isActive: false,
                    cssTranslate: {
                        inactiveTransitionDelay: 0,
                        activeTransitionDelay: 0,
                        transition: ""
                    },
                    operations: {
                        write: {
                                name: AnnotationTypes.WRITE,
                                icon: {color: WriteIcon},
                                description: "Write Note",
                                color: {white: "lightGray", cream: "lightGray", night: "black"},
                                cssTranslate: {
                                    inactiveTransitionDelay: 0,
                                    activeTransitionDelay: 0,
                                    transition: ""
                                },
                                func: this.props.performWriteOperation
                            },
                        image: {
                                name: AnnotationTypes.IMAGE,
                                icon: {color: ImageIcon},
                                description: "Attach Image",
                                color: {white: "lightGray", cream: "lightGray", night: "black"},
                                cssTranslate: {
                                    inactiveTransitionDelay: 0,
                                    activeTransitionDelay: 0,
                                    transition: ""
                                },
                                func: this.props.performImageOperation
                            },
                        record: {
                                name: AnnotationTypes.RECORD,
                                icon: {color: RecordIcon},
                                description: "Record Voicenote",
                                color:{white: "lightGray", cream: "lightGray", night: "black"},
                                cssTranslate: {
                                    inactiveTransitionDelay: 0,
                                    activeTransitionDelay: 0,
                                    transition: ""
                                },
                                func: this.props.performRecordOperation
                            },
                        draw: {
                                name: AnnotationTypes.DRAW,
                                icon: {color: DrawIcon},
                                description: "Draw Sketch",
                                color: {white: "lightGray", cream: "lightGray", night: "black"},
                                cssTranslate: {
                                    inactiveTransitionDelay: 0,
                                    activeTransitionDelay: 0,
                                    transition: ""
                                },
                                func: this.props.performDrawOperation
                            },
                        back: {
                                name: "back",
                                icon: {color: BackPurple},
                                description: "Back",
                                color: {white: "black", cream: "black", night: "black"},
                                cssTranslate: {
                                    inactiveTransitionDelay: 0,
                                    activeTransitionDelay: 0,
                                    transition: ""
                                },
                                func: this.handleBack.bind({}, ToolTypes.ATTACHMENT)
                            }
                    }
                },
                highlight: {
                    name: ToolTypes.HIGHLIGHT,
                    icon: {
                        color: HighlightGreen,
                        white: HighlightWhite
                    },
                    description: "Highlight Phrase",
                    color: {white: "green", cream: "green", night: "green"},
                    isActive: false,
                    cssTranslate: {
                        inactiveTransitionDelay: 0,
                        activeTransitionDelay: 0,
                        transition: ""
                    },
                    types: {
                        yellow: {
                            name: HighlightTypes.YELLOW,
                            icon: {color: HighlightYellow},
                            description: "Yellow",
                            color: {white: HighlightTypes.YELLOW, cream: HighlightTypes.YELLOW, night: HighlightTypes.YELLOW},
                            cssTranslate: {
                                inactiveTransitionDelay: 0,
                                activeTransitionDelay: 0,
                                transition: ""
                            },
                            func: this.props.handleHighlight.bind({}, HighlightTypes.YELLOW)
                        },
                        green: {
                                name: HighlightTypes.GREEN,
                                icon: {color: HighlightGreen},
                                description: "Green",
                                color: {white: HighlightTypes.GREEN, cream: HighlightTypes.GREEN, night: HighlightTypes.GREEN},
                                cssTranslate: {
                                    inactiveTransitionDelay: 0,
                                    activeTransitionDelay: 0,
                                    transition: ""
                                },
                                func: this.props.handleHighlight.bind({}, HighlightTypes.GREEN)
                            },
                        blue: {
                                name: HighlightTypes.BLUE,
                                icon: {color: HighlightBlue},
                                description: "Blue",
                                color:{white: HighlightTypes.BLUE, cream: HighlightTypes.BLUE, night: HighlightTypes.BLUE},
                                cssTranslate: {
                                    inactiveTransitionDelay: 0,
                                    activeTransitionDelay: 0,
                                    transition: ""
                                },
                                func: this.props.handleHighlight.bind({}, HighlightTypes.BLUE)
                            },
                        purple: {
                            name: HighlightTypes.PURPLE,
                            icon: {color: HighlightPurple},
                            description: "Purple",
                            color: {white: HighlightTypes.PURPLE, cream: HighlightTypes.PURPLE, night: HighlightTypes.PURPLE},
                            cssTranslate: {
                                inactiveTransitionDelay: 0,
                                activeTransitionDelay: 0,
                                transition: ""
                            },
                            func: this.props.handleHighlight.bind({}, HighlightTypes.PURPLE)
                        },
                        red: {
                                name: HighlightTypes.RED,
                                icon: {color: HighlightRed},
                                description: "Red",
                                color: {white: HighlightTypes.RED, cream: HighlightTypes.RED, night: HighlightTypes.RED},
                                cssTranslate: {
                                    inactiveTransitionDelay: 0,
                                    activeTransitionDelay: 0,
                                    transition: ""
                                },
                                func: this.props.handleHighlight.bind({}, HighlightTypes.RED)
                            },
                        back: {
                                name: "back",
                                icon: {color: BackWhite},
                                description: "Back",
                                color: {white: "black", cream: "black", night: "black"},
                                cssTranslate: {
                                    inactiveTransitionDelay: 0,
                                    activeTransitionDelay: 0,
                                    transition: ""
                                },
                                func: this.handleBack.bind({}, ToolTypes.HIGHLIGHT)
                            }
                    }
                }
            }
        }
    }

    componentWillMount() {
        //console.log("-----ToolMenu");
        Object.keys(this.state.tools).forEach(this.calcTranslate);
        Object.keys(this.state.tools.annotation.operations).forEach(this.calcTranslate);
        Object.keys(this.state.tools.highlight.types).forEach(this.calcTranslate);
    }

    render() {
        return (
            <Menu
                hand={this.props.hand}
                menuIsOpen={this.state.menuIsOpen}>
                {this.state.activeFeature == ToolTypes.HIGHLIGHT ?
                        null
                    :
                        <ReactHint
                        key={"tooltip"}
                        position={this.props.hand == HandTypes.RIGHT ? "left" : "right"}
                        attribute="data-custom"
                        events={{hover: true}}
                        onRenderContent={this.renderTooltip} />
                }
                <MenuToggle
                    skin={this.props.skin}
                    menuIsOpen={this.state.menuIsOpen}
                    activeFeature={this.state.activeFeature}
                    highlightColor={this.props.highlightColor}
                    highlightIsActive={this.props.highlightIsActive}
                    currentWordHasBookmark={this.props.fixationWindow[0] ?
                                                this.props.fixationWindow[0].hasBookmark
                                            :
                                                false}
                    color={
                        this.state.activeFeature == null ?
                            {white: "lightGray", cream: "lightGray", night: "black"}
                        :
                            this.state.tools[this.state.activeFeature].color}
                    cruiseControlHaltIsActive={this.props.cruiseControlHaltIsActive}
                    customCursor={this.props.skin == SkinTypes.DARK ?
                            `url(${PauseLightPurple}), auto`
                        :
                            `url(${PausePurple}), auto`}
                    onClick={this.state.activeFeature == ToolTypes.BOOKMARK ?
                                    this.props.toggleWordBookmark
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
                                `url(${this.state.tools[this.state.activeFeature].icon.white})`} />
                </MenuToggle>
                <MenuItems>
                    {Object.values(this.state.activeFeature == ToolTypes.ATTACHMENT ?
                                        this.state.tools.annotation.operations
                                    :
                                        this.state.activeFeature == ToolTypes.HIGHLIGHT ?
                                            this.state.tools.highlight.types
                                        :
                                            this.state.tools).map((tool, index) => {
                      return (
                          <OuterMenuItem
                              key={index}
                              cssTranslate={tool.cssTranslate}
                              menuIsOpen={this.state.menuIsOpen}
                              onClick={this.state.activeFeature == ToolTypes.ATTACHMENT || this.state.activeFeature == ToolTypes.HIGHLIGHT ? tool.func : this.activateFeature.bind({}, tool.name)}
                              data-custom
                              data-custom-at={this.props.hand == HandTypes.RIGHT ? "left" : "right"}
                              data-description={tool.description}>
                              <InnerMenuItem
                                  activeFeature={this.state.activeFeature}
                                  color={tool.color}
                                  skin={this.props.skin}
                                  icon={`url(${tool.icon.color})`}
                                  cruiseControlHaltIsActive={this.props.cruiseControlHaltIsActive}
                                  customCursor={this.props.skin == SkinTypes.DARK ?
                                          PauseLightPurple
                                      :
                                          PausePurple} />
                          </OuterMenuItem>
                      );
                  })}
              </MenuItems>
                <BackButton
                    skin={this.props.skin}
                    activeFeature={this.state.activeFeature}
                    backFunction={this.handleBack}/>
            </Menu>
        );
    }

    componentDidMount() {
        // console.log("+++++ToolMenu");
    }

    // ========== Methods ===========

    toggleMenu = (e) => {
        e.stopPropagation();

        if (this.state.activeFeature == ToolTypes.HIGHLIGHT) {
            this.setState({
                menuIsOpen: !this.state.menuIsOpen
            }, () => {
                this.props.deactivateHighlight();
            });
        } else {
            this.setState({
                menuIsOpen: !this.state.menuIsOpen
            });
        }
    }

    calcTranslate = (value, index, arr) => {

        let translateInfo = {};
        let numItems = arr.length;
        let handMultiplier = this.props.hand == HandTypes.LEFT ? 1 : -1;

        let sweepDeg = 180,
            increment = sweepDeg/(numItems - 1),
            angle = increment,
            spreadRadius = arr.length == 6 ?
                window.innerWidth > 600 ?
                    120
                :
                    100
            :
                arr.length == 5 ?
                    window.innerWidth > 600 ?
                        100
                    :
                        80
                :
                    window.innerWidth > 600 ?
                        80
                    :
                        60,
            delayIncrement = arr.length == 6 ? 0.02 : 0.025,
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

        let tools = this.state.tools;

        if (arr.length == 3) {
            tools[value].cssTranslate = translateInfo;
        } else if (arr.length == 5) {
            tools.annotation.operations[value].cssTranslate = translateInfo;
        } else if (arr.length == 6) {
            tools.highlight.types[value].cssTranslate = translateInfo;
        }

        this.setState({
            tools: tools
        });

    }

    renderTooltip = (target, content) => {
        const {description} = target.dataset;

        return (
            <Tooltip
                skin={this.props.skin}>
                {description}
            </Tooltip>
        );
    }

    activateFeature = (tool, e) => {
        e.stopPropagation();

        let tools = this.state.tools;
        tools[tool].isActive = true;

        // switch (tool) {
        //     case ToolTypes.BOOKMARK:
        //         break;
        //     case ToolTypes.HIGHLIGHT:
        //         break;
        //     case ToolTypes.ATTACHMENT:
        //         break;
        // }

        if (tool == ToolTypes.ATTACHMENT || tool == ToolTypes.HIGHLIGHT) {
            this.setState({
                activeFeature: tool,
                tools: tools,
                menuIsOpen : false
            }, () => {
                setTimeout(() => {
                    this.setState({
                        menuIsOpen : true
                    });
                }, 50);
            });
        } else {
            this.setState({
                menuIsOpen : false
            }, () => {
                setTimeout(() => {
                    this.setState({
                        activeFeature: tool,
                        tools: tools
                    });
                }, 125);
            });
        }
    }

    deactivateFeature = (tool, e) => {
        let tools = this.state.tools;
        tools[tool].isActive = false;

        this.setState({
            menuIsOpen: true,
            activeFeature: null,
            tools: tools
        });

        switch (tool) {
            case ToolTypes.BOOKMARK:
                break;
            case ToolTypes.HIGHLIGHT:
                this.props.deactivateHighlight();
                break;
            case ToolTypes.ATTACHMENT:
                break;
        }
    }

    handleBack = (tool, e) => {
        this.deactivateFeature(tool);
    }
}

// ============= PropTypes ==============

ToolMenu.propTypes = {
    hand                  : PropTypes.string.isRequired,
    handleHighlight       : PropTypes.func.isRequired,
    toggleWordBookmark    : PropTypes.func.isRequired,
    highlightIsActive     : PropTypes.bool.isRequired,
    deactivateHighlight: PropTypes.func.isRequired,
    performWriteOperation : PropTypes.func.isRequired,
    performImageOperation : PropTypes.func.isRequired,
    performRecordOperation: PropTypes.func.isRequired,
    performDrawOperation  : PropTypes.func.isRequired,
    skin                  : PropTypes.string.isRequired,
    cruiseControlHaltIsActive: PropTypes.bool.isRequired,
    fixationWindow: PropTypes.array.isRequired
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
    z-index: 1;
    border-radius: 30px;
    transition: top 0.2s;

    @media (max-width: 600px) {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        left: ${props => props.hand == HandTypes.LEFT ? "20px" : "auto"};
        right: ${props => props.hand == HandTypes.RIGHT ? "20px" : "auto"};
    }
`;

const MenuItems = styled.ul`
    display: block;
    list-style: none;
    position: absolute;
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

    @media (max-width: 600px) {
        width: 50px;
        height: 50px;
        border-radius: 25px;
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

    &:nth-child(6) {
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
    background: ${props => props.activeFeature == ToolTypes.ATTACHMENT || props.activeFeature == ToolTypes.HIGHLIGHT ?
            props => props.skin == SkinTypes.LIGHT ?
                        props.theme[props.color.white]
                    :
                        props.skin == SkinTypes.CREAM ?
                                props.theme[props.color.cream]
                            :
                                props.theme[props.color.night]
        :
            props => props.skin == SkinTypes.DARK ?
                        props.theme.black
                    :
                        props.theme.lightGray};
    border-radius: 30px;
    cursor: ${props => props.cruiseControlHaltIsActive ? props.customCursor: "pointer"};
    box-shadow: ${props => props.skin == SkinTypes.DARK ?
            "0 4px 8px -2px rgba(181,210,236,.25), 0 3px 1px -2px rgba(181,210,236,.1), 0 1px 5px 0 rgba(181,210,236,.06)"
        :
            "0 4px 8px -2px rgba(0,0,0,.5), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)"
    };
    transition: box-shadow 0.15s;
    background-image: ${props => props.icon};
    background-position: 50%;
    background-size: 35px 35px;
    background-repeat: no-repeat;

    @media (max-width: 600px) {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background-size: 29px 29px;
    }

    &:hover {
        box-shadow: ${props => props.skin == SkinTypes.DARK ?
                "0 8px 16px -4px rgba(181,210,236,.25), 0 6px 2px -4px rgba(181,210,236,.1), 0 2px 10px 0 rgba(181,210,236,.06)"
            :
                "0 8px 16px -4px rgba(0,0,0,.5), 0 6px 2px -4px rgba(0,0,0,.2), 0 2px 10px 0 rgba(0,0,0,.12)"
        };
    }
`;

const MenuToggle = styled.button`
    display: block;
    position: absolute;
    z-index: 1;
    margin: 0;
    padding: 0;
    width: 60px;
    height: 60px;
    background-color: ${props => props.skin == SkinTypes.LIGHT ?
                            props.activeFeature == ToolTypes.HIGHLIGHT ?
                                props.highlightIsActive ?
                                    props.theme[props.highlightColor]
                                :
                                    props.theme.lightGray
                            :
                                props.activeFeature == ToolTypes.BOOKMARK ?
                                    props.currentWordHasBookmark ?
                                        props.theme[props.color.white]
                                    :
                                        props.theme.lightGray
                                :
                                    props.theme[props.color.white]
                        :
                            props.skin == SkinTypes.CREAM ?
                                props.activeFeature == ToolTypes.HIGHLIGHT ?
                                    props.highlightIsActive ?
                                        props.theme[props.highlightColor]
                                    :
                                        props.theme.lightGray
                                :
                                    props.activeFeature == ToolTypes.BOOKMARK ?
                                        props.currentWordHasBookmark ?
                                            props.theme[props.color.cream]
                                        :
                                            props.theme.lightGray
                                    :
                                        props.theme[props.color.cream]
                            :
                                props.activeFeature == ToolTypes.HIGHLIGHT ?
                                    props.highlightIsActive ?
                                        props.theme[props.highlightColor]
                                    :
                                        props.theme.black
                                :
                                    props.activeFeature == ToolTypes.BOOKMARK ?
                                        props.currentWordHasBookmark ?
                                            props.theme[props.color.night]
                                        :
                                            props.theme.black
                                    :
                                        props.theme[props.color.night]
    };
    box-shadow: ${props => props.skin == SkinTypes.DARK ?
            "0 4px 8px -2px rgba(181,210,236,.25), 0 3px 1px -2px rgba(181,210,236,.1), 0 1px 5px 0 rgba(181,210,236,.06)"
        :
            "0 4px 8px -2px rgba(0,0,0,.5), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)"
    };
    border-radius: 30px;
    transition: box-shadow 0.15s, background-color 0.3s;
    /* reset some browser defaults */
    cursor: ${props => props.cruiseControlHaltIsActive ? props.customCursor: "pointer"};
    border: none;
    appearance: none;

    @media (max-width: 600px) {
        width: 50px;
        height: 50px;
        border-radius: 25px;
    }

    &:hover {
        box-shadow: ${props => props.skin == SkinTypes.DARK ?
                "0 8px 16px -4px rgba(181,210,236,.25), 0 6px 2px -4px rgba(181,210,236,.1), 0 2px 10px 0 rgba(181,210,236,.06)"
            :
                "0 8px 16px -4px rgba(0,0,0,.5), 0 6px 2px -4px rgba(0,0,0,.2), 0 2px 10px 0 rgba(0,0,0,.12)"
        };
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

    @media (max-width: 600px) {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background-size: 29px 29px;
    }
`;

const Tooltip = styled.h2`
    text-align: center;
    padding: 10px 15px;
    background: ${props => props.skin == SkinTypes.DARK ?
                props.theme.gray
            :
                props.theme.black};
    border-radius: 18px;
    color: ${props => props.skin == SkinTypes.DARK ?
                props.theme.black
            :
                props.theme.white};
    font-size: 12px;
    font-weight: 200;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.4), 0 2px 10px 0 rgba(0,0,0,.12);
    transition: all 0.15s;
    z-index: 1;
`;

const highlight = {
    red: HighlightRed,
    purple: HighlightPurple,
    blue: HighlightBlue,
    green: HighlightGreen,
    yellow: HighlightYellow
};
