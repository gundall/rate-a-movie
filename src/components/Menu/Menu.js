import React from "react";
import { NavLink } from "react-router-dom";
import {
	NavContainer
} from './MenuStyled';

const Menu = () => {
	return (
		<NavContainer>
			<NavLink to="/search" style={({ isActive }) => {
				return isActive
					? {
						backgroundColor: '#000',
						color: '#fff'
					}
					: {};
			}}>
				Search
			</NavLink>
			<NavLink to="/myList" style={({ isActive }) => {
				return isActive
					? {
						backgroundColor: '#000',
						color: '#fff'
					}
					: {};
			}}>
				My List
			</NavLink>
		</NavContainer>
	);
};

export default Menu;