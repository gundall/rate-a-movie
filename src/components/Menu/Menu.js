import React from "react";
import { NavLink } from "react-router-dom";
import { gsap } from 'gsap';

import {
	NavContainer
} from '../../themes/bn/MenuStyled';

const Menu = () => {
	const handleButtonHover = (e) => {
		gsap.to(e.currentTarget, {
			duration: 0.25,
			scale: 0.9,
		});
	};

	const handleButtonHoverOut = (e) => {
		gsap.to(e.currentTarget, {
			scale: 1
		});
	};

	return (
		<NavContainer>
			<NavLink
				onMouseEnter={handleButtonHover}
				onMouseLeave={handleButtonHoverOut}
				style={({ isActive }) => {
					return isActive
						? {
							backgroundColor: '#000',
							color: '#fff'
						}
						: {};
				}}
				to="/search"
			>
				Search
			</NavLink>
			<NavLink
				onMouseEnter={handleButtonHover}
				onMouseLeave={handleButtonHoverOut}
				style={({ isActive }) => {
					return isActive
						? {
							backgroundColor: '#000',
							color: '#fff'
						}
						: {};
				}}
				to="/myList"
			>
				My List
			</NavLink>
		</NavContainer>
	);
};

export default Menu;