import styled from 'styled-components';
import menuImg from '../../assets/icons-menu-250.png';

const TOPBAR_BG_COLOR = '#fff';
const MENU_BUTTON_SIZES = {
    default: 35,
    desktop: 40
}

const TOPBAR_SIZES = {
    default: 75,
    desktop: 90
}

const TopBarContainer = styled.div`
    background-color: ${TOPBAR_BG_COLOR};
	display: flex;
	flex-direction: row;
    height: ${TOPBAR_SIZES.default}px;
	justify-content: space-between;

    @media screen and (min-width: 477px) {
        height: ${TOPBAR_SIZES.desktop}px;
    }
`;

// MOBILE
const TopBarMobile = styled.div`
    align-items: center;
    box-shadow: #fff 0px 4px 2px 2px;
	display: flex;
	flex-direction: row;
    height: ${TOPBAR_SIZES.default}px;
    justify-content: flex-start;

    @media screen and (min-width: 477px) {
        height: ${TOPBAR_SIZES.desktop}px;
	    justify-content: space-between;
    }
`;
const MenuMobileWrapper = styled.div`
    background-color: ${TOPBAR_BG_COLOR}7;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
`;
const MenuMobile = styled.div`
    align-items: stretch;
    background-color: ${TOPBAR_BG_COLOR};
    bottom: 0;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    z-index: 2;
`;
const ToggleMenu = styled.button`
    background-color: transparent;
    background-image: url(${menuImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    height: ${MENU_BUTTON_SIZES.default}px;
    margin: ${(TOPBAR_SIZES.default - MENU_BUTTON_SIZES.default) / 2}px;
    width: ${MENU_BUTTON_SIZES.default}px;

    @media screen and (min-width: 477px) {
        height: ${MENU_BUTTON_SIZES.desktop}px;
        margin: ${(TOPBAR_SIZES.desktop - MENU_BUTTON_SIZES.desktop) / 2}px;
        width: ${MENU_BUTTON_SIZES.desktop}px;
    }
`
export {
    ToggleMenu,
    MenuMobile,
    MenuMobileWrapper,
    TopBarContainer,
    TopBarMobile
}