import { injectGlobal }         from 'styled-components';

// Adobe Garamond
import garamondBold             from './assets/fonts/adobe_garamond/AGaramondPro-Bold.otf';
import garamondRegular          from './assets/fonts/adobe_garamond/AGaramondPro-Regular.otf';
import garamondBoldItalic       from './assets/fonts/adobe_garamond/AGaramondPro-BoldItalic.otf';
import garamondItalic           from './assets/fonts/adobe_garamond/AGaramondPro-Italic.otf';

// Avenir
import avenirBlack              from './assets/fonts/avenir/Avenir-Black.ttf';
import avenirHeavy              from './assets/fonts/avenir/Avenir-Heavy.ttf';
import avenirMedium             from './assets/fonts/avenir/Avenir-Medium.ttf';
import avenirRoman              from './assets/fonts/avenir/Avenir-Roman.ttf';
import avenirBook               from './assets/fonts/avenir/Avenir-Book.ttf';
import avenirLight              from './assets/fonts/avenir/Avenir-Light.ttf';
import avenirItalicBlack        from './assets/fonts/avenir/Avenir-BlackOblique.ttf';
import avenirItalicHeavy        from './assets/fonts/avenir/Avenir-HeavyOblique.ttf';
import avenirItalicMedium       from './assets/fonts/avenir/Avenir-MediumOblique.ttf';
import avenirItalic             from './assets/fonts/avenir/avenir-Oblique.ttf';
import avenirItalicBook         from './assets/fonts/avenir/Avenir-BookOblique.ttf';
import avenirItalicLight        from './assets/fonts/avenir/Avenir-LightOblique.ttf';

// Averta
import avertaBlack              from './assets/fonts/averta/Averta-Black.otf';
import avertaExtraBold          from './assets/fonts/averta/Averta-ExtraBold.otf';
import avertaBold               from './assets/fonts/averta/Averta-Bold.otf';
import avertaSemiBold           from './assets/fonts/averta/Averta-SemiBold.otf';
import avertaRegular            from './assets/fonts/averta/Averta-Regular.otf';
import avertaLight              from './assets/fonts/averta/Averta-Light.otf';
import avertaThin               from './assets/fonts/averta/Averta-Thin.otf';
import avertaExtraThin          from './assets/fonts/averta/Averta-ExtraThin.otf';
import avertaItalicBlack        from './assets/fonts/averta/Averta-BlackItalic.otf';
import avertaItalicExtraBold    from './assets/fonts/averta/Averta-ExtraBoldItalic.otf';
import avertaItalicBold         from './assets/fonts/averta/Averta-BoldItalic.otf';
import avertaItalicSemiBold     from './assets/fonts/averta/Averta-SemiBoldItalic.otf';
import avertaItalicRegular      from './assets/fonts/averta/Averta-RegularItalic.otf';
import avertaItalicLight        from './assets/fonts/averta/Averta-LightItalic.otf';
import avertaItalicThin         from './assets/fonts/averta/Averta-ThinItalic.otf';
import avertaItalicExtraThin    from './assets/fonts/averta/Averta-ExtraThinItalic.otf';

// Palatino
import palatinoBold             from './assets/fonts/palatino/Palatino-Bold.ttf';
import palatinoRoman            from './assets/fonts/palatino/Palatino-Roman.ttf';
import palatinoItalicBold       from './assets/fonts/palatino/Palatino-BoldItalic.ttf';
import palatinoItalic           from './assets/fonts/palatino/Palatino-Italic.ttf';

// Quicksand
import quicksandBold            from './assets/fonts/quicksand/Quicksand-Bold.otf';
import quicksandRegular         from './assets/fonts/quicksand/Quicksand-Regular.otf';
import quicksandLight           from './assets/fonts/quicksand/Quicksand-Light.otf';
import quicksandBoldItalic      from './assets/fonts/quicksand/Quicksand-BoldItalic.otf';
import quicksandItalic          from './assets/fonts/quicksand/Quicksand-Italic.otf';
import quicksandLightItalic     from './assets/fonts/quicksand/Quicksand-LightItalic.otf';


injectGlobal`
    :root {
        --fixation-transition: opacity 200ms ease-in;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Avenir', 'Gill Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        margin: 0;
    }

    a, a:visited, a:hover {
    	text-decoration: none;
    }

    textarea, input {
      transition: border .5s ease-in-out;
    }

    textarea:focus, input:focus {
    	border-color: none;
    }

    textarea:focus, input:focus, button:focus, button {
        outline: blue;
    }

    button {
    	border: none;
    }

    /* CSS Stylesheet for Flow Presentation */

    .paragraph-enter {
      opacity: 0.5;
    }

    .paragraph-enter.paragraph-enter-active {
      opacity: 1;
      transition: opacity 300ms ease-in;
    }

    .paragraph-leave {
      opacity: 0.5;
    }

    .paragraph-leave.paragraph-leave-active {
      opacity: 0;
      transition: opacity 200ms ease-in;
    }

    .word-enter {
      opacity: 0.5;
    }

    .word-enter.word-enter-active {
      opacity: 1;
      transition: var(--fixation-transition);
    }

    .bookmark-enter {
      opacity: 0.5;
    }

    .bookmark-enter.bookmark-enter-active {
      opacity: 1;
      transition: opacity 300ms ease-in;
    }

    .bookmark-leave {
      opacity: 0.5;
    }

    .bookmark-leave.bookmark-leave-active {
      opacity: 0;
      transition: opacity 200ms ease-in;
    }

    .fixation-enter {
      opacity: 0.8;
    }

    .fixation-enter.fixation-enter-active {
      opacity: 1;
      transition: var(--fixation-transition);
    }

    .definition-enter {
      opacity: 0.7;
    }

    .definition-enter.definition-enter-active {
      opacity: 1;
      transition: var(--fixation-transition);
    }

    .delimiter-appear {
      opacity: 0;
    }

    .delimiter-appear.delimiter-appear-active {
      opacity: 1;
      transition: opacity 500ms ease-in;
    }

    /* Adobe Garamond */
    @font-face {
    font-family: 'AdobeGaramond';
    src: url(${garamondBold}) format('truetype');
    font-weight: 700;
    }

    @font-face {
    font-family: 'AdobeGaramond';
    src: url(${garamondRegular}) format('truetype');
    font-weight: 400;
    }

    @font-face {
    font-family: 'AdobeGaramondItalic';
    src: url(${garamondBoldItalic}) format('truetype');
    font-weight: 700;
    }

    @font-face {
    font-family: 'AdobeGaramondItalic';
    src: url(${garamondItalic}) format('truetype');
    font-weight: 400;
    }

    /* Avenir */
    @font-face {
    font-family: 'Avenir';
    src: url(${avenirBlack}) format('truetype');
    font-weight: 900;
    }

    @font-face {
    font-family: 'Avenir';
    src: url(${avenirHeavy}) format('truetype');
    font-weight: 700;
    }

    @font-face {
    font-family: 'Avenir';
    src: url(${avenirMedium}) format('truetype');
    font-weight: 500;
    }

    @font-face {
    font-family: 'Avenir';
    src: url(${avenirRoman}) format('truetype');
    font-weight: 400;
    }

    @font-face {
    font-family: 'Avenir';
    src: url(${avenirBook}) format('truetype');
    font-weight: 300;
    }

    @font-face {
    font-family: 'Avenir';
    src: url(${avenirLight}) format('truetype');
    font-weight: 200;
    }

    @font-face {
    font-family: 'AvenirItalic';
    src: url(${avenirItalicBlack}) format('truetype');
    font-weight: 900;
    }

    @font-face {
    font-family: 'AvenirItalic';
    src: url(${avenirItalicHeavy}) format('truetype');
    font-weight: 700;
    }

    @font-face {
    font-family: 'AvenirItalic';
    src: url(${avenirItalicMedium}) format('truetype');
    font-weight: 500;
    }

    @font-face {
    font-family: 'AvenirItalic';
    src: url(${avenirItalic}) format('truetype');
    font-weight: 400;
    }

    @font-face {
    font-family: 'AvenirItalic';
    src: url(${avenirItalicBook}) format('truetype');
    font-weight: 300;
    }

    @font-face {
    font-family: 'AvenirItalic';
    src: url(${avenirItalicLight}) format('truetype');
    font-weight: 200;
    }

    /* Averta */
    @font-face {
    font-family: 'Averta';
    src: url(${avertaBlack}) format('truetype');
    font-weight: 900;
    }

    @font-face {
    font-family: 'Averta';
    src: url(${avertaExtraBold}) format('truetype');
    font-weight: 800;
    }

    @font-face {
    font-family: 'Averta';
    src: url(${avertaBold}) format('truetype');
    font-weight: 700;
    }

    @font-face {
    font-family: 'Averta';
    src: url(${avertaSemiBold}) format('truetype');
    font-weight: 600;
    }

    @font-face {
    font-family: 'Averta';
    src: url(${avertaRegular}) format('truetype');
    font-weight: 400;
    }

    @font-face {
    font-family: 'Averta';
    src: url(${avertaLight}) format('truetype');
    font-weight: 300;
    }

    @font-face {
    font-family: 'Averta';
    src: url(${avertaThin}) format('truetype');
    font-weight: 200;
    }

    @font-face {
    font-family: 'Averta';
    src: url(${avertaExtraThin}) format('truetype');
    font-weight: 100;
    }

    @font-face {
    font-family: 'AvertaItalic';
    src: url(${avertaItalicBlack}) format('truetype');
    font-weight: 900;
    }

    @font-face {
    font-family: 'AvertaItalic';
    src: url(${avertaItalicExtraBold}) format('truetype');
    font-weight: 800;
    }

    @font-face {
    font-family: 'AvertaItalic';
    src: url(${avertaItalicBold}) format('truetype');
    font-weight: 700;
    }

    @font-face {
    font-family: 'AvertaItalic';
    src: url(${avertaItalicSemiBold}) format('truetype');
    font-weight: 600;
    }

    @font-face {
    font-family: 'AvertaItalic';
    src: url(${avertaItalicRegular}) format('truetype');
    font-weight: 400;
    }

    @font-face {
    font-family: 'AvertaItalic';
    src: url(${avertaItalicLight}) format('truetype');
    font-weight: 300;
    }

    @font-face {
    font-family: 'AvertaItalic';
    src: url(${avertaItalicThin}) format('truetype');
    font-weight: 200;
    }

    @font-face {
    font-family: 'AvertaItalic';
    src: url(${avertaItalicExtraThin}) format('truetype');
    font-weight: 100;
    }

    /* Palatino */
    @font-face {
    font-family: 'Palatino';
    src: url(${palatinoBold}) format('truetype');
    font-weight: 700;
    }

    @font-face {
    font-family: 'Palatino';
    src: url(${palatinoRoman}) format('truetype');
    font-weight: 400;
    }

    @font-face {
    font-family: 'PalatinoItalic';
    src: url(${palatinoItalicBold}) format('truetype');
    font-weight: 700;
    }

    @font-face {
    font-family: 'PalatinoItalic';
    src: url(${palatinoItalic}) format('truetype');
    font-weight: 400;
    }

    /* quicksand */
    @font-face {
    font-family: 'quicksand';
    src: url(${quicksandBold}) format('truetype');
    font-weight: 700;
    }

    @font-face {
    font-family: 'quicksand';
    src: url(${quicksandRegular}) format('truetype');
    font-weight: 400;
    }

    @font-face {
    font-family: 'quicksand';
    src: url(${quicksandLight}) format('truetype');
    font-weight: 200;
    }

    @font-face {
    font-family: 'quicksandItalic';
    src: url(${quicksandBoldItalic}) format('truetype');
    font-weight: 700;
    }

    @font-face {
    font-family: 'quicksandItalic';
    src: url(${quicksandItalic}) format('truetype');
    font-weight: 400;
    }

    @font-face {
    font-family: 'quicksandItalic';
    src: url(${quicksandLightItalic}) format('truetype');
    font-weight: 200;
    }

    .react-hint {
        width: 150px;
    	padding: 5px;
    	position: absolute;
    	z-index: 9999;
    	cursor: default;
    	animation: .5s fadeIn;
    }

    .react-hint__content {
        display: inline-block;
    	padding: 10px;
    	border-radius: 5px;
    	background: #000;
    	color: #fff;
    }

    @keyframes fadeIn {
    	from {
    		opacity: 0;
    	}

    	to {
    		opacity: 1;
    	}
    }

    @keyframes scale {
        0% {
            transform: scale(1);
            opacity: 1;
        } 45% {
            transform: scale(0.1);
            opacity: 0.7;
        } 80% {
            transform: scale(1);
            opacity: 1;
        }
    }
`
