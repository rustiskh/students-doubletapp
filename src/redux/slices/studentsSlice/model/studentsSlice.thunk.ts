import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { removeStudent } from "./studentsSlice";
import { FetchStudentsParams, StudentElement, StudentsResponse } from "./types";
import { sortStudentsByProperty } from "../../filterSlice/model/filterSlice.thunk";

export const fetchStudents = createAsyncThunk("students/fetchStudents", async (_, { rejectWithValue }) => {
	// const sortQuery = `_sort=${sortProp}`;
	// const searchByNameQuery = searchProp === "" ? "" : `&name_like=${searchProp}`;
	try {
		// const { data } = await axios.get<StudentElement[]>(`http://localhost:3008/students?${sortQuery}${searchByNameQuery}`);
		const { data } = await axios.get<StudentsResponse>(`https://front-assignment-api.2tapp.cc/api/persons`);
		console.log(data.students);
		// return sortStudentsByProperty(data.students, "name", "asc") as StudentElement[];
		return data.students as StudentElement[];
	} catch (error: any) {
		return rejectWithValue(error.message);
	}
});

export const deleteStudent = createAsyncThunk("students/deleteStudent", async (studentId: number, { rejectWithValue, dispatch }) => {
	try {
		console.log("Здесь отправляем запрос на сервер для удаления элемента");
		dispatch(removeStudent(studentId));
	} catch (error: any) {
		alert("Ошибка при удалении студента!");
		return rejectWithValue(error.message);
	}
});
