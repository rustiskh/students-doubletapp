import React from "react";
import SearchField from "../../components/blocks/SearchField/SearchField";
import Sort, { sortList } from "../../components/blocks/Sort/Sort";
import StudentsCard from "../../components/blocks/StudentsList/StudentsCard/StudentsCard";
import StudentsTable from "../../components/blocks/StudentsList/StudentsTable/StudentsTable";

import useResize from "../../shared/hooks/use-resize/useResize";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../shared/hooks/redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
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
			<div className="students__header">
				<h1 className="students__title main-title">Студенты</h1>
				<Link to="student-add" className="students__add-btn">
					<div className="students__add-btn-icon">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2 9.99999C2 9.42369 2.46718 8.95651 3.04348 8.95651H16.9565C17.5328 8.95651 18 9.42369 18 9.99999C18 10.5763 17.5328 11.0435 16.9565 11.0435H3.04348C2.46718 11.0435 2 10.5763 2 9.99999Z" fill="white" />
							<path d="M8.95679 3.04348C8.95679 2.46718 9.42397 2 10.0003 2C10.5766 2 11.0437 2.46718 11.0437 3.04348V16.9565C11.0437 17.5328 10.5766 18 10.0003 18C9.42397 18 8.95679 17.5328 8.95679 16.9565V3.04348Z" fill="white" />
						</svg>
					</div>
					<span className="students__add-btn-text">Добавить студента</span>
				</Link>
			</div>

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
