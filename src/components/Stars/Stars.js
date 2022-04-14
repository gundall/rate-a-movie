import React, {
    useState
} from "react";
import Star from './Star';
import {
    StarsContainer
} from './StarStyled';

const MAX_RATING = process.env.REACT_APP_MAX_RATING;

const Stars = (props) => {
	const { onStarClicked, rating, readOnly, starSize } = props;
    const [newRating, setNewRating] = useState(rating);
    const [isReadOnly] = useState(readOnly);
    
    const handleStarHovered = (starRating) => {
        !isReadOnly && setNewRating(starRating);
    };

    const handleStarHoverOut = () => {
        !isReadOnly && setNewRating(rating);
    }

    const handleStarClicked = (starRating) => {
        if (isReadOnly) return;
        console.log(starRating);
        onStarClicked(starRating);
        setNewRating(starRating);
    };

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
                size={starSize}
                value={starValue}
			/>
		);
	}

	return (
        <StarsContainer>
            {StarsList}
        </StarsContainer>
    );
};
export default Stars;