import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moviesApi from '../api/api';

const getTopRatedMovies = createAsyncThunk(
	'movies/getTopRatedMovies',
	async () => {
		const response = await moviesApi.getTopRatedMovies();
		return response.results;
	}
);

const getMoviesByTitle = createAsyncThunk(
	'movies/getMoviesByTitle',
	async (title) => {
		const response = await moviesApi.getMoviesByTitle(title);
		return response.results;
	}
);

const moviesSearch = createSlice({
	name: 'movies',
	initialState: {
		value: [],
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getTopRatedMovies.fulfilled, (state, action) => {
			state.value = action.payload;
		});
		builder.addCase(getMoviesByTitle.fulfilled, (state, action) => {
			state.value = action.payload;
		});
	}
});

export { getTopRatedMovies, getMoviesByTitle } // Thunks
export default moviesSearch.reducer;