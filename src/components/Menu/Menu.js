import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavContainer = styled.nav`
	justify-content: center;
	display: flex;
	flex: 3;
	flex-direction: row;

	a {
		align-items: center;
		display: flex;
		flex-direction: row;
		padding: 10px;
		text-decoration: none;

		&:hover {
			background-color: #eee;
		}
		&:active {
			color: initial;
		}
	}
`;

const Menu = () => {
	return (
		<NavContainer>
			<Link to="/search">
				Search
			</Link>
			<Link to="/myList">
				My List
			</Link>
		</NavContainer>
	);
};

export default Menu;