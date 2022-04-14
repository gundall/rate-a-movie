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
	'movies/getTopRatedMovies',
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
	reducers: {
		setMovies: (state, action, thunk) => {
			state.value = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getTopRatedMovies.fulfilled, (state, action) => {
			state.value = action.payload;
		});
	}
});

export const { setMovies } = moviesSearch.actions; // Regular action creators
export { getTopRatedMovies, getMoviesByTitle } // Thunks
export default moviesSearch.reducer;