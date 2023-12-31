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

export interface StudentsResponse {
	students: StudentElement[];
}

export interface StudentsSliceState {
	list: StudentElement[];
	status: "loading" | "success" | "error";
}

export interface FetchStudentsParams {
	sortProp: string;
	searchProp?: string;
}
