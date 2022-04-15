import React from "react";
import PropTypes from 'prop-types';

import { beat } from '../../utils/animations';
import { Star } from '../../themes/bn/StarStyled';

const StarComponent = (props) => {
	const {active, onHover, onHoverOut, onClick, readOnly, size, value} = props;

	const handleStarClick = (e) => {
		beat(e.currentTarget, 1.5, 0.08, 1, () => {
			onClick(value);
		});
	};
	const handleMouseEnter = () => {
		onHover(value);
	};
	const handleMouseLeave = () => {
		onHoverOut();
	};

	return (
		<Star
			className={active ? 'active' : ''}
			filled={active}
			onClick={handleStarClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			readOnly={readOnly}
			size={size}
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