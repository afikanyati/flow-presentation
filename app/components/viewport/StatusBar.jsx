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
export default class StatusBar extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // console.log("-----StatusBar");
    }

    render() {
        return (
            <StatusBarContainer
                hand={this.props.hand}>
                <StatusIcon
                    title={`Definitions ${this.props.definitionsAreActive ? "Activated" : "Deactivated"}`}
                    icon={this.props.definitionsAreActive ?
                            `url(${DefinitionsPurple})`
                        :
                            `url(${DefinitionsGray})`}/>
                <StatusIcon
                    title={`Highlighting ${this.props.definitionsAreActive ? "Activated" : "Deactivated"}`}
                    icon={this.props.highlightIsActive ?
                            `url(${HighlightPurple})`
                        :
                            `url(${HighlightGray})`}/>
                <StatusIcon
                    title={`Rapid Scroll ${this.props.definitionsAreActive ? "Activated" : "Deactivated"}`}
                    icon={this.props.rapidScrollIsActive ?
                            `url(${RapidScrollPurple})`
                        :
                            `url(${RapidScrollGray})`}/>
            </StatusBarContainer>
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

StatusBar.propTypes = {
    definitionsAreActive   : PropTypes.bool.isRequired,
    highlightIsActive      : PropTypes.bool.isRequired,
    rapidScrollIsActive : PropTypes.bool.isRequired,
    hand              : PropTypes.string.isRequired
};

// ============= Styled Components ==============

const StatusBarContainer = styled.div`
    position: fixed;
    top: 15px;
    left: ${props => props.hand == HandTypes.LEFT ? "15px" : "auto"};
    right: ${props => props.hand == HandTypes.RIGHT ? "15px" : "auto"};
`;

const StatusIcon = styled.div`
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
