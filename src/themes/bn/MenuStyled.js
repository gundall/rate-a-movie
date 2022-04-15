import styled from 'styled-components';

const NavContainer = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	a {
		align-items: center;
		display: flex;
		flex-direction: row;
		padding: 10px;
		text-decoration: none;
		
		&:not(.active) {
			font-weight: 600;
		}

		&:hover {
			background-color: #ddd;
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

		a {
			justify-content: center;
			min-width: 120px;
		}
	}
`;

export {
    NavContainer
};