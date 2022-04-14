import React from 'react';
import { useDispatch } from 'react-redux';
import {
	getMoviesByTitle,
	getTopRatedMovies
} from './redux/moviesSearch';
import { setLastSearch } from './redux/search';
import { Outlet } from "react-router-dom";

import TopBar from './components/TopBar/TopBar';
import { AppContainer } from './AppStyled';

const isMobile = window.screen.availWidth <= 476;

function App() {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		const 	input = e.target.querySelector('input[type="search"]'),
				value = input.value;

		// Actualizamos la búsuqeda.
		dispatch(setLastSearch(value));

		// Hacemos la llamada al thunk para que actualice
		// asíncronamente el estado global.
		(value && value !== '') && dispatch(getMoviesByTitle(value));
	}

	const handleSearch = (e) => {
		e.preventDefault();

		const value = e.target.value;

		// Actualizamos la búsuqeda.
		dispatch(setLastSearch(value));

		// Hacemos la búsqueda por defecto.
		value === "" && dispatch(getTopRatedMovies());
	}

	return (
		<AppContainer>
			{/* TOPBAR */}
			<TopBar
				onSubmit={handleSubmit}
				onSearch={handleSearch}
				mobile={isMobile}
			/>

			{/* CONTENIDO PROVISTO POR EL ROUTER */}
			<Outlet />
		</AppContainer>
	);
}

export default App;
