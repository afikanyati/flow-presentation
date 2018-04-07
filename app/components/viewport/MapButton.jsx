// Libs
import React            from 'react';
import PropTypes        from 'prop-types';
import styled           from 'styled-components';

// Components
import HandTypes        from '../../constants/handTypes';
import SkinTypes        from '../../constants/skinTypes';
import MapWhite         from '../../assets/images/icons/map-white.svg';
import MapColor         from '../../assets/images/icons/map-yellow.svg';
import PauseLightPurple from '../../assets/images/icons/pause-lightpurple-cursor.png';
import PausePurple       from '../../assets/images/icons/pause-purple-cursor.png';

/**
 * The MapButton component is a component used to
 */
export default class MapButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        // console.log("-----MapButton");
    }

    render() {
        return (
            <MapButtonContainer
                skin={this.props.skin}
                hand={this.props.hand}
                onClick={this.props.toggleMap}>
                <MapButtonIcon
                    icon={`url(${MapWhite})`}
                    cruiseControlHaltIsActive={this.props.cruiseControlHaltIsActive}
                    customCursor={this.props.skin == SkinTypes.DARK ?
                            `url(${PauseLightPurple}), auto`
                        :
                            `url(${PausePurple}), auto`}/>
            </MapButtonContainer>
        );
    }

    componentDidMount() {
        // console.log("+++++MapButton");
    }

    // ========== Methods ===========

    /*

     */
}

// ============= PropTypes ==============

MapButton.propTypes = {
    toggleMap: PropTypes.func.isRequired,
    hand: PropTypes.string.isRequired,
    skin               : PropTypes.string.isRequired,
    cruiseControlHaltIsActive: PropTypes.bool.isRequired
};

// ============= Styled Components ==============

const MapButtonContainer = styled.div`
    position: fixed;
    bottom: 3%;
    left: ${props => props.hand == HandTypes.LEFT ? "auto" : "30px"};
    right: ${props => props.hand == HandTypes.RIGHT ? "auto" : "30px"};
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: ${props => props.skin == SkinTypes.DARK ?
                props.theme.black
            :
                props.theme.lightGray
            };
    box-shadow: ${props => props.skin == SkinTypes.DARK ?
            "0 4px 8px -2px rgba(181,210,236,.25), 0 3px 1px -2px rgba(181,210,236,.1), 0 1px 5px 0 rgba(181,210,236,.06)"
        :
            "0 4px 8px -2px rgba(0,0,0,.5), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)"
    };
    transition: box-shadow 0.15s, visibility 0.2s, opacity 0.2s, top 0.2s;
    z-index: 2;

    @media (max-width: 600px) {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        left: ${props => props.hand == HandTypes.LEFT ? "auto" : "20px"};
        right: ${props => props.hand == HandTypes.RIGHT ? "auto" : "20px"};
    }

    &:hover {
        box-shadow: ${props => props.skin == SkinTypes.DARK ?
                "0 8px 16px -4px rgba(181,210,236,.25), 0 6px 2px -4px rgba(181,210,236,.1), 0 2px 10px 0 rgba(181,210,236,.06)"
            :
                "0 8px 16px -4px rgba(0,0,0,.5), 0 6px 2px -4px rgba(0,0,0,.2), 0 2px 10px 0 rgba(0,0,0,.12)"
        };
    }
`;

const MapButtonIcon = styled.button`
    cursor: ${props => props.cruiseControlHaltIsActive ? props.customCursor: "pointer"};
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: none;
    background-image: ${props => props.icon};
    background-position: 50%;
    background-size: 35px 35px;
    background-repeat: no-repeat;
    transition: background-image 0.3s;

    @media (max-width: 600px) {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background-size: 29px 29px;
    }
`;
