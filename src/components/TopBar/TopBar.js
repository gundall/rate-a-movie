import React, {
    useState
} from "react";
import {
    LogoHeader,
    MenuMobile,
    MenuMobileWrapper,
    ToggleMenu,
    TopBarContainer,
    TopBarMobile
} from './TopBarStyled';
import Menu from '../Menu/Menu';
import SearchInput from '../SearchInput/SearchInput';

const Logo = ({ children }) => {
	return (
		<LogoHeader className="logo">
			{children}
		</LogoHeader>
	);
};

const TopBar = (props) => {
    const { logo, mobile, onSubmit, onSearch, search } = props;
    const [menuOpened, setMenuOpened] = useState(false);

    const toggleMenu = () => {
        setMenuOpened(!menuOpened);
    };
    const handleOutClick = (e) => {
        e.target.id === "menu-backdrop"
            && setMenuOpened(!menuOpened);
    }

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
                            <MenuMobile>
                                {logo &&
                                    <Logo>Rate-a-movie</Logo>
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
                <Logo>Rate-a-movie</Logo>
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