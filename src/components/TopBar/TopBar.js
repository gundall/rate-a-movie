import React from "react";
import {
    LogoHeader,
    TopBarContainer
} from './TopBarStyled';
import Menu from '../Menu/Menu';
import SearchInput from '../SearchInput/SearchInput';

const Logo = ({ children }) => {
	return (
		<LogoHeader>
			{children}
		</LogoHeader>
	);
};

const TopBar = (props) => {
    const { logo, onSubmit, onSearch, search } = props;

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
    )
}

export default TopBar;

TopBar.defaultProps = {
    logo: true,
    search: true
}