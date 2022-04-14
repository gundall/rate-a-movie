import React from 'react';
import PropTypes from 'prop-types';
import {
    DataContainer,
    Image,
    MainContainer,
	MainWrapper,
    Title
} from './MovieStyled';
import Star from '../Star';

const MAX_RATING = process.env.REACT_APP_MAX_RATING;
const DEFAULT_MOVIE_POSTER = process.env.REACT_APP_DEFAULT_MOVIE_POSTER;

const Movie = (props) => {
	const {id, image, onMovieClick, rating, title} = props;

	const 	useDefaultImage = !image || image === null || image === '',
			imageUrl = useDefaultImage
				? DEFAULT_MOVIE_POSTER
				: `${process.env.REACT_APP_MOVIES_POSTER_BASE_URL}${image}`; // Viene con '/' delante
	
	const getStarsFromRating = (rating) => {
		const stars = [];
	
		while (stars.length < MAX_RATING) {
			const key = Math.floor(Math.random() * 100) + 1 + Date.now();
			stars.push(
				<Star
					active={stars.length < rating}
					key={key}
				/>
			);
		}
	
		return stars;
	};

	// Handlers.
	const handleMovieClick = (e) => {
		onMovieClick(id);
	};

	return (
		<MainWrapper
			href="/#" // Previene warning.
			onClick={handleMovieClick}
		>
			<MainContainer>
				<Image
					default={useDefaultImage}
					src={imageUrl}
				/>
				<DataContainer>
					<Title>{title}</Title>
					{rating &&
						<div>{getStarsFromRating(rating)}</div>
					}
				</DataContainer>
			</MainContainer>
		</MainWrapper>
	)
}

export default Movie;

Movie.defaultProps = {
	onMovieClick: () => {console.log('No listener defined');}
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	image: PropTypes.string,
	onMovieClick: PropTypes.func,
	rating: PropTypes.number,
	title: PropTypes.string
};