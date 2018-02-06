// Libs
import React                    from 'react';
import PropTypes                from 'prop-types';
import styled                   from 'styled-components';
import ReactHintFactory         from 'react-hint';

// Components
import FlowIconColor            from '../../assets/images/icons/flow-icon-color.svg';
import FlowIconWhite            from '../../assets/images/icons/flow-icon-white.svg';
import BookmarkWhite            from '../../assets/images/icons/bookmark-white.svg';
import BookmarkColor            from '../../assets/images/icons/bookmark-red.svg';
import AttachmentWhite            from '../../assets/images/icons/attachment-white.svg';
import AttachmentColor            from '../../assets/images/icons/attachment-purple.svg';
import DefinitionsWhite            from '../../assets/images/icons/definitions-white.svg';
import DefinitionsColor            from '../../assets/images/icons/definitions-blue.svg';
import HighlightWhite            from '../../assets/images/icons/highlight-white.svg';
import HighlightColor            from '../../assets/images/icons/highlight-green.svg';
import MapWhite            from '../../assets/images/icons/map-white.svg';
import MapColor            from '../../assets/images/icons/map-yellow.svg';
import PlusColor            from '../../assets/images/icons/plus-red.svg';
import MinusColor            from '../../assets/images/icons/minus-red.svg';
import CancelWhite            from '../../assets/images/icons/cancel-white.svg';

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
                    name: "bookmark",
                    icon: {
                        inactive: BookmarkColor,
                        active: BookmarkWhite
                    },
                    description: "Bookmark Location",
                    color: "red",
                    isActive: false,
                    cssTranslate: {
                        inactiveTransitionDelay: 0,
                        activeTransitionDelay: 0,
                        transition: ""
                    },
                    functions: [
                        {
                            icon: PlusColor
                        }
                    ]
                },
                attachment: {
                    name: "attachment",
                    icon: {
                        inactive: AttachmentColor,
                        active: AttachmentWhite
                    },
                    description: "Create Attachment",
                    color: "purple",
                    isActive: false,
                    cssTranslate: {
                        inactiveTransitionDelay: 0,
                        activeTransitionDelay: 0,
                        transition: ""
                    }
                },
                definitions: {
                    name: "definitions",
                    icon: {
                        inactive: DefinitionsColor,
                        active: DefinitionsWhite
                    },
                    description: "Enable Definitions",
                    color: "blue",
                    isActive: false,
                    cssTranslate: {
                        inactiveTransitionDelay: 0,
                        activeTransitionDelay: 0,
                        transition: ""
                    }
                },
                highlight: {
                    name: "highlight",
                    icon: {
                        inactive: HighlightColor,
                        active: HighlightWhite
                    },
                    description: "Highlight Phrase",
                    color: "green",
                    isActive: false,
                    cssTranslate: {
                        inactiveTransitionDelay: 0,
                        activeTransitionDelay: 0,
                        transition: ""
                    }
                },
                map: {
                    name: "map",
                    icon: {
                        inactive: MapColor,
                        active: MapWhite
                    },
                    description: "Open Thought Map",
                    color: "yellow",
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
    }

    render() {
        return (
            <Menu
                menuIsOpen={this.state.menuIsOpen}>
                <ReactHint
                key={"tooltip"}
                persist
                position="right"
                attribute="data-custom"
                events={{hover: true}}
                onRenderContent={this.renderTooltip} />
                <MenuToggle
                    menuIsOpen={this.state.menuIsOpen}
                    color={
                        this.state.activeFeature == null ?
                            "lightGray"
                        :
                            this.state.features[this.state.activeFeature].color}
                    onClick={this.toggleMenu}>
                    <ToggleIcon
                        icon={
                            this.state.activeFeature == null ?
                                this.state.menuIsOpen ?
                                    `url(${FlowIconColor})`
                                :
                                    `url(${FlowIconWhite})`
                            :
                                `url(${this.state.features[this.state.activeFeature].icon.active})`} />
                </MenuToggle>
                <MenuItemContainer>
                    {Object.values(this.state.features).map((feature, index) => {
                      return (
                          <MenuItem
                              key={index}
                              cssTranslate={feature.cssTranslate}
                              color={feature.color}
                              menuIsOpen={this.state.menuIsOpen}
                              isActive={feature.isActive}
                              onClick={this.activateFeature.bind({}, feature.name)}
                              data-custom
            				data-custom-at="right"
            				data-description={feature.description}>
                              <MenuItemLink>
                                  <img src={feature.icon.inactive} />
                              </MenuItemLink>
                          </MenuItem>
                      );
                  })}
                </MenuItemContainer>
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

    calcTranslate = (value, index) => {
        let translateInfo = {};
        let numItems = Object.keys(this.state.features).length;

        let sweepDeg = 180,
            increment = sweepDeg/(numItems - 1),
            angle = increment,
            spreadRadius = 120,
            delayIncrement = 0.03,
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
                translateInfo["transition"] = `translate(${Math.floor(spreadRadius * Math.sin(Math.PI/180*angle))}px, ${-Math.floor(spreadRadius * Math.cos(Math.PI/180*angle))}px)`;
        }
        let features = this.state.features;
        features[value].cssTranslate = translateInfo;

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
        this.setState({
            activeFeature: feature,
            features: features
        });
    }
}

// ============= PropTypes ==============

FeatureMenu.propTypes = {
};

// ============= React Hint ==============

const ReactHint = ReactHintFactory(React);

// ============= Styled Components ==============

const Menu = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 30px;
    width: 60px;
    height: 60px;
    z-index: 1000;
    border-radius: 30px;

    @media (max-width: 480px) and (max-height: 480px) {
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }
`;

const MenuItemContainer = styled.ul`
    display: block;
    list-style: none;
    position: absolute;
    z-index: 2;
    margin: 0;
    padding: 0;
`;

const MenuItem = styled.li`
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

const MenuItemLink = styled.button`
    display: block;
    width: 100%;
    height: 100%;
    background: ${props => props.isActive ? props.theme[props.color] : props.theme.lightGray};
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0 4px 8px -2px rgba(0,0,0,.5), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    transition: box-shadow 0.15s;

    @media (max-width: 480px) and (max-height: 480px) {
        border-radius: 15px;
    }

    & img {
        width: 35px;
        max-width: 100%;
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
    background-color: ${props => props.theme[props.color]};
    box-shadow: 0 4px 8px -2px rgba(0,0,0,.5), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    border-radius: 30px;
    transition: box-shadow 0.15s, background-color 0.3s;
    /* reset some browser defaults */
    cursor: pointer;
    border: none;
    appearance: none;

    & img {
        position: relative;
        top: 4px;
        right: 1px;
        width: 35px;
        max-width: 100%;
    }

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
    background: ${props => props.theme.darkGray};
    border-radius: 18px;
    color: ${props => props.theme.white};
    font-size: 12px;
    font-family: "Avenir";
    font-weight: 200;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.4), 0 2px 10px 0 rgba(0,0,0,.12);
    transition: all 0.15s;
    z-index: 3;
`;