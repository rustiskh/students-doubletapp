import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { fetchStudents } from "./studentsSlice.thunk";
import { StudentsSliceState } from "./types";

const initialState: StudentsSliceState = {
	list: [],
	status: "loading",
};

export const studentsSlice = createSlice({
	name: "students",
	initialState,
	reducers: {
		getStudentsList(state, action) {
			state.list = action.payload;
		},
		// ???????
		setSortedStudents: (state, action) => {
			state.list = action.payload;
		},
		removeStudent(state, action) {
			state.list = state.list.filter((list) => list.id !== action.payload);
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

export const { getStudentsList, removeStudent, setSortedStudents } = studentsSlice.actions;

export const students = studentsSlice.reducer;

export const selectStudents = (state: RootState) => state.students.list;
export const stateStudents = (state: RootState) => state.students;
