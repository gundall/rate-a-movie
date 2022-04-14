import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import './App.css';

import Menu from './components/Menu/Menu';
import SearchInput from './components/SearchInput/SearchInput';

import {
	getMoviesByTitle,
	getTopRatedMovies
} from './redux/moviesSearch';
import { setLastSearch } from './redux/search';

const AppContainer = styled.div`
	align-items: stretch;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: flex-start;
	overflow: hidden;
`;
const TopBar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	box-shadow: #fff 0px 4px 2px 2px;
`;

const LogoHeader = styled.h1`
	flex: 1;
    margin-left: 30px;
`;
const Logo = ({ children }) => {
	return (
		<LogoHeader>
			{children}
		</LogoHeader>
	);
};

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
			<TopBar>
				<Logo>Rate-a-movie</Logo>
				<Menu />
				<SearchInput
					onSubmit={handleSubmit}
					onSearch={handleSearch}
				/>
			</TopBar>

			{/* CONTENIDO PROVISTO POR EL ROUTER */}
			<Outlet />
		</AppContainer>
	);
}

export default App;
