// Libs
import React        from 'react';
import PropTypes    from 'prop-types';
import styled       from 'styled-components';

// Components
import FeatureTypes             from '../../constants/featureTypes';
import BackRed        from '../../assets/images/icons/back-red.svg';
import BackPurple        from '../../assets/images/icons/back-purple.svg';
import BackGreen        from '../../assets/images/icons/back-green.svg';

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
                onClick={this.props.backFunction.bind({}, this.props.activeFeature)}
                active={this.props.activeFeature != null}>
                <BackButtonIcon
                    icon={this.props.activeFeature == FeatureTypes.BOOKMARK ?
                        `url(${BackRed})`
                    :
                        this.props.activeFeature == FeatureTypes.HIGHLIGHT ?
                            `url(${BackGreen})`
                        :
                            `url(${BackPurple})`}/>
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
    activeFeature: PropTypes.string,
    backFunction: PropTypes.func
};

// ============= Styled Components ==============

const BackButtonContainer = styled.div`
    visibility: : ${props => props.active ? "visible" : "hidden"};
    opacity: ${props => props.active ? 1 : 0};
    position: relative;
    top: ${props => props.active ? "80px" : "0px"};
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: ${props => props.theme.black};
    box-shadow: 0 4px 8px -2px rgba(0,0,0,.5), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    transition: box-shadow 0.15s, visibility 0.2s, opacity 0.2s, top 0.2s;

    @media (max-width: 480px) and (max-height: 480px) {
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }

    &:hover {
        box-shadow: 0 8px 16px -4px rgba(0,0,0,.5), 0 6px 2px -4px rgba(0,0,0,.2), 0 2px 10px 0 rgba(0,0,0,.12);
    }
`;

const BackButtonIcon = styled.button`
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
