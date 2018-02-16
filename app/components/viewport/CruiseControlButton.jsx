// Libs
import React        from 'react';
import PropTypes    from 'prop-types';
import styled       from 'styled-components';

// Components
import HandTypes    from '../../constants/handTypes';
import SkinTypes                from '../../constants/skinTypes';
import Play         from '../../assets/images/icons/play.svg';
import Pause        from '../../assets/images/icons/pause-white.svg';

/**
 * The CruiseControlButton component is a component used to
 */
export default class CruiseControlButton extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // console.log("-----CruiseControlButton");
    }

    render() {
        return (
            <ControlButton
                id="cruiseControl"
                hand={this.props.hand}
                skin={this.props.skin}
                active={this.props.cruiseControlIsActive}
                onClick={this.props.toggleCruiseControl}>
                <ControlButtonIcon
                    icon={
                        this.props.cruiseControlIsActive ?
                            `url(${Pause})`
                        :
                            `url(${Play})`}/>
            </ControlButton>
        );
    }

    componentDidMount() {
        // console.log("+++++CruiseControlButton");
    }

    // ========== Methods ===========

    /*

     */
}

// ============= PropTypes ==============

CruiseControlButton.propTypes = {
    cruiseControlIsActive: PropTypes.bool.isRequired,
    toggleCruiseControl  : PropTypes.func.isRequired,
    hand                 : PropTypes.string.isRequired,
    skin: PropTypes.string.isRequired
};

// ============= Styled Components ==============

const ControlButton = styled.div`
    position: fixed;
    bottom: 3%;
    left: ${props => props.hand == HandTypes.LEFT ? "30px" : "auto"};
    right: ${props => props.hand == HandTypes.RIGHT ? "30px" : "auto"};
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: ${props => props.active ?
            props.skin == SkinTypes.WHITE ?
                        props.theme.purple
                    :
                        props.skin == SkinTypes.CREAM ?
                                "#f9f3e9"
                            :
                                props.theme.lightPurple
        :
            props.skin == SkinTypes.WHITE ?
                        props.theme.lightGray
                    :
                        props.skin == SkinTypes.CREAM ?
                                "#f9f3e9"
                            :
                                props.theme.darkGray};
    box-shadow: 0 4px 8px -2px rgba(0,0,0,.5), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    transition: box-shadow 0.15s, background 0.15s;
    z-index: 10;

    @media (max-width: 480px) and (max-height: 480px) {
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }

    &:hover {
        box-shadow: 0 8px 16px -4px rgba(0,0,0,.5), 0 6px 2px -4px rgba(0,0,0,.2), 0 2px 10px 0 rgba(0,0,0,.12);
    }
`;

const ControlButtonIcon = styled.div`
    cursor: pointer;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background: none;
    background-image: ${props => props.icon};
    background-position: 50%;
    background-size: 35px 35px;
    background-repeat: no-repeat;
    transition: background-image 0.3s;

    @media (max-width: 480px) and (max-height: 480px) {
        border-radius: 15px;
    }
`;
