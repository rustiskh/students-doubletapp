export type Sort = {
	name?: string;
	key: "name" | "birthday" | "rating" | "color";
	direction: "asc" | "desc";
	searchValue?: string;
};

export interface FilterSliceState {
	searchValue: string;
	sort: Sort;
}

export type SortDirection = "asc" | "desc";
