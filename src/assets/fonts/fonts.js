import { createGlobalStyle } from 'styled-components';

import quicksandWoff from './quicksand/quicksand-regular.woff';
import quicksandWoff2 from './quicksand/quicksand-regular.woff2';

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
        font-weight: 300;
        font-style: normal;
    }
`;