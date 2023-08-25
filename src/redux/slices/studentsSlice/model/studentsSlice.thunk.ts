import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { removeStudent } from "./studentsSlice";
import { StudentElement, StudentsResponse } from "./types";

export const fetchStudents = createAsyncThunk("students/fetchStudents", async (_, { rejectWithValue }) => {
	try {
		const { data } = await axios.get<StudentsResponse>(`https://front-assignment-api.2tapp.cc/api/persons`);
		console.log(data.students);
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
