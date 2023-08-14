import { configureStore } from "@reduxjs/toolkit";
import students from "./slices/studentsSlice";
import filter from "./slices/filterSlice";

export const store = configureStore({
	reducer: {
		students,
		filter,
		// paginationFilter,
		// cart
	},
});

// export default store;
export type RootState = ReturnType<typeof store.getState>;
