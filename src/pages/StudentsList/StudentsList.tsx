import React from "react";
import SearchField from "../../components/blocks/SearchField/SearchField";
import Sort from "../../components/blocks/Sort/Sort";
import StudentsCard from "../../components/blocks/StudentsList/StudentsCard/StudentsCard";
import StudentsTable from "../../components/blocks/StudentsList/StudentsTable/StudentsTable";

import useResize from "../../shared/hooks/use-resize/useResize";

const StudentsList: React.FC = () => {
	const { isScreenMob } = useResize();

	return (
		<div className="students container">
			<h1 className="students__title main-title">Студенты</h1>

			<div className="students__content">
				<div className="students__controls">
					<SearchField />
					<Sort />
				</div>
				<div className="students__wrapper">{!isScreenMob ? <StudentsTable /> : <StudentsCard />}</div>
			</div>
		</div>
	);
};

export default StudentsList;
