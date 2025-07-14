import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	toggle: false,
};

const navSlice = createSlice({
	name: "nav",
	initialState,
	reducers: {
		toggleNav(state) {
			state.toggle = !state.toggle;
		},
		setNavState(state, action) {
			state.toggle = action.payload;
		},
	},
});

export const { toggleNav, setNavState } = navSlice.actions;

export default navSlice.reducer;
