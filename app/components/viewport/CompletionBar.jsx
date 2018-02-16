// Libs
import React        from 'react';
import PropTypes    from 'prop-types';
import styled       from 'styled-components';

// Components
import HandTypes               from '../../constants/handTypes';
import SkinTypes                from '../../constants/skinTypes';
import MapWhite                from '../../assets/images/icons/map-white.svg';
import MapColor                from '../../assets/images/icons/map-yellow.svg';

/**
 * The CompletionBar component is a component used to
 */
export default class CompletionBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        // console.log("-----CompletionBar");
    }

    render() {
        return (
            <Meter skin={this.props.skin}>
                <Indicator
                    skin={this.props.skin}
                    progress={`${this.props.progress}%`} />
            </Meter>
        );
    }

    componentDidMount() {
        // console.log("+++++CompletionBar");
    }

    // ========== Methods ===========

    /*

     */
}

// ============= PropTypes ==============

CompletionBar.propTypes = {
    progress: PropTypes.number.isRequired,
    skin: PropTypes.string.isRequired
};

// ============= Styled Components ==============

const Meter = styled.div`
    position: fixed;
    top: 45px;
    left: 50%;
    transform: translateX(-50%);
    width: 350px;
    height: 6px;
    border-radius: 3px;
    margin: 0;
    background: ${props => props.skin == SkinTypes.WHITE ?
                props.theme.lightGray
            :
                props.skin == SkinTypes.CREAM ?
                        props.theme.gray
                    :
                        props.theme.darkGray
            };
    z-index: 5;
`;

const Indicator = styled.div`
    margin: 0;
    padding: 0;
    background: ${props => props.skin == SkinTypes.WHITE ?
                props.theme.blue
            :
                props.theme.darkBlue
            };
    width: ${props => props.progress};
    height: 6px;
    border-radius: 3px;
    transition: width 0.1s;
`;
