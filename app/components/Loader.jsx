// Libs
import React            from 'react';
import PropTypes        from 'prop-types';
import styled           from 'styled-components';

// Components

/**
 * The BackButton component is a component used to
 */
export default class Loader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        // console.log("-----Loader");
    }

    render() {
        return (
            <Container>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Container>
        );
    }

    componentDidMount() {
        // console.log("+++++Loader");
    }

    // ========== Methods ===========

    /*

     */
}

// ============= PropTypes ==============

Loader.propTypes = {

};

// ============= Styled Components ==============

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > div {
        width: 12px;
        height: 12px;
        border-radius: 6px;
        margin: 2px;
        animation-fill-mode: both;
        display: inline-block;
    }

    & > div:nth-child(1) {
        background: ${props => props.theme.red};
        animation: scale 2.5s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
    }

    & > div:nth-child(2) {
        background: ${props => props.theme.purple};
        animation: scale 2.5s 0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
    }

    & > div:nth-child(3) {
        background: ${props => props.theme.blue};
        animation: scale 2.5s 0.48s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
    }

    & > div:nth-child(4) {
        background: ${props => props.theme.green};
        animation: scale 2.5s 0.72s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
    }

    & > div:nth-child(5) {
        background: ${props => props.theme.yellow};
        animation: scale 2.5s 0.96s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
    }
`;
