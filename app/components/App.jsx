/*
 *  Root of flowread.com: Web framework build on
 *  Firebase + ReactJS, written in JS ES6 compiled with babelJS,
 *  Bundled with webpack and NPM.
 *  written by Afika Nyati.
 */

// Libararies
import React                    from 'react';
import firebase                 from 'firebase';
import config                   from '../../firebase_config.json';
import getMuiTheme              from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider         from 'material-ui/styles/MuiThemeProvider';
import uuid                     from 'uuid';
import initReactFastclick       from 'react-fastclick';

// Components
import Viewport                 from './viewport/Viewport';
import FontTypes                from '../constants/fontTypes';
import SkinTypes               from '../constants/skinTypes';
import HandTypes               from '../constants/handTypes';

// Initialize Firebase
firebase.initializeApp(config);

// Initializing to enable Touch Tap events. It is global
// Used by Material UI
initReactFastclick();

/**
 * Root of App.
 * NOTE: default signifies that this is the only class exported from this file.
 * The majority of the web application's logic and state variables are housed in this
 * component. It is the topmost component in the App tree.
 */
export default class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontSize      : 20,
            fontFamily    : FontTypes.ADOBE_GARAMOND,
            fixationWidth : 4, // if they change the fixationWidth, rerender viewport
            trackingSpeed : 12,
            skin         : SkinTypes.WHITE,
            hand          : HandTypes.RIGHT,
            readingSpeed: 220, //WPM
            trailingWordIsActive: false
        };
    }

    componentWillMount() {
        // console.log("-----Root");

        // Automatically make skin to be night if later than 8
        let lowerBoundaryHour = 20, // 8PM
            upperBoundaryHour = 7, // 7am
            minInHour = 60,
            offset = new Date().getTimezoneOffset()/minInHour,
            hour = new Date().getUTCHours();

        console.log(hour - offset);

        if (hour - offset >= lowerBoundaryHour || upperBoundaryHour > hour - offset) {
            console.log("hello");
            this.setState({
                skin: SkinTypes.NIGHT
            });
        }
    }

    render() {
        return(
            <Viewport
                fontSize           ={this.state.fontSize}
                fontFamily         ={this.state.fontFamily}
                fixationWidth      ={this.state.fixationWidth}
                trackingSpeed      ={this.state.trackingSpeed}
                hand               ={this.state.hand}
                skin               ={this.state.skin}
                readingSpeed       ={this.state.readingSpeed}
                trailingWordIsActive ={this.state.trailingWordIsActive}/>
        );
    }

    componentDidMount() {
        // console.log("++++++Root");
        window.addEventListener("resize", this.rerender);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.rerender);
    }

    // ========== Methods ===========

    /**
     * Function attached to a listener connected to window element
     * Rerenders entire app when visitor adjusts browser size
     */
   rerender = () => {
       this.setState({});
   }
}
