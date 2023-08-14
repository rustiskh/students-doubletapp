import React from "react";
import SearchField from "../../components/blocks/SearchField/SearchField";
import Sort from "../../components/blocks/Sort/Sort";
import StudentsCard from "../../components/blocks/StudentsList/StudentsCard/StudentsCard";
import StudentsTable from "../../components/blocks/StudentsList/StudentsTable/StudentsTable";

import useResize from "../../shared/hooks/use-resize/useResize";
import { useDispatch, useSelector } from "react-redux";
import { selectorSort, selectorSortSearch } from "../../redux/slices/filterSlice";
import { fetchStudents, selectStudents } from "../../redux/slices/studentsSlice";

const StudentsList: React.FC = () => {
	const { isScreenMob } = useResize();
	const dispatch = useDispatch();
	const sort = useSelector(selectorSort);
	const searchValue: string = useSelector(selectorSortSearch);

	React.useEffect(() => {
		// @ts-ignore
		dispatch(fetchStudents({ sortProp: sort.sortProperty, searchProp: searchValue }));
	}, [sort, searchValue]);

	const studentCard = useSelector(selectStudents);

	return (
		<div className="students container">
			<h1 className="students__title main-title">Студенты</h1>

			<div className="students__content">
				<div className="students__controls">
					<SearchField />
					<Sort />
				</div>
				<div className="students__wrapper">
					{!isScreenMob ? (
						<table className="students-table">
							<thead className="students-table__header">
								<tr className="">
									<th className="students-table__header-title col-1"></th>
									<th className="students-table__header-title col-2">ФИО</th>
									<th className="students-table__header-title col-3">Специальность</th>
									<th className="students-table__header-title col-4">Группа</th>
									<th className="students-table__header-title col-5">Возраст</th>
									<th className="students-table__header-title col-6">Рейтинг</th>
									<th className="students-table__header-title col-7"></th>
									<th className="students-table__header-title col-8"></th>
								</tr>
							</thead>
							<tbody className="students-table__body">
								{studentCard.map((obj) => (
									<StudentsTable key={obj.id} {...obj} />
								))}
							</tbody>
						</table>
					) : (
						studentCard.map((obj) => <StudentsCard key={obj.id} {...obj} />)
					)}
				</div>
			</div>
		</div>
	);
};

export default StudentsList;
