import React from "react";

const StudentsTable = () => {
	return (
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
				<tr className="students-table__item">
					<td className="students-table__item-text">
						<div className="students-table__item-avatar">
							<img className="" src="https://fra1.digitaloceanspaces.com/front-assignment-api/avatar_1.jpg" alt="" />
						</div>
					</td>
					<td className="students-table__item-text">John doe</td>
					<td className="students-table__item-text">Speciality</td>
					<td className="students-table__item-text">Group A</td>
					<td className="students-table__item-text">24 yo</td>
					<td className="students-table__item-text">65 R</td>
					<td className="students-table__item-color">
						<div className="students-table__item-color-shape" style={{ backgroundColor: "red" }} title="red"></div>
					</td>
					<td className="students-table__item-text">
						<div className="students-table__item-delete ">
							<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9.91178 21.16C9.95918 21.6463 10.3858 22 10.9073 22H19.0924C19.6138 22 20.0404 21.6315 20.0879 21.16L21.0043 12.2H8.9953L9.91178 21.16ZM17.0066 15C17.0066 14.7494 17.2278 14.5284 17.5122 14.5284C17.7809 14.5284 18.0179 14.7347 18.0179 15V19.2C18.0179 19.4505 17.7967 19.6715 17.5122 19.6715C17.2436 19.6715 17.0066 19.4652 17.0066 19.2V15ZM14.4942 15C14.4942 14.7494 14.7154 14.5284 14.9998 14.5284C15.2684 14.5284 15.5055 14.7347 15.5055 15V19.2C15.5055 19.4505 15.2842 19.6715 14.9998 19.6715C14.7312 19.6715 14.4942 19.4652 14.4942 19.2V15ZM11.9976 15C11.9976 14.7494 12.2188 14.5284 12.5032 14.5284C12.7718 14.5284 13.0088 14.7347 13.0088 15V19.2C13.0088 19.4505 12.7876 19.6715 12.5032 19.6715C12.2346 19.6715 11.9976 19.4652 11.9976 19.2V15Z" fill="black" />
								<path className="cup" d="M21.0045 9.4H17.0068V8.92842C17.0068 8.41263 16.5643 8 16.0113 8H14.0045C13.4515 8 13.009 8.41263 13.009 8.92842V9.4H8.99549C8.44244 9.4 8 9.81263 8 10.3284C8 10.8442 8.44244 11.2568 8.99549 11.2568H21.0045C21.5576 11.2568 22 10.8442 22 10.3284C22 9.81263 21.5576 9.4 21.0045 9.4Z" fill="black" />
							</svg>
						</div>
					</td>
				</tr>
				<tr className="students-table__item">
					<td className="students-table__item-text">
						<div className="students-table__item-avatar">
							<img className="" src="https://fra1.digitaloceanspaces.com/front-assignment-api/avatar_1.jpg" alt="" />
						</div>
					</td>
					<td className="students-table__item-text">John doe</td>
					<td className="students-table__item-text">Speciality</td>
					<td className="students-table__item-text">Group A</td>
					<td className="students-table__item-text">24 yo</td>
					<td className="students-table__item-text">65 R</td>
					<td className="students-table__item-color">
						<div className="students-table__item-color-shape" style={{ backgroundColor: "green" }} title="red"></div>
					</td>
					<td className="students-table__item-text">
						<div className="students-table__item-delete ">
							<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9.91178 21.16C9.95918 21.6463 10.3858 22 10.9073 22H19.0924C19.6138 22 20.0404 21.6315 20.0879 21.16L21.0043 12.2H8.9953L9.91178 21.16ZM17.0066 15C17.0066 14.7494 17.2278 14.5284 17.5122 14.5284C17.7809 14.5284 18.0179 14.7347 18.0179 15V19.2C18.0179 19.4505 17.7967 19.6715 17.5122 19.6715C17.2436 19.6715 17.0066 19.4652 17.0066 19.2V15ZM14.4942 15C14.4942 14.7494 14.7154 14.5284 14.9998 14.5284C15.2684 14.5284 15.5055 14.7347 15.5055 15V19.2C15.5055 19.4505 15.2842 19.6715 14.9998 19.6715C14.7312 19.6715 14.4942 19.4652 14.4942 19.2V15ZM11.9976 15C11.9976 14.7494 12.2188 14.5284 12.5032 14.5284C12.7718 14.5284 13.0088 14.7347 13.0088 15V19.2C13.0088 19.4505 12.7876 19.6715 12.5032 19.6715C12.2346 19.6715 11.9976 19.4652 11.9976 19.2V15Z" fill="black" />
								<path className="cup" d="M21.0045 9.4H17.0068V8.92842C17.0068 8.41263 16.5643 8 16.0113 8H14.0045C13.4515 8 13.009 8.41263 13.009 8.92842V9.4H8.99549C8.44244 9.4 8 9.81263 8 10.3284C8 10.8442 8.44244 11.2568 8.99549 11.2568H21.0045C21.5576 11.2568 22 10.8442 22 10.3284C22 9.81263 21.5576 9.4 21.0045 9.4Z" fill="black" />
							</svg>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default StudentsTable;
