// Libs
import React        from 'react';
import PropTypes    from 'prop-types';
import styled       from 'styled-components';

// Components
import Play        from '../../assets/images/icons/play.svg';
import Pause        from '../../assets/images/icons/pause.svg';

/**
 * The CruiseControlButton component is a component used to
 */
export default class CruiseControlButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        // console.log("-----CruiseControlButton");
    }

    render() {
        return (
            <ControlButton
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
    toggleCruiseControl: PropTypes.func.isRequired
};

// ============= Styled Components ==============

const ControlButton = styled.div`
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: ${props => props.theme.lightGray};
    box-shadow: 0 4px 8px -2px rgba(0,0,0,.5), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    transition: box-shadow 0.15s;

    @media (max-width: 480px) and (max-height: 480px) {
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }

    &:hover {
        box-shadow: 0 8px 16px -4px rgba(0,0,0,.5), 0 6px 2px -4px rgba(0,0,0,.2), 0 2px 10px 0 rgba(0,0,0,.12);
    }
`;

const ControlButtonIcon = styled.button`
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
