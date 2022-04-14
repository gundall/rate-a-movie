import { configureStore } from '@reduxjs/toolkit'
import moviesSearch from './redux/moviesSearch';
import ratedMovies from './redux/ratedMovies';
import search from './redux/search';

export default configureStore({
	reducer: {
		movies: moviesSearch,
		rated: ratedMovies,
		search: search
	}
})