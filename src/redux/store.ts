import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { students } from "./slices";
import { filter } from "./slices";

const rootReducer = combineReducers({
	students: students,
	filter: filter,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	});
};

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore["dispatch"];
