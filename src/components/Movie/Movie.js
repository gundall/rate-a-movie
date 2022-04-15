import React from 'react';
import PropTypes from 'prop-types';

import {
    DataContainer,
    Image,
    MainContainer,
	MainWrapper,
    Title
} from '../../themes/bn/MovieStyled';
import Stars from '../Stars/Stars';
import {
	shake
} from '../../utils/animations';
import defaultPoster from '../../assets/ticket.jpg';


const Movie = (props) => {
	const {id, image, onMovieClick, rating, title} = props;

	const 	useDefaultImage = !image || image === null || image === '',
			imageUrl = useDefaultImage
				? defaultPoster
				: `${process.env.REACT_APP_MOVIES_POSTER_BASE_URL}${image}`; // Viene con '/' delante

	// Handlers.
	const handleMovieClick = (e) => {
		e.preventDefault();
		onMovieClick(id);
	};
	const handleMovieHover = (e) => {
		shake(e.currentTarget);
	};

	return (
		<MainWrapper
			onClick={handleMovieClick}
			onMouseEnter={handleMovieHover}
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
							rating={rating}
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