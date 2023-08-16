import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ParsedQs } from "qs";

export type Sort = {
	name?: string;
	sortProperty: "name&_order=asc" | "name&_order=desc" | "birthday&_order=asc" | "birthday&_order=desc" | "rating&_order=asc" | "rating&_order=desc" | "color&_order=desc" | "color&_order=asc" | string | ParsedQs | string[] | ParsedQs[] | undefined;
	searchValue?: string;
};

interface FilterSliceState {
	searchValue: string;
	sort: Sort;
}

const initialState: FilterSliceState = {
	searchValue: "",
	sort: {
		name: "Имя А-Я",
		sortProperty: "name&_order=asc",
	},
};

export const filterSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setSort(state, action: PayloadAction<Sort>) {
			state.sort = action.payload;
		},
		setParseSort(state, action) {
			state.sort = action.payload.sort;
		},
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload;
		},
	},
});

export const selectorSort = (state: RootState) => state.filter.sort;
export const selectorSortSearch = (state: RootState) => state.filter.searchValue;

export const { setSort, setParseSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
