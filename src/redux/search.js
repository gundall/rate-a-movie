import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
	name: 'search',
	initialState: {
		value: '',
	},
	reducers: {
        setLastSearch: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setLastSearch } = search.actions;
export default search.reducer;