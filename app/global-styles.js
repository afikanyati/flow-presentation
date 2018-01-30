import { injectGlobal } from 'styled-components';

injectGlobal`
    * {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
    }

    body {
        color: rgba(0,0,0,0.87);
    }

    a, a:visited, a:hover {
    	text-decoration: none;
    }

    textarea, input {
    	-webkit-transition: border .5s ease-in-out;
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

    /* CSS Stylesheet for Flow */

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
      transition: opacity 300ms ease-in;
    }

    .word-leave {
      opacity: 0.5;
    }

    .word-leave.word-leave-active {
      opacity: 0;
      transition: opacity 200ms ease-in;
    }

    .fixation-enter {
      opacity: 0.7;
    }

    .fixation-enter.fixation-enter-active {
      opacity: 1;
      transition: opacity 200ms ease-in;
    }

    /* Adobe Garamond */
    @font-face {
    font-family: 'AdobeGaramond';
    src: url(assets/fonts/adobe_garamond/AGaramondPro-Bold.otf);
    font-weight: 700;
    }

    @font-face {
    font-family: 'AdobeGaramond';
    src: url(assets/fonts/adobe_garamond/AGaramondPro-Regular.otf);
    font-weight: 400;
    }

    @font-face {
    font-family: 'AdobeGaramondItalic';
    src: url(assets/fonts/adobe_garamond/AGaramondPro-BoldItalic.otf);
    font-weight: 700;
    }

    @font-face {
    font-family: 'AdobeGaramondItalic';
    src: url(assets/fonts/adobe_garamond/AGaramondPro-Italic.otf);
    font-weight: 400;
    }

    /* Avenir */
    @font-face {
    font-family: 'Avenir';
    src: url(assets/fonts/Avenir/Avenir-Black.ttf);
    font-weight: 900;
    }

    @font-face {
    font-family: 'Avenir';
    src: url(assets/fonts/Avenir/Avenir-Heavy.ttf);
    font-weight: 700;
    }

    @font-face {
    font-family: 'Avenir';
    src: url(assets/fonts/Avenir/Avenir-Medium.ttf);
    font-weight: 500;
    }

    @font-face {
    font-family: 'Avenir';
    src: url(assets/fonts/Avenir/Avenir-Roman.ttf);
    font-weight: 400;
    }

    @font-face {
    font-family: 'Avenir';
    src: url(assets/fonts/Avenir/Avenir-Book.ttf);
    font-weight: 300;
    }

    @font-face {
    font-family: 'Avenir';
    src: url(assets/fonts/Avenir/Avenir-Light.ttf);
    font-weight: 200;
    }

    @font-face {
    font-family: 'AvenirItalic';
    src: url(assets/fonts/Avenir/Avenir-BlackOblique.ttf);
    font-weight: 900;
    }

    @font-face {
    font-family: 'AvenirItalic';
    src: url(assets/fonts/Avenir/Avenir-HeavyOblique.ttf);
    font-weight: 700;
    }

    @font-face {
    font-family: 'AvenirItalic';
    src: url(assets/fonts/Avenir/Avenir-MediumOblique.ttf);
    font-weight: 500;
    }

    @font-face {
    font-family: 'AvenirItalic';
    src: url(assets/fonts/Avenir/Avenir-Oblique.ttf);
    font-weight: 400;
    }

    @font-face {
    font-family: 'AvenirItalic';
    src: url(assets/fonts/Avenir/Avenir-BookOblique.ttf);
    font-weight: 300;
    }

    @font-face {
    font-family: 'AvenirItalic';
    src: url(assets/fonts/Avenir/Avenir-LightOblique.ttf);
    font-weight: 200;
    }

    /* 'Averta' */
    @font-face {
    font-family: 'Averta';
    src: url(assets/fonts/Averta/Averta-Black.otf);
    font-weight: 900;
    }

    @font-face {
    font-family: 'Averta';
    src: url(assets/fonts/Averta/Averta-ExtraBold.otf);
    font-weight: 800;
    }

    @font-face {
    font-family: 'Averta';
    src: url(assets/fonts/Averta/Averta-Bold.otf);
    font-weight: 700;
    }

    @font-face {
    font-family: 'Averta';
    src: url(assets/fonts/Averta/Averta-SemiBold.otf);
    font-weight: 600;
    }

    @font-face {
    font-family: 'Averta';
    src: url(assets/fonts/Averta/Averta-Regular.otf);
    font-weight: 400;
    }

    @font-face {
    font-family: 'Averta';
    src: url(assets/fonts/Averta/Averta-Light.otf);
    font-weight: 300;
    }

    @font-face {
    font-family: 'Averta';
    src: url(assets/fonts/Averta/Averta-Thin.otf);
    font-weight: 200;
    }

    @font-face {
    font-family: 'Averta';
    src: url(assets/fonts/Averta/Averta-ExtraThin.otf);
    font-weight: 100;
    }

    @font-face {
    font-family: 'AvertaItalic';
    src: url(assets/fonts/Averta/Averta-BlackItalic.otf);
    font-weight: 900;
    }

    @font-face {
    font-family: 'AvertaItalic';
    src: url(assets/fonts/Averta/Averta-ExtraBoldItalic.otf);
    font-weight: 800;
    }

    @font-face {
    font-family: 'AvertaItalic';
    src: url(assets/fonts/Averta/Averta-BoldItalic.otf);
    font-weight: 700;
    }

    @font-face {
    font-family: 'AvertaItalic';
    src: url(assets/fonts/Averta/Averta-SemiBoldItalic.otf);
    font-weight: 600;
    }

    @font-face {
    font-family: 'AvertaItalic';
    src: url(assets/fonts/Averta/Averta-RegularItalic.otf);
    font-weight: 400;
    }

    @font-face {
    font-family: 'AvertaItalic';
    src: url(assets/fonts/Averta/Averta-LightItalic.otf);
    font-weight: 300;
    }

    @font-face {
    font-family: 'AvertaItalic';
    src: url(assets/fonts/Averta/Averta-ThinItalic.otf);
    font-weight: 200;
    }

    @font-face {
    font-family: 'AvertaItalic';
    src: url(assets/fonts/Averta/Averta-ExtraThinItalic.otf);
    font-weight: 100;
    }

    /* 'Palantino' */
    @font-face {
    font-family: 'Palantino';
    src: url(assets/fonts/Palantino/Palantino-Bold.ttf);
    font-weight: 700;
    }

    @font-face {
    font-family: 'Palantino';
    src: url(assets/fonts/Palantino/Palantino-Roman.ttf);
    font-weight: 400;
    }

    @font-face {
    font-family: 'PalantinoItalic';
    src: url(assets/fonts/Palantino/Palantino-BoldItalic.ttf);
    font-weight: 700;
    }

    @font-face {
    font-family: 'PalantinoItalic';
    src: url(assets/fonts/Palantino/Palantino-Italic.ttf);
    font-weight: 400;
    }
`
