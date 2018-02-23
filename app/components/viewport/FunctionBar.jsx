// Libs
import React        from 'react';
import PropTypes    from 'prop-types';
import styled       from 'styled-components';

// Components
import HandTypes               from '../../constants/handTypes';
import SkinTypes                from '../../constants/skinTypes';
import PausePurple          from '../../assets/images/icons/pause-purple.svg';
import PauseLightPurple          from '../../assets/images/icons/pause-lightpurple.svg';
import PauseGray           from '../../assets/images/icons/pause-gray.svg';
import PauseDarkGray           from '../../assets/images/icons/pause-darkgray.svg';
import SpeedPurple          from '../../assets/images/icons/speed-purple.svg';
import SpeedLightPurple          from '../../assets/images/icons/speed-lightpurple.svg';

/**
 * The StatusBar component is a component used to
 */
export default class FunctionBar extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // console.log("-----FunctionBar");
    }

    render() {
        return (
            <FunctionBarContainer
                hand={this.props.hand}>
                <FunctionSystem>
                    <FunctionIcon
                        title={`Words per Minute`}
                        icon={this.props.skin == SkinTypes.WHITE ?
                                    `url(${SpeedPurple})`
                                :
                                    this.props.skin == SkinTypes.CREAM ?
                                            `url(${SpeedPurple})`
                                        :
                                            `url(${SpeedLightPurple})`}/>
                    <FunctionText skin={this.props.skin}>
                        {this.props.readingSpeed}
                    </FunctionText>
                </FunctionSystem>
                <FunctionIcon
                    title={`Cruise Control Halt ${this.props.cruiseControlHaltIsActive ? "Activated" : "Deactivated"}`}
                    icon={this.props.cruiseControlHaltIsActive ?
                            this.props.skin == SkinTypes.WHITE ?
                                        `url(${PausePurple})`
                                    :
                                        this.props.skin == SkinTypes.CREAM ?
                                                `url(${PausePurple})`
                                            :
                                                `url(${PausePurple})`
                        :
                            this.props.skin == SkinTypes.WHITE ?
                                        `url(${PauseGray})`
                                    :
                                        this.props.skin == SkinTypes.CREAM ?
                                                `url(${PauseGray})`
                                            :
                                                `url(${PauseDarkGray})`}/>
            </FunctionBarContainer>
        );
    }

    componentDidMount() {
        // console.log("+++++StatusBar");
    }

    // ========== Methods ===========

    /*

     */
}

// ============= PropTypes ==============

FunctionBar.propTypes = {
    cruiseControlHaltIsActive: PropTypes.bool.isRequired,
    hand              : PropTypes.string.isRequired,
    readingSpeed: PropTypes.number.isRequired,
    skin: PropTypes.string.isRequired
};

// ============= Styled Components ==============

const FunctionBarContainer = styled.div`
    position: fixed;
    top: 5px;
    left: ${props => props.hand == HandTypes.RIGHT ? "10px" : "auto"};
    right: ${props => props.hand == HandTypes.LEFT ? "10px" : "auto"};
    z-index: 5;
`;

const FunctionIcon = styled.div`
    position: relative;
    display: inline-block;
    width: 30px;
    height: 40px;
    background-image: ${props => props.icon};
    background-position: 50%;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    transition: all 0.2s;
`;

const FunctionSystem = styled.div`
    display: inline-flex;
    position: relative;
    height: 40px;
    align-items: center;
    margin-right: 20px;
`;

const FunctionText = styled.h3`
    position: relative;
    top: 1px;
    display: inline-block;
    font-size: 0.9em;
    margin: 0;
    color: ${props => props.skin == SkinTypes.WHITE ?
                props.theme.darkGray
            :
                props.skin == SkinTypes.CREAM ?
                        "#5f3e24"
                    :
                        props.theme.gray
            };
    font-weight: 400;
`;
