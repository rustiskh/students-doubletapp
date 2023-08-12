import { configureStore } from "@reduxjs/toolkit";
// import sortFilter from './slices/filterSlice';
// import paginationFilter from './slices/paginationSlice';
// import cart from './slices/cartSlice';

export const store = configureStore({
	reducer: {
		// sortFilter,
		// paginationFilter,
		// cart
	},
});

export default store;
