import React, {
    useState
} from "react";
import Star from './Star';
import {
    StarsContainer
} from './StarStyled';

const MAX_RATING = process.env.REACT_APP_MAX_RATING;

const Stars = (props) => {
	const { onStarClicked, rating, readOnly } = props;
    const [originalRating, setOriginalRating] = useState(rating);
    const [newRating, setNewRating] = useState(rating);
    const [isReadOnly] = useState(readOnly);
    
    const handleStarHovered = (starRating) => {
        !isReadOnly && setNewRating(starRating);
    };

    const handleStarHoverOut = () => {
        !isReadOnly && setNewRating(originalRating);
    }

    const handleStarClicked = (starRating) => {
        if (isReadOnly) return;

        onStarClicked(starRating);
        setNewRating(starRating);
        setOriginalRating(starRating);
    };

    const StarsList = [];

	while (StarsList.length < MAX_RATING) {
		const   starValue = StarsList.length + 1,
                key = starValue + Date.now();
        debugger;
        StarsList.push(
			<Star
				active={StarsList.length < newRating}
				key={key}
                onHover={handleStarHovered}
                onHoverOut={handleStarHoverOut}
                onClick={handleStarClicked}
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