import React, {
    useEffect,
    useRef,
    useState,
} from "react";
import { gsap } from 'gsap';

import {
    MenuMobile,
    MenuMobileWrapper,
    ToggleMenu,
    TopBarContainer,
    TopBarMobile
} from '../../themes/bn/TopBarStyled';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import SearchInput from '../SearchInput/SearchInput';

const TopBar = (props) => {
    const { logo, mobile, onSubmit, onSearch, search } = props;
    const [menuOpened, setMenuOpened] = useState(false);

    const menuRef = useRef();

    const toggleMenu = () => {
        setMenuOpened(!menuOpened);
    };
    const handleOutClick = (e) => {
        if (e.target.id === "menu-backdrop") {
            gsap.to(menuRef.current, {
                duration: 0.2,
                onComplete: setMenuOpened,
                onCompleteParams: [!menuOpened],
                x: 0
            });
        }
    }

    useEffect(() => {
        if (menuOpened) {
            gsap.to(menuRef.current, {
                duration: 0.2,
                x: menuRef.current.offsetWidth
            });
        }
    }, [menuOpened]);

    if (mobile) {
        return (
            <TopBarMobile>
                <ToggleMenu onClick={toggleMenu} />
                {
                    menuOpened &&
                        <MenuMobileWrapper
                            id="menu-backdrop"
                            onClick={handleOutClick}
                        >
                            <MenuMobile ref={menuRef}>
                                {logo &&
                                    <Logo />
                                }
                                <Menu />
                                {search &&
                                    <SearchInput
                                        onSubmit={onSubmit}
                                        onSearch={onSearch}
                                    />
                                }
                            </MenuMobile>
                        </MenuMobileWrapper>
                }
            </TopBarMobile>
        );
    };

    return (
        <TopBarContainer>
            {logo &&
                <Logo />
            }
            <Menu />
            {search &&
                <SearchInput
                    onSubmit={onSubmit}
                    onSearch={onSearch}
                />
            }
        </TopBarContainer>
    );
};

export default TopBar;

TopBar.defaultProps = {
    logo: true,
    mobile: false,
    search: true
}