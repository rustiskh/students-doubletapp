import { SortDirection } from "./types";
import { StudentElement } from "../../studentsSlice";

export function sortStudentsByProperty(array: StudentElement[], key: keyof StudentElement, direction: SortDirection = "asc", searchParam: string): StudentElement[] {
	const lowerSearchParam = searchParam.toLowerCase();

	const filteredArray = array.filter((item) => item.name.toLowerCase().includes(lowerSearchParam));

	const sortedArray = filteredArray.slice().sort((a, b) => {
		const compareResult = a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
		return direction === "asc" ? compareResult : -compareResult;
	});

	return sortedArray;
}
