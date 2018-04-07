// Libs
import React            from 'react';
import PropTypes        from 'prop-types';
import styled           from 'styled-components';

// Components
import ToolTypes        from '../../constants/toolTypes';
import SkinTypes        from '../../constants/skinTypes';
import BackRed          from '../../assets/images/icons/back-red.svg';
import BackPurple       from '../../assets/images/icons/back-purple.svg'
import BackBlue         from '../../assets/images/icons/back-blue.svg'
import BackGreen        from '../../assets/images/icons/back-green.svg';
import BackYellow       from '../../assets/images/icons/back-yellow.svg'

/**
 * The BackButton component is a component used to
 */
export default class BackButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        // console.log("-----BackButton");
    }

    render() {
        return (
            <BackButtonContainer
                skin={this.props.skin}
                onClick={this.props.backFunction.bind({}, this.props.activeFeature)}
                active={this.props.activeFeature == ToolTypes.BOOKMARK}>
                <BackButtonIcon
                    icon={`url(${BackRed})`}/>
            </BackButtonContainer>
        );
    }

    componentDidMount() {
        // console.log("+++++BackButton");
    }

    // ========== Methods ===========

    /*

     */
}

// ============= PropTypes ==============

BackButton.propTypes = {
    skin: PropTypes.string.isRequired,
    activeFeature: PropTypes.string,
    backFunction: PropTypes.func
};

// ============= Styled Components ==============

const BackButtonContainer = styled.div`
    visibility: ${props => props.active ? "visible" : "hidden"};
    opacity: ${props => props.active ? 1 : 0};
    position: relative;
    top: ${props => props.active ? "80px" : "0px"};
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: ${props => props.theme.black};
    box-shadow: ${props => props.skin == SkinTypes.DARK ?
            "0 4px 8px -2px rgba(181,210,236,.5), 0 3px 1px -2px rgba(181,210,236,.2), 0 1px 5px 0 rgba(181,210,236,.12)"
        :
            "0 4px 8px -2px rgba(0,0,0,.5), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)"
    };
    transition: box-shadow 0.15s, visibility 0.2s, opacity 0.2s, top 0.2s;

    @media (max-width: 600px) {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        top: ${props => props.active ? "60px" : "0px"};
    }

    &:hover {
        box-shadow: ${props => props.skin == SkinTypes.DARK ?
                "0 8px 16px -4px rgba(181,210,236,.5), 0 6px 2px -4px rgba(181,210,236,.2), 0 2px 10px 0 rgba(181,210,236,.12)"
            :
                "0 8px 16px -4px rgba(0,0,0,.5), 0 6px 2px -4px rgba(0,0,0,.2), 0 2px 10px 0 rgba(0,0,0,.12)"
        };
    }
`;

const BackButtonIcon = styled.button`
    cursor: pointer;
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

const highlight = {
    red: BackRed,
    purple: BackPurple,
    blue: BackBlue,
    green: BackGreen,
    yellow: BackYellow
}
