import { ParsedQs } from "qs";

export type Sort = {
	name?: string;
	sortProperty: "name&_order=asc" | "name&_order=desc" | "birthday&_order=asc" | "birthday&_order=desc" | "rating&_order=asc" | "rating&_order=desc" | "color&_order=desc" | "color&_order=asc" | string | ParsedQs | string[] | ParsedQs[] | undefined;
	searchValue?: string;
};

export interface FilterSliceState {
	searchValue: string;
	sort: Sort;
}
