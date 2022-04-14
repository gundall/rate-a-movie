import React from "react";
import PropTypes from 'prop-types';
import { Star } from './StarStyled';

const StarComponent = (props) => {
	const {active, onHover, onHoverOut, onClick, value} = props;

	const handleStarClick = () => {
		onClick(value);
	};
	const handleMouseEnter = () => {
		onHover(value);
	};
	const handleMouseLeave = () => {
		onHoverOut();
	};

	return (
		<Star
			filled={active}
			onClick={handleStarClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		/>
	);
}

export default StarComponent;

StarComponent.propTypes = {
	active: PropTypes.bool,
	onHover: PropTypes.func,
	onHoverOut: PropTypes.func,
	onClick: PropTypes.func,
	readOnly: PropTypes.bool,
	value: function(props, propName) {
		// Si no es readOnly, necesitamos proporcionar a la estrella un valor.
        if (!props.readOnly && (props[propName] === undefined)) {
            return new Error('You must provide a value if prop readOnly === false.');
        }
    }
}