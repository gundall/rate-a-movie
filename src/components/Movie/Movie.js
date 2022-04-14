import React from 'react';
import PropTypes from 'prop-types';
import {
    DataContainer,
    Image,
    MainContainer,
	MainWrapper,
    Title
} from './MovieStyled';
import Stars from '../Stars/Stars';

const DEFAULT_MOVIE_POSTER = process.env.REACT_APP_DEFAULT_MOVIE_POSTER;

const Movie = (props) => {
	const {id, image, onMovieClick, rating, title} = props;

	const 	useDefaultImage = !image || image === null || image === '',
			imageUrl = useDefaultImage
				? DEFAULT_MOVIE_POSTER
				: `${process.env.REACT_APP_MOVIES_POSTER_BASE_URL}${image}`; // Viene con '/' delante

	// Handlers.
	const handleMovieClick = (e) => {
		e.preventDefault();
		onMovieClick(id);
	};

	return (
		<MainWrapper
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
						<Stars
							rating={3}
							readOnly={rating}
							starSize={20}
						/>
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