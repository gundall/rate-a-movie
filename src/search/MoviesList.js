import React from "react";
import {
	ListContainer
} from '../themes/bn/MoviesListStyled';

import Movie from '../components/Movie/Movie';

const MoviesList = (props) => {
    const { movies, onMovieClick } = props;

    const List = movies.map((movie) => {
		const   {id, poster_path, /* rating, */ title} = movie,
                salt = Date.now();
		return (
			<Movie
                id={id}
				image={poster_path}
				key={id + salt}
                onMovieClick={onMovieClick}
				// rating={rating}
				title={title}
			/>
		)
	});

	return (
		<ListContainer>
			{List}
		</ListContainer>
	);
};

export default MoviesList;