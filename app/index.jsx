// Libs
import React                            from 'react';
import ReactDOM                         from 'react-dom';
import App                              from './components/App.jsx';
import { ThemeProvider }  from 'styled-components';

// Styles
import './global-styles.js';

/**
 * RenderDOM connects the root JSX logic (App.jsx) to the root HTML id, and
 * imports render
 * @param  {[JSX File]} <App/> Root of the application
 */

const theme = {
    red: '#d3224f',
    purple: '#65266d',
    blue: '#b5d2ec',
    green: '#69c4a8',
    yellow: '#f1ddac',
    white: '#ffffff',
    lightGray: '#f2f2f2',
    darkGray: '#b3b3b3',
    black: '#000000',
    textColor: 'rgba(35,31,32, 0.87)'
}

ReactDOM.render((
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
), document.getElementById('root'));
