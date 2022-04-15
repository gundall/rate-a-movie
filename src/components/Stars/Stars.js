import React, {
    useEffect,
    useRef,
    useState
} from "react";

import { shake } from '../../utils/animations';
import Star from './Star';
import {
    StarsContainer
} from '../../themes/bn/StarStyled';

const MAX_RATING = process.env.REACT_APP_MAX_RATING;

const Stars = (props) => {
	const { onStarClicked, rating, readOnly, starSize } = props;
    const [originalRating, setOriginalRating] = useState(rating);
    const [newRating, setNewRating] = useState(rating);
    const [isReadOnly] = useState(readOnly);

    const starsContainer = useRef();
    
    const handleStarHovered = (starRating) => {
        !isReadOnly && setNewRating(starRating);
    };

    const handleStarHoverOut = () => {
        !isReadOnly && setNewRating(originalRating);
    };

    const handleStarClicked = (starRating) => {
        if (isReadOnly) return;

        onStarClicked(starRating);
        setNewRating(starRating);
        setOriginalRating(starRating);
    };

    useEffect(() => {
        const activeStars = starsContainer.current.querySelectorAll('.active');

        if (activeStars !== null) {
            const toShake = [];

            activeStars.forEach((star) => toShake.push(star));
            // Usamos toShake.length + 1 para que crezca a medida
            // de que la estrella sea superior.
            shake(toShake, (toShake.length + 2) * 2.5, 0.06);
        }
    }, [newRating]);

    const StarsList = [];

	while (StarsList.length < MAX_RATING) {
		const   starValue = StarsList.length + 1,
                key = starValue + Date.now();

        StarsList.push(
            <Star
                active={StarsList.length < newRating}
                key={key}
                onHover={handleStarHovered}
                onHoverOut={handleStarHoverOut}
                onClick={handleStarClicked}
                readOnly={readOnly}
                size={starSize}
                value={starValue}
            />
        );
	}

	return (
        <StarsContainer ref={starsContainer}>
            {StarsList}
        </StarsContainer>
    );
};
export default Stars;