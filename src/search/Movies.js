import React, {
	useEffect
} from "react";
import {
	useSelector,
	useDispatch
} from 'react-redux'
import { getTopRatedMovies } from '../redux/moviesSearch';
import MoviesList from "./MoviesList";

const Movies = () => {
	const movies = useSelector((state) => state.movies.value);
	const dispatch = useDispatch();

	const handleMovieClick = (id) => {
		console.log(`Muestra el modal para la peli: ${id}`);
	};
	const handleMovieRated = (id) => {
		console.log(`Añade la película ${id} a la lista de valoradas.`);
	};

	// Cargamos las mejor valoradas para la primera carga.
	useEffect(() => {
		dispatch(getTopRatedMovies());
	}, []);

	return (
		<MoviesList
			movies={movies}
			onMovieClick={handleMovieClick}
			onMovieRated={handleMovieRated}
		/>
	)
}

export default Movies;