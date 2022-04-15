import { createSlice } from "@reduxjs/toolkit";

const ratedMovies = createSlice({
	name: 'rated',
	initialState: {
		value: [],
	},
	reducers: {
		addRated: (state, action) => {
			let movieIndex;
			const newRated = action.payload;
			const inArray = state.value.find((movie, i) => {
				const found = movie.id === newRated.id;
				movieIndex = i;
				return found
			});
			!inArray
				? state.value.push(newRated)
				: state.value[movieIndex] = newRated
		}
	}
});

export const { addRated } = ratedMovies.actions;
export default ratedMovies.reducer;