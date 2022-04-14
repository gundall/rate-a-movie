import styled from 'styled-components';

const NavContainer = styled.nav`
	justify-content: flex-start;
	display: flex;
	flex-direction: column;

	a {
		align-items: center;
		display: flex;
		flex-direction: row;
		padding: 10px;
		text-decoration: none;

		&:hover {
			background-color: #eee;
		}
		&:active,
        &:visited {
			color: initial;
		}
	}

	@media screen and (min-width: 477px) {
		justify-content: center;
		flex: 3;
		flex-direction: row;
	}
`;

export {
    NavContainer
};