import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moviesApi from '../api/api';
const addRatings = (input, rated) => {
	const results = [...[], ...input]; // Copiamos para no modificar original.

	// Si hay alguna valorada, añadimos también la valoración.
	rated && Array.isArray(rated) && rated.forEach((movie) => {
		const { id, rating } = movie;
		let indexToReplace;

		if (results && Array.isArray(results)) {
			const found = results.find((result, i) => {
				if (result.id === id) {
					indexToReplace = i;
					return true;
				}
				return false;
			});
			if (found !== undefined) {
				found.rating = rating;
				results[indexToReplace] = found;
			}
		}
	});
	return results;
}
const getTopRatedMovies = createAsyncThunk(
	'movies/getTopRatedMovies',
	async (arg, thunkAPI) => {
		const response = await moviesApi.getTopRatedMovies();
		const ratedMovies = thunkAPI.getState().rated.value;

		return addRatings(response.results, ratedMovies);
	}
);

const getMoviesByTitle = createAsyncThunk(
	'movies/getMoviesByTitle',
	async (title, thunkAPI) => {
		const response = await moviesApi.getMoviesByTitle(title);
		const ratedMovies = thunkAPI.getState().rated.value;

		return addRatings(response.results, ratedMovies);
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