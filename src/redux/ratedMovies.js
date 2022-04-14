import { createSlice } from "@reduxjs/toolkit";

const ratedMovies = createSlice({
	name: 'rated',
	initialState: {
		value: [],
	},
	reducers: {
		addRated: (state, action) => {
			state.value.push(action.payload);
		}
	}
});

export const { addRated } = ratedMovies.actions;

export default ratedMovies.reducer;