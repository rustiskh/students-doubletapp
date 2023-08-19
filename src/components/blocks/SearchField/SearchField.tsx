import React from "react";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../../redux/slices";

const SearchField: React.FC = () => {
	const dispatch = useDispatch();
	const inputRef = React.useRef<HTMLInputElement>(null);

	const [value, setValue] = React.useState("");
	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
		updateSearchField(event.target.value);
	};

	const updateSearchField = React.useCallback(
		debounce((str) => {
			dispatch(setSearchValue(str));
		}, 500),
		[]
	);

	const onClickClear = (event: React.MouseEvent<SVGSVGElement>) => {
		dispatch(setSearchValue(""));
		setValue("");
		inputRef.current?.focus();
	};

	return (
		<div className="search-field">
			<svg className="search-field__icon" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M18.3163 17.3087C18.5946 17.5869 18.5946 18.0381 18.3163 18.3163C18.0381 18.5946 17.5869 18.5946 17.3087 18.3163L13.8887 14.8963C13.6104 14.6181 13.6104 14.1669 13.8887 13.8887C14.1669 13.6104 14.6181 13.6104 14.8963 13.8887L18.3163 17.3087ZM7.5525 15.105C3.38137 15.105 0 11.7236 0 7.5525C0 3.38137 3.38137 0 7.5525 0C11.7236 0 15.105 3.38137 15.105 7.5525C15.105 11.7236 11.7236 15.105 7.5525 15.105ZM7.5525 13.68C10.9366 13.68 13.68 10.9366 13.68 7.5525C13.68 4.16838 10.9366 1.425 7.5525 1.425C4.16838 1.425 1.425 4.16838 1.425 7.5525C1.425 10.9366 4.16838 13.68 7.5525 13.68ZM4.0375 6.9825C4.0375 7.24483 3.82484 7.4575 3.5625 7.4575C3.30016 7.4575 3.0875 7.24483 3.0875 6.9825C3.0875 4.83135 4.83135 3.0875 6.9825 3.0875C7.24483 3.0875 7.4575 3.30016 7.4575 3.5625C7.4575 3.82484 7.24483 4.0375 6.9825 4.0375C5.35602 4.0375 4.0375 5.35602 4.0375 6.9825Z" fill="black" />
			</svg>

			<input ref={inputRef} value={value} onChange={onChangeInput} className="search-field__input" placeholder="Поиск по имени" type="text" />
			{value && (
				<svg onClick={onClickClear} className="search-field__clear" enableBackground="new 0 0 128 128" height="128px" id="Layer_1" version="1.1" viewBox="0 0 128 128" width="128px" xmlns="http://www.w3.org/2000/svg">
					<g>
						<g>
							<path d="M84.815,43.399c-0.781-0.782-2.047-0.782-2.828,0L64.032,61.356L46.077,43.399c-0.781-0.782-2.047-0.782-2.828,0    c-0.781,0.781-0.781,2.047,0,2.828l17.955,17.957L43.249,82.141c-0.781,0.78-0.781,2.047,0,2.828    c0.391,0.39,0.902,0.585,1.414,0.585s1.023-0.195,1.414-0.585l17.955-17.956l17.955,17.956c0.391,0.39,0.902,0.585,1.414,0.585    s1.023-0.195,1.414-0.585c0.781-0.781,0.781-2.048,0-2.828L66.86,64.184l17.955-17.957C85.597,45.447,85.597,44.18,84.815,43.399z     M64.032,14.054c-27.642,0-50.129,22.487-50.129,50.127c0.002,27.643,22.491,50.131,50.133,50.131    c27.639,0,50.125-22.489,50.125-50.131C114.161,36.541,91.674,14.054,64.032,14.054z M64.036,110.313h-0.002    c-25.435,0-46.129-20.695-46.131-46.131c0-25.435,20.693-46.127,46.129-46.127s46.129,20.693,46.129,46.127    C110.161,89.617,89.47,110.313,64.036,110.313z" />
						</g>
					</g>
				</svg>
			)}
		</div>
	);
};

export default SearchField;
