import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectorSort, setSort } from "../../../redux/slices/filterSlice";

type PopupClick = MouseEvent & { path: Node[] };

type SortItem = {
	name: string;
	sortProperty: string;
};

export const sortList: SortItem[] = [
	{
		name: "Имя А-Я",
		sortProperty: "name&_order=asc",
	},
	{
		name: "Имя Я-А",
		sortProperty: "name&_order=desc",
	},
	{
		name: "Сначала моложе",
		sortProperty: "birthday&_order=desc",
	},
	{
		name: "Сначала старше",
		sortProperty: "birthday&_order=asc",
	},
	{
		name: "Высокий рейтинг",
		sortProperty: "rating&_order=desc",
	},
	{
		name: "Низкий рейтинг",
		sortProperty: "rating&_order=asc",
	},
	{
		name: "Цвет А-Я",
		sortProperty: "color&_order=asc",
	},
	{
		name: "Цвет Я-А",
		sortProperty: "color&_order=desc",
	},
];

const Sort: React.FC = () => {
	const dispatch = useDispatch();
	const sort = useSelector(selectorSort);
	const [open, setOpen] = React.useState(false);

	const catalogSort = React.useRef<HTMLDivElement>(null);

	const onClickListItem = (obj: SortItem) => {
		// @ts-ignore
		dispatch(setSort(obj));
		setOpen(false);
	};

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event as PopupClick;
			const clickPath = _event.path || _event.composedPath();

			if (catalogSort.current && !clickPath.includes(catalogSort.current)) {
				setOpen(false);
			}
		};
		document.body.addEventListener("click", handleClickOutside);

		return () => {
			document.body.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div ref={catalogSort} className={open ? "sort active" : "sort"} onClick={() => setOpen(!open)}>
			<div className="sort__label">
				<span>{sort.name}</span>
			</div>
			<div className="sort__icon">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1.09769 6.06646H12.1595V4.03987H1.09769C0.491482 4.03987 0 4.49355 0 5.05314C0 5.61273 0.491482 6.06646 1.09769 6.06646Z" fill="black" />
					<path d="M1.09769 10.6263H12.1595V8.59969H1.09769C0.491482 8.59969 0 9.05337 0 9.613C0 10.1726 0.491482 10.6263 1.09769 10.6263Z" fill="black" />
					<path d="M1.11053 13.1595C0.49723 13.1595 0 13.6132 0 14.1728C0 14.7324 0.49723 15.1861 1.11053 15.1861H9.41547C8.81564 14.5207 8.81564 14.2197 8.81564 14.1728C8.81564 14.093 8.81564 13.7207 9.03039 13.1595H1.11053Z" fill="black" />
					<path d="M19.7592 12.6529C19.1041 12.0106 18.2392 12.6529 17.7326 13.1595L16.7193 14.1728L16.1611 14.7566V2.39558C16.1611 1.62479 15.9406 1 15.1543 1C14.3681 1 14.097 1.62483 14.097 2.39558V14.7566L12.562 13.178C12.0061 12.633 11.1958 12.1078 10.6398 12.6529C10.1333 13.1496 10.5909 14.1344 11.1468 14.6794L14.1866 18.226C14.7414 18.7701 15.6568 18.7719 16.2132 18.226L19.253 14.6794C19.8089 14.1344 20.3151 13.1979 19.7592 12.6529Z" fill="black" />
				</svg>
			</div>

			{open && (
				<div className="sort__popup">
					<ul className="sort__popup-list">
						{sortList.map((obj) => (
							<li key={obj.name} onClick={() => onClickListItem(obj)} className={sort.sortProperty === obj.sortProperty ? "sort__popup-list-item sort__popup-list-item_active" : "sort__popup-list-item"}>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Sort;
