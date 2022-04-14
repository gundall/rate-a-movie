import { configureStore } from '@reduxjs/toolkit'
import moviesSearch from './redux/moviesSearch';
import ratedMovies from './redux/ratedMovies';

export default configureStore({
	reducer: {
		movies: moviesSearch,
		rated: ratedMovies
	}
})