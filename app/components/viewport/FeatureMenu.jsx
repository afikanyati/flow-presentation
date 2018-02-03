// Libs
import React                    from 'react';
import PropTypes                from 'prop-types';
import styled                   from 'styled-components';

// Components

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
            features: [
                {
                    icon: {
                        inactive: "assets/images/icons/bookmark-red.svg",
                        active: "assets/images/icons/bookmark-white.svg"
                    },
                    description: "",
                    color: "red",
                    isActive: false,
                    cssTranslate: {
                        inactiveTransitionDelay: 0,
                        activeTransitionDelay: 0,
                        transition: ""
                    }
                },
                {
                    icon: {
                        inactive: "assets/images/icons/attachment-purple.svg",
                        active: "assets/images/icons/attachment-white.svg"
                    },
                    description: "",
                    color: "purple",
                    isActive: false,
                    cssTranslate: {
                        inactiveTransitionDelay: 0,
                        activeTransitionDelay: 0,
                        transition: ""
                    }
                },
                {
                    icon: {
                        inactive: "assets/images/icons/definitions-blue.svg",
                        active: "assets/images/icons/definitions-white.svg"
                    },
                    description: "",
                    color: "blue",
                    isActive: false,
                    cssTranslate: {
                        inactiveTransitionDelay: 0,
                        activeTransitionDelay: 0,
                        transition: ""
                    }
                },
                {
                    icon: {
                        inactive: "assets/images/icons/highlight-green.svg",
                        active: "assets/images/icons/highlight-white.svg"
                    },
                    description: "",
                    color: "green",
                    isActive: false,
                    cssTranslate: {
                        inactiveTransitionDelay: 0,
                        activeTransitionDelay: 0,
                        transition: ""
                    }
                },
                {
                    icon: {
                        inactive: "assets/images/icons/map-yellow.svg",
                        active: "assets/images/icons/map-white.svg"
                    },
                    description: "",
                    color: "yellow",
                    isActive: false,
                    cssTranslate: {
                        inactiveTransitionDelay: 0,
                        activeTransitionDelay: 0,
                        transition: ""
                    }
                }
            ]
        }
    }

    componentWillMount() {
        //console.log("-----FeatureMenu");
        this.state.features.forEach(this.calcTranslate);
    }

    render() {
        return (
            <Menu
                menuIsOpen={this.state.menuIsOpen}>
                <MenuToggle
                    menuIsOpen={this.state.menuIsOpen}
                    onClick={this.toggleMenu}>
                    <img src={this.state.menuIsOpen ? "assets/images/icons/flow-icon-color.svg" : "assets/images/icons/flow-icon-white.svg"} />
                </MenuToggle>
                <MenuItemContainer>
                    {this.state.features.map((feature, index) => {
                      return (
                          <MenuItem
                              key={index}
                              cssTranslate={feature.cssTranslate}
                              color={feature.color}
                              menuIsOpen={this.state.menuIsOpen}
                              isActive={feature.isActive}>
                              <MenuItemLink>
                                  <img src={feature.isActive ? feature.icon.active : feature.icon.inactive} />
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

    toggleMenu = () => {
        this.setState({
            menuIsOpen: !this.state.menuIsOpen
        });
    }

    calcTranslate = (value, index) => {
        let translateInfo = {};
        let numItems = this.state.features.length;

        let sweepDeg = 180,
            increment = sweepDeg/(numItems - 1),
            angle = increment,
            spreadRadius = 120,
            delayIncrement = 0.1,
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
        features[index].cssTranslate = translateInfo;

        this.setState({
            features: features
        });
    }
}

// ============= PropTypes ==============

FeatureMenu.propTypes = {

};

// ============= Styled Components ==============

const Menu = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 30px;
    z-index: 1000;
    width: 60px;
    height: 60px;
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
    box-shadow: 0 4px 8px -2px rgba(0,0,0,.5), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    opacity: ${props => props.menuIsOpen ? 1 : 0};
    transition: transform, opacity;
    transition-duration: 0.3s, 0.3s;
    transition-timing-function: ${props => props.menuIsOpen ? "cubic-bezier(0.35, 0.03, 0.47, 1.59)" : "cubic-bezier(0.35, -0.59, 0.47, 0.97)"};

    &:hover {
        box-shadow: 0 8px 16px -4px rgba(0,0,0,.5), 0 6px 2px -4px rgba(0,0,0,.2), 0 2px 10px 0 rgba(0,0,0,.12);
    }

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

    @media (max-width: 480px) and (max-height: 480px) {
        border-radius: 15px;
    }

    & img {
        width: 35px;
        max-width: 100%;
    }

    &:hover {

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
    background-color: ${props => props.theme.lightGray};
    box-shadow: 0 4px 8px -2px rgba(0,0,0,.5), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    border-radius: 30px;
    transition: background 0.3s, box-shadow 0.3s;
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
        transition: all 0.3s;
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
