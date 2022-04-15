import React, {
	useState
} from 'react';
import { useDispatch } from 'react-redux';
import {
	getMoviesByTitle,
	getTopRatedMovies
} from './redux/moviesSearch';
import { setLastSearch } from './redux/search';
import { Outlet } from "react-router-dom";

import TopBar from './components/TopBar/TopBar';
import Resizer from './components/Resizer/Resizer';
import { AppContainer } from './AppStyled';

const MAX_MOBILE_WIDTH = 476;

function App() {
	const dispatch = useDispatch();
	const [isMobile, setIsMobile] = useState(window.innerWidth <= MAX_MOBILE_WIDTH);

	const handleSubmit = (e) => {
		e.preventDefault();

		const 	input = e.target.querySelector('input[type="search"]'),
				value = input.value;

		// Actualizamos la búsuqeda.
		dispatch(setLastSearch(value));

		// Hacemos la llamada al thunk para que actualice
		// asíncronamente el estado global.
		(value && value !== '') && dispatch(getMoviesByTitle(value));
	};

	const handleSearch = (e) => {
		e.preventDefault();

		const value = e.target.value;

		// Hacemos la búsqueda por defecto.
		value === "" && dispatch(getTopRatedMovies());
	};

	const handleResize = () => {
		setIsMobile(window.innerWidth <= MAX_MOBILE_WIDTH);
	};

	return (
		<AppContainer>
			<Resizer
				ms={10}
				onResize={handleResize}
			>
				{/* TOPBAR */}
				<TopBar
					onSubmit={handleSubmit}
					onSearch={handleSearch}
					mobile={isMobile}
				/>

				{/* CONTENIDO PROVISTO POR EL ROUTER */}
				<Outlet />
			</Resizer>
		</AppContainer>
	);
}

export default App;
