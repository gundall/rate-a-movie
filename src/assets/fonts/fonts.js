import { createGlobalStyle } from 'styled-components';

// Quicksand
import quicksandWoff from './quicksand-regular/quicksand-regular.woff';
import quicksandWoff2 from './quicksand-regular/quicksand-regular.woff2';

import quicksandBoldWoff from './quicksand-bold/quicksand-bold.woff';
import quicksandBoldWoff2 from './quicksand-bold/quicksand-bold.woff2';

import edoWoff from './edo/edo.woff';
import edoWoff2 from './edo/edo.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Quicksand';
        src: local('Quicksand'), local('Quicksand'),
        url(${quicksandWoff2}) format('woff2'),
        url(${quicksandWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Quicksand';
        src: local('Quicksand'), local('Quicksand'),
        url(${quicksandWoff2}) format('woff2'),
        url(${quicksandWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Quicksand';
        src: local('Quicksand'), local('Quicksand'),
        url(${quicksandBoldWoff2}) format('woff2'),
        url(${quicksandBoldWoff}) format('woff');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Quicksand';
        src: local('Quicksand'), local('Quicksand'),
        url(${quicksandBoldWoff2}) format('woff2'),
        url(${quicksandBoldWoff}) format('woff');
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: 'Edo';
        src: local('Edo'), local('Edo'),
        url(${edoWoff2}) format('woff2'),
        url(${edoWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Edo';
        src: local('Edo'), local('Edo'),
        url(${edoWoff2}) format('woff2'),
        url(${edoWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Edo';
        src: local('Edo'), local('Edo'),
        url(${edoWoff2}) format('woff2'),
        url(${edoWoff}) format('woff');
        font-weight: 600;
        font-style: normal;
    }
`;