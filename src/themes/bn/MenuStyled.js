import styled from 'styled-components';

const NavContainer = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	a {
		align-items: center;
		color: inherit;
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
			color: inherit;
		}
	}

	@media screen and (min-width: 477px) {
		justify-content: center;
		flex: 1;
		flex-direction: row;

		a {
			justify-content: center;
			min-width: 80px;
		}
	}
	@media screen and (min-width: 540px) and (max-width: 768px) {
		a {
			min-width: 90px;
		}
	}
	@media screen and (min-width: 768px) and (max-width: 1600px) {
		a {
			min-width: 120px;
		}
	}
	@media screen and (min-width: 1024px) {
		flex: 2;
	}
`;

export {
    NavContainer
};