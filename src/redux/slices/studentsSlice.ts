import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export interface SudentElement {
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

interface StudentsSliceState {
	list: SudentElement[];
	status: "loading" | "success" | "error";
}

const initialState: StudentsSliceState = {
	list: [],
	status: "loading",
};

interface FetchStudentsParams {
	sortProp: string;
	searchProp?: string;
}

export const fetchStudents = createAsyncThunk("students/fetchStudents", async ({ sortProp, searchProp }: FetchStudentsParams, { rejectWithValue }) => {
	const sortQuery = `_sort=${sortProp}`;
	const searchByNameQuery = searchProp === "" ? "" : `&name_like=${searchProp}`;
	try {
		const { data } = await axios.get<SudentElement[]>(`http://localhost:3008/students?${sortQuery}${searchByNameQuery}`);
		return data as SudentElement[];
	} catch (error: any) {
		alert("Ошибка при получении списка студентов!");
		return rejectWithValue(error.message);
	}
});

export const deleteStudent = createAsyncThunk("students/deleteStudent", async ({ id }: SudentElement, { rejectWithValue, dispatch }) => {
	try {
		await axios.delete<SudentElement[]>(`http://localhost:3008/students/${id}`);
		dispatch(removeStudent({ id }));
	} catch (error: any) {
		alert("Ошибка при удалении студента!");
		return rejectWithValue(error.message);
	}
});

export const studentsSlice = createSlice({
	name: "students",
	initialState,
	reducers: {
		getStudentsList(state, action) {
			state.list = action.payload;
		},
		removeStudent(state, action) {
			state.list = state.list.filter((list) => list.id !== action.payload.id);
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchStudents.pending, (state, action) => {
			state.status = "loading";
			state.list = [];
		});
		builder.addCase(fetchStudents.fulfilled, (state, action) => {
			state.list = action.payload;
			state.status = "success";
		});
		builder.addCase(fetchStudents.rejected, (state, action) => {
			state.status = "error";
			state.list = [];
		});
	},
});

export const { getStudentsList, removeStudent } = studentsSlice.actions;

export default studentsSlice.reducer;

export const selectStudents = (state: RootState) => state.students.list;
