import styled from 'styled-components';

const TopBarContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	box-shadow: #fff 0px 4px 2px 2px;
`;
const LogoHeader = styled.h1`
	flex: 1;
    margin-left: 30px;
`;

export {
    LogoHeader,
    TopBarContainer
}