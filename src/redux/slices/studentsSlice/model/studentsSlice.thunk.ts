import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { removeStudent } from "./studentsSlice";
import { FetchStudentsParams, StudentElement } from "./types";

export const fetchStudents = createAsyncThunk("students/fetchStudents", async ({ sortProp, searchProp }: FetchStudentsParams, { rejectWithValue }) => {
	const sortQuery = `_sort=${sortProp}`;
	const searchByNameQuery = searchProp === "" ? "" : `&name_like=${searchProp}`;
	try {
		const { data } = await axios.get<StudentElement[]>(`http://localhost:3008/students?${sortQuery}${searchByNameQuery}`);
		return data as StudentElement[];
	} catch (error: any) {
		return rejectWithValue(error.message);
	}
});

export const deleteStudent = createAsyncThunk("students/deleteStudent", async (studentId: number, { rejectWithValue, dispatch }) => {
	try {
		await axios.delete<StudentElement[]>(`http://localhost:3008/students/${studentId}`);
		dispatch(removeStudent(studentId));
	} catch (error: any) {
		alert("Ошибка при удалении студента!");
		return rejectWithValue(error.message);
	}
});
