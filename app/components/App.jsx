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
import uuid                     from 'uuid';
import initReactFastclick       from 'react-fastclick';

// Components
import Viewport                 from './viewport/Viewport';
import FontTypes                from '../constants/fontTypes';
import SkinTypes                from '../constants/skinTypes';
import HandTypes                from '../constants/handTypes';
import ScrollDirectionTypes     from '../constants/scrollDirectionTypes';

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
            fontSize       : 22,
            fontFamily     : FontTypes.ADOBE_GARAMOND,
            fixationWidth  : 3, // if they change the fixationWidth, rerender viewport
            trackingSpeed  : 12,
            skin           : SkinTypes.LIGHT,
            hand           : HandTypes.RIGHT,
            readingPace   : 220, //WPM --> Method to save reading pace if edited
            docURL: "/documents/-L9hplsruzf-c2inSokv" // /documents/-LA4mW9Kf43qcB5OMGzm or /documents/-LAjm0WKo_iQLKzUa9TZ or /documents/-LAjvO6fEqALyy_sI76s
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

        if (hour - offset >= lowerBoundaryHour || upperBoundaryHour > hour - offset) {
            this.setState({
                skin: SkinTypes.DARK
            });
        }
    }

    render() {
        return(
            <Viewport
                docURL                ={this.state.docURL}
                fontSize             ={this.state.fontSize}
                fontFamily           ={this.state.fontFamily}
                fixationWidth        ={this.state.fixationWidth}
                trackingSpeed        ={this.state.trackingSpeed}
                hand                 ={this.state.hand}
                skin                 ={this.state.skin}
                readingPace         ={this.state.readingPace}
                highlightColor       ={this.state.highlightColor}
                showAnnotations={this.state.showAnnotations}
                setReadingPace   ={this.setReadingPace}/>
        );
    }

    componentDidMount() {
        // console.log("++++++Root");
        window.addEventListener("resize", this.rerender);

        // UPLOAD WEBSITE TO Flow Presentation
        // let website = "https://en.wikipedia.org/wiki/Flow_(psychology)";
        // firebase.database().ref('/webpages').push(website).then((snapshot) => {
        //   console.log("Posted Webpage!");
        // });

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

   setReadingPace = (pace) => {
       let readingPace = Math.max(pace, 1);
       this.setState({
           readingPace: readingPace
       });
   }
}
