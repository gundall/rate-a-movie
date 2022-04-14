import React, {
	useEffect,
	useState
} from "react";
import {
	useSelector,
	useDispatch
} from 'react-redux'
import { getTopRatedMovies } from '../redux/moviesSearch';
import { addRated } from '../redux/ratedMovies';

import MoviesList from "./MoviesList";
import Modal from '../components/Modal/Modal';

const Movies = () => {
	const [modalShown, setModalShown] = useState(false);
	const [modalData, setModalData] = useState({});
	const [selectedMovie, setSelectedMovie] = useState();
	const movies = useSelector((state) => state.movies.value);
	const dispatch = useDispatch();

	const getMovieFromId = (id) => {
		const movie = movies.filter((movie) => movie.id === id);
		return movie.length > 0 ? movie[0] : null;
	};
	const handleMovieClick = (id) => {
		console.log(`Muestra el modal para la peli: ${id}.`);
		const movieData = getMovieFromId(id);

		if (movieData !== null) {
			setSelectedMovie(id);
			setModalData(movieData);
			setModalShown(true);
		}
	};
	const handleMovieRated = (rating) => {
		console.log(`Añade la peli con id ${selectedMovie} a la lista de pelis valoradas.`);
		const movieToAdd = getMovieFromId(selectedMovie);

		if (movieToAdd !== null) {
			const ratedMovie = {
				... movieToAdd[0],
				rating
			};
			dispatch(addRated(ratedMovie));
		}
	};
	const handleModalClose = () => {
		setModalShown(false);
	}

	// Cargamos las mejor valoradas para la primera carga.
	useEffect(() => {
		dispatch(getTopRatedMovies());
	}, []);

	return (
		<>
			<MoviesList
				movies={movies}
				onMovieClick={handleMovieClick}
			/>
			{modalShown &&
				<Modal
					data={modalData}
					onModalClose={handleModalClose}
					onMovieRated={handleMovieRated}
				/>
			}
		</>
	)
}

export default Movies;