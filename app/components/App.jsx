/*
 *  Root of flowread.com: Web framework build on
 *  Firebase + ReactJS, written in JS ES6 compiled with babelJS,
 *  Bundled with webpack and NPM.
 *  written by Afika Nyati.
 */

// Libs
import React                from 'react';
import firebase             from 'firebase';
import config               from '../../firebase_config.json';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import uuid                 from 'uuid';
import initReactFastclick   from 'react-fastclick';

// Initializing to enable Touch Tap events. It is global
// Used by Material UI
initReactFastclick();

// Initialize Firebase
firebase.initializeApp(config);

// Components


/**
 * Root of App.
 * NOTE: default signifies that this is the only class exported from this file.
 * The majority of the web application's logic and state variables are housed in this
 * component. It is the topmost component in the App tree.
 */
export default class App extends React.Component {
    state = {

    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("-----App");

    }

    render() {
        return(
            <div className="hello">

            </div>
        );
    }

    componentDidMount() {
        console.log("++++++App");
        window.addEventListener("resize", this.rerender);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.rerender);
    }

    // ========== Methods ===========

} //END App
