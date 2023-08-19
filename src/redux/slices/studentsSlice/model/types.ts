import { ParsedQs } from "qs";

export interface StudentElement {
	id: number;
	email: string;
	name: string;
	sex: string;
	specialty: string;
	group: string;
	color: string;
	rating: number;
	birthday: string;
	avatar: string;
}

export interface StudentsSliceState {
	list: StudentElement[];
	status: "loading" | "success" | "error";
}

export interface FetchStudentsParams {
	sortProp: string | ParsedQs | string[] | ParsedQs[] | undefined;
	searchProp?: string | ParsedQs | string[] | ParsedQs[] | undefined;
}
