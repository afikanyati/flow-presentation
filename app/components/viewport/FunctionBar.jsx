// Libs
import React        from 'react';
import PropTypes    from 'prop-types';
import styled       from 'styled-components';

// Components
import HandTypes               from '../../constants/handTypes';
import DefinitionsPurple        from '../../assets/images/icons/definitions-purple.svg';
import DefinitionsGray         from '../../assets/images/icons/definitions-gray.svg';
import RapidScrollPurple     from '../../assets/images/icons/rapid-scroll-purple.svg';
import RapidScrollGray      from '../../assets/images/icons/rapid-scroll-gray.svg';
import HighlightPurple          from '../../assets/images/icons/highlight-purple.svg';
import HighlightGray           from '../../assets/images/icons/highlight-gray.svg';

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
                <FunctionIcon
                    title={`Rapid Scroll ${this.props.rapidScrollIsActive ? "Activated" : "Deactivated"}`}
                    icon={this.props.rapidScrollIsActive ?
                            `url(${RapidScrollPurple})`
                        :
                            `url(${RapidScrollGray})`}/>
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
    rapidScrollIsActive : PropTypes.bool.isRequired,
    hand              : PropTypes.string.isRequired
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
