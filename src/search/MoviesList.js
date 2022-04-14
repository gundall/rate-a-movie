import React from "react";
import styled from 'styled-components';

import Movie from '../components/Movie/Movie';

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;

	@media screen and (min-width: 477px) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		overflow-y: auto;
	}
`;

const MoviesList = (props) => {
    const { movies, onMovieClick/* , onMovieRated  */} = props;

    const List = movies.map((movie) => {
		const   {id, poster_path, title} = movie,
                salt = Date.now();
		return (
			<Movie
                id={id}
				image={poster_path}
				key={id + salt}
                onMovieClick={onMovieClick}
				title={title}
			/>
		)
	});

	return (
		<ListContainer>
			{List.length > 0 
				? List
				: <h2>No movies available.</h2>
			}
		</ListContainer>
	);
};

export default MoviesList;