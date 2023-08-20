import React from "react";
import { Link } from "react-router-dom";

const StudentsAdd: React.FC = () => {
	return (
		<div className="student-add container">
			<Link to="/" className="student-add__back-btn button-textual button-textual_icony">
				<div className="button-textual__icon">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.5 3.5L1 10.0567L7.5 16.6135" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M19 10H1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</div>
				<div className="button-textual__text">Назад к списку студентов</div>
			</Link>
			<div className="student-add__header">
				<h1 className="student-add__title main-title">Новый студент</h1>
			</div>

			<div className="student-add__content">Форма добавления</div>
		</div>
	);
};

export default StudentsAdd;
