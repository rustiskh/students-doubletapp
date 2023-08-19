import React from "react";
import SearchField from "../../components/blocks/SearchField/SearchField";
import Sort, { sortList } from "../../components/blocks/Sort/Sort";
import StudentsCard from "../../components/blocks/StudentsList/StudentsCard/StudentsCard";
import StudentsTable from "../../components/blocks/StudentsList/StudentsTable/StudentsTable";

import useResize from "../../shared/hooks/use-resize/useResize";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../shared/hooks/redux";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { fetchStudents, selectStudents, selectorSort, selectorSortSearch, setSort, stateStudents } from "../../redux/slices";

const StudentsList: React.FC = () => {
	const { isScreenMob } = useResize();
	const dispatch = useAppDispatch();
	const sort = useSelector(selectorSort);
	const { status } = useSelector(stateStudents);
	const searchValue: string = useSelector(selectorSortSearch);

	React.useEffect(() => {
		//если в адреске не было параметров - делайем запрос по-умолчанию
		if (!isSearch.current) {
			dispatch(fetchStudents({ sortProp: sort.sortProperty, searchProp: searchValue }));
		}

		isSearch.current = false;
	}, [dispatch, sort, searchValue]);

	const studentCard = useSelector(selectStudents);

	// Вшивание параметров в URL
	const navigate = useNavigate();
	// Не выводить при первом рендере
	const isMounted = React.useRef(false);
	// Парсим поиск
	const isSearch = React.useRef(false);

	React.useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortProperty: sort.sortProperty,
				searchValue,
			});
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [searchValue, sort, navigate]);

	// Парсим из адресной строки
	React.useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));

			const sortName = sortList.find((obj) => obj.sortProperty === params.sortProperty);

			dispatch(fetchStudents({ sortProp: params.sortProperty, searchProp: params.searchValue }));
			dispatch(setSort({ sortProperty: params.sortProperty, name: sortName?.name }));
			isSearch.current = true;
		}
	}, [dispatch]);

	return (
		<div className="students container">
			<h1 className="students__title main-title">Студенты</h1>

			<div className="students__content">
				<div className="students__controls">
					<SearchField />
					<Sort />
				</div>
				<div className="students__wrapper">
					{status === "error" ? (
						<p className="students__wrapper-status students__wrapper-status_error">Студенты потерялись по пути в аудиторию...</p>
					) : status === "loading" ? (
						<p className="students__wrapper-status students__wrapper-status_load">Загружаем список студентов...</p>
					) : !isScreenMob ? (
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
