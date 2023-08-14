import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SudentElement, deleteStudent, fetchStudents, removeStudent, selectStudents } from "../../../../redux/slices/studentsSlice";

// interface StudentProps {
// 	id: number;
// 	email: string;
// 	name: string;
// 	sex: string;
// 	specialty: string;
// 	group: string;
// 	color: string;
// 	rating: number;
// 	birthday: string;
// 	avatar: string;
// }

const calculateAge = (birthday: string) => {
	const birthDate = new Date(birthday);
	const currentDate = new Date();

	let age = currentDate.getFullYear() - birthDate.getFullYear();

	if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
		age--;
	}

	return age;
};

const StudentsCard: React.FC<SudentElement> = ({ id, name, specialty, group, birthday, rating, color, avatar }) => {
	const dispatch = useDispatch();

	const age = calculateAge(birthday);

	const handleDelete = () => {
		// @ts-ignore
		dispatch(deleteStudent({ id }));
	};

	return (
		<div className="students-card" key={id}>
			<div className="students-card__header">
				<div className="students-card__student">
					<div className="students-card__avatar">
						<img src={avatar} alt="" />
					</div>
					<div className="students-card__info">
						<h2 className="students-card__info-name">{name}</h2>
						<div className="students-card__info-more">
							<div className="students-card__info-color">
								<div className="students-card__info-color-shape" style={{ backgroundColor: color }} title={color}></div>
							</div>
							<div className="students-card__info-rating">
								<div className="students-card__info-rating-icon">
									<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9.95487 3.75057C9.83473 3.3668 9.50679 3.11883 9.11942 3.11883H6.62136L5.83471 0.629359C5.71379 0.246668 5.38653 0 5.00027 0C4.99904 0 4.99777 -1.11798e-08 4.99654 2.03393e-05C4.60871 0.00160768 4.28158 0.251328 4.16318 0.636217L3.39946 3.11883H0.880602C0.492256 3.11883 0.164059 3.36764 0.044505 3.75267C-0.0750685 4.1377 0.0510471 4.5397 0.365809 4.77679L2.40383 6.3119L1.61937 8.79448C1.49796 9.17869 1.62197 9.58127 1.93528 9.82006C2.09264 9.94001 2.27326 10 2.454 10C2.6331 9.99998 2.81229 9.94104 2.96887 9.82309L5.01043 8.28535L7.02773 9.82051C7.3407 10.0587 7.74601 10.0598 8.06027 9.8235C8.37452 9.58717 8.50112 9.18596 8.38284 8.80136L7.61697 6.3119L9.63767 4.77416C9.95052 4.5361 10.075 4.13432 9.95487 3.75057Z" fill="black" />
									</svg>
								</div>
								<p className="students-card__info-rating-ratio">{rating}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="students-card__delete" onClick={handleDelete}>
					<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.91178 21.16C9.95918 21.6463 10.3858 22 10.9073 22H19.0924C19.6138 22 20.0404 21.6315 20.0879 21.16L21.0043 12.2H8.9953L9.91178 21.16ZM17.0066 15C17.0066 14.7494 17.2278 14.5284 17.5122 14.5284C17.7809 14.5284 18.0179 14.7347 18.0179 15V19.2C18.0179 19.4505 17.7967 19.6715 17.5122 19.6715C17.2436 19.6715 17.0066 19.4652 17.0066 19.2V15ZM14.4942 15C14.4942 14.7494 14.7154 14.5284 14.9998 14.5284C15.2684 14.5284 15.5055 14.7347 15.5055 15V19.2C15.5055 19.4505 15.2842 19.6715 14.9998 19.6715C14.7312 19.6715 14.4942 19.4652 14.4942 19.2V15ZM11.9976 15C11.9976 14.7494 12.2188 14.5284 12.5032 14.5284C12.7718 14.5284 13.0088 14.7347 13.0088 15V19.2C13.0088 19.4505 12.7876 19.6715 12.5032 19.6715C12.2346 19.6715 11.9976 19.4652 11.9976 19.2V15Z" fill="black" />
						<path className="cup" d="M21.0045 9.4H17.0068V8.92842C17.0068 8.41263 16.5643 8 16.0113 8H14.0045C13.4515 8 13.009 8.41263 13.009 8.92842V9.4H8.99549C8.44244 9.4 8 9.81263 8 10.3284C8 10.8442 8.44244 11.2568 8.99549 11.2568H21.0045C21.5576 11.2568 22 10.8442 22 10.3284C22 9.81263 21.5576 9.4 21.0045 9.4Z" fill="black" />
					</svg>
				</div>
			</div>
			<div className="students-card__body">
				<ul className="students-card__list">
					<li className="students-card__list-item">{age}</li>
					<li className="students-card__list-item">{specialty}</li>
					<li className="students-card__list-item">{group}</li>
				</ul>
			</div>
		</div>
	);

	// Отсюда переношу рендер карточек в StudentsList -------------------------------
	// const studentCard = useSelector(selectStudents).map(({ id, name, specialty, group, birthday, rating, color, avatar }, i) => {
	// 	const age = calculateAge(birthday);

	// 	return (
	// 		<div className="students-card" key={id}>
	// 			<div className="students-card__header">
	// 				<div className="students-card__student">
	// 					<div className="students-card__avatar">
	// 						<img src={avatar} alt="" />
	// 					</div>
	// 					<div className="students-card__info">
	// 						<h2 className="students-card__info-name">{name}</h2>
	// 						<div className="students-card__info-more">
	// 							<div className="students-card__info-color">
	// 								<div className="students-card__info-color-shape" style={{ backgroundColor: color }} title={color}></div>
	// 							</div>
	// 							<div className="students-card__info-rating">
	// 								<div className="students-card__info-rating-icon">
	// 									<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
	// 										<path d="M9.95487 3.75057C9.83473 3.3668 9.50679 3.11883 9.11942 3.11883H6.62136L5.83471 0.629359C5.71379 0.246668 5.38653 0 5.00027 0C4.99904 0 4.99777 -1.11798e-08 4.99654 2.03393e-05C4.60871 0.00160768 4.28158 0.251328 4.16318 0.636217L3.39946 3.11883H0.880602C0.492256 3.11883 0.164059 3.36764 0.044505 3.75267C-0.0750685 4.1377 0.0510471 4.5397 0.365809 4.77679L2.40383 6.3119L1.61937 8.79448C1.49796 9.17869 1.62197 9.58127 1.93528 9.82006C2.09264 9.94001 2.27326 10 2.454 10C2.6331 9.99998 2.81229 9.94104 2.96887 9.82309L5.01043 8.28535L7.02773 9.82051C7.3407 10.0587 7.74601 10.0598 8.06027 9.8235C8.37452 9.58717 8.50112 9.18596 8.38284 8.80136L7.61697 6.3119L9.63767 4.77416C9.95052 4.5361 10.075 4.13432 9.95487 3.75057Z" fill="black" />
	// 									</svg>
	// 								</div>
	// 								<p className="students-card__info-rating-ratio">{rating}</p>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</div>
	// 				{/* @ts-ignore */}
	// 				<div className="students-card__delete" onClick={() => dispatch(deleteStudent({ id }))}>
	// 					<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
	// 						<path d="M9.91178 21.16C9.95918 21.6463 10.3858 22 10.9073 22H19.0924C19.6138 22 20.0404 21.6315 20.0879 21.16L21.0043 12.2H8.9953L9.91178 21.16ZM17.0066 15C17.0066 14.7494 17.2278 14.5284 17.5122 14.5284C17.7809 14.5284 18.0179 14.7347 18.0179 15V19.2C18.0179 19.4505 17.7967 19.6715 17.5122 19.6715C17.2436 19.6715 17.0066 19.4652 17.0066 19.2V15ZM14.4942 15C14.4942 14.7494 14.7154 14.5284 14.9998 14.5284C15.2684 14.5284 15.5055 14.7347 15.5055 15V19.2C15.5055 19.4505 15.2842 19.6715 14.9998 19.6715C14.7312 19.6715 14.4942 19.4652 14.4942 19.2V15ZM11.9976 15C11.9976 14.7494 12.2188 14.5284 12.5032 14.5284C12.7718 14.5284 13.0088 14.7347 13.0088 15V19.2C13.0088 19.4505 12.7876 19.6715 12.5032 19.6715C12.2346 19.6715 11.9976 19.4652 11.9976 19.2V15Z" fill="black" />
	// 						<path className="cup" d="M21.0045 9.4H17.0068V8.92842C17.0068 8.41263 16.5643 8 16.0113 8H14.0045C13.4515 8 13.009 8.41263 13.009 8.92842V9.4H8.99549C8.44244 9.4 8 9.81263 8 10.3284C8 10.8442 8.44244 11.2568 8.99549 11.2568H21.0045C21.5576 11.2568 22 10.8442 22 10.3284C22 9.81263 21.5576 9.4 21.0045 9.4Z" fill="black" />
	// 					</svg>
	// 				</div>
	// 			</div>
	// 			<div className="students-card__body">
	// 				<ul className="students-card__list">
	// 					<li className="students-card__list-item">{age}</li>
	// 					<li className="students-card__list-item">{specialty}</li>
	// 					<li className="students-card__list-item">{group}</li>
	// 				</ul>
	// 			</div>
	// 		</div>
	// 	);
	// });

	// return <>{studentCard}</>;
	// Досюда переношу рендер карточек в StudentsList -------------------------------
};

export default StudentsCard;
