import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import ReactSelect, { components, DropdownIndicatorProps } from "react-select";

interface NewStudentForm {
	avatar: string;
	name: string;
	email: string;
	specialty: string;
	group: string;
	rating: number;
	sex: string;
	color: string;
}

interface SpecialtyOption {
	value: string;
	label: string;
}

const specialtyOptions: SpecialtyOption[] = [
	{
		value: "kn",
		label: "kn",
	},
	{
		value: "kb",
		label: "kb",
	},
	{
		value: "mt",
		label: "mt",
	},
];

interface GroupOption {
	value: string;
	label: string;
}

const groupOptions: SpecialtyOption[] = [
	{
		value: "kn-404",
		label: "kn-404",
	},
	{
		value: "kb-555",
		label: "kb-555",
	},
	{
		value: "mt-245",
		label: "mt-245",
	},
];

interface SexOption {
	value: string;
	label: string;
}

const sexOptions: SexOption[] = [
	{
		value: "m",
		label: "Мужской",
	},
	{
		value: "f",
		label: "Женский",
	},
];

interface ColorOption {
	value: string;
	label: string;
}

const colorOptions: ColorOption[] = [
	{
		value: "blue",
		label: "Синий",
	},
	{
		value: "red",
		label: "Красный",
	},
];

const getValue = (value: string) => (value ? sexOptions.find((option) => option.value === value) : "");

// Селект
// Изменение шеврона
const CustomDropdownIndicator = (props: any) => {
	return (
		<components.DropdownIndicator {...props}>
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M3.41506 6.65079L7.24084 11.1142C7.60026 11.5335 8.23156 11.5821 8.65089 11.2227C8.68977 11.1893 8.72603 11.1531 8.75935 11.1142L12.5851 6.65079C12.9446 6.23147 12.896 5.60017 12.4767 5.24074C12.2954 5.08539 12.0646 5 11.8259 5L4.17432 5C3.62203 5 3.17432 5.44772 3.17432 6C3.17432 6.23871 3.25971 6.46955 3.41506 6.65079Z" fill="black" />
			</svg>
		</components.DropdownIndicator>
	);
};

const generalSelectStyles = {
	dropdownIndicator: (base: any, state: any) => ({
		...base,
		transform: state.isFocused ? "rotate(180deg)" : "",
		// padding: "0",
		padding: state.isFocused ? "0px 0px 0px 19px" : "0px 19px 0px 0px",
	}),
	indicatorSeparator: () => ({
		display: "none",
	}),
	control: (base: any, state: any) => ({
		...base,
		borderRadius: "6px",
		border: "none",
		outline: state.isFocused ? "1px solid rgba(0, 0, 0, 0.8)" : "none",
		boxShadow: "0px 7px 64px 0px rgba(0, 0, 0, 0.07)",
		padding: "16px 0 16px 20px",
		color: "black",
		fontSize: "16px",
		fontStyle: "normal",
		fontWeight: "400",
		lineHeight: "20px",
	}),
	placeholder: (base: any) => ({
		...base,
		color: "#b3b3b3",
	}),
	valueContainer: (base: any) => ({
		...base,
		padding: "0",
	}),
	input: (base: any) => ({
		...base,
		margin: "0",
		padding: "0",
	}),
};

const StudentsAdd: React.FC = () => {
	const {
		// Если используем react-select - register не нужен - нужен control (для селектов)
		control,
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<NewStudentForm>({
		defaultValues: {
			rating: 0,
		},
	});

	const onSubmit: SubmitHandler<NewStudentForm> = (data) => {
		// db put
		// перед отправкой нужно данные rating привести к числу
		console.log(data);
		reset();
	};

	return (
		<div className="student-add container">
			<Link to="/" className="student-add__back-btn button-textual button-textual_icony">
				<div className="student-add__back-btn__icon button-textual__icon">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.5 3.5L1 10.0567L7.5 16.6135" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M19 10H1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>
				<div className="student-add__back-btn__text button-textual__text">Назад к списку студентов</div>
			</Link>
			<div className="student-add__header">
				<h1 className="student-add__title main-title">Новый студент</h1>
			</div>

			<div className="student-add__content">
				<form className="student-add-form" onSubmit={handleSubmit(onSubmit)}>
					<label className="student-add-form__element">
						Имя <input {...register("name")} required type="text" placeholder="Иванов Иван Иванович" className="student-add-form-input" />
					</label>
					<label className="student-add-form__element">
						Email{" "}
						<input
							{...register("email", {
								required: "Email - обязательное поле",
								pattern: {
									value: /^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)$/,
									message: "Пожалуйста, введите действительный адрес",
								},
							})}
							type="text"
							placeholder="ivanov@gmail.com"
							className="student-add-form-input"
						/>
						{errors.email && <div className="student-add-form__error">Ошибка емейла</div>}
					</label>
					<label className="student-add-form__element">
						Специальность{" "}
						<Controller
							control={control}
							name="specialty"
							rules={{
								required: "Специальность обязательна",
							}}
							render={({ field: { onChange, value }, fieldState: { error } }) => (
								<>
									<ReactSelect styles={generalSelectStyles} className="student-add-form-select-container" classNamePrefix="student-add-form-select" placeholder={"Выбрать специальность"} isSearchable={false} options={specialtyOptions} value={getValue(value)} onChange={(newValue) => onChange((newValue as SpecialtyOption).value)} components={{ DropdownIndicator: CustomDropdownIndicator }} />
									{error && <div className="student-add-form__error">{error.message}</div>}
								</>
							)}
						/>
					</label>
					<label className="student-add-form__element">
						Группа{" "}
						<Controller
							control={control}
							name="group"
							rules={{
								required: "Группа обязательна",
							}}
							render={({ field: { onChange, value }, fieldState: { error } }) => (
								<>
									<ReactSelect styles={generalSelectStyles} className="student-add-form-select-container" classNamePrefix="student-add-form-select" placeholder={"Выбрать специальность"} isSearchable={false} options={groupOptions} value={getValue(value)} onChange={(newValue) => onChange((newValue as GroupOption).value)} components={{ DropdownIndicator: CustomDropdownIndicator }} />
									{error && <div className="student-add-form__error">{error.message}</div>}
								</>
							)}
						/>
					</label>
					<label className="student-add-form__element">
						Рейтинг{" "}
						<input
							{...register("rating", {
								required: "Рейтинг обязателен",
							})}
							type="text"
							placeholder="0"
							className="student-add-form-input"
						/>
						{errors.rating && <div className="student-add-form__error">Введите рейтинг</div>}
					</label>
					<label className="student-add-form__element">
						Пол{" "}
						<Controller
							control={control}
							name="sex"
							rules={{
								required: "Пол обязателен",
							}}
							render={({ field: { onChange, value }, fieldState: { error } }) => (
								<>
									<ReactSelect styles={generalSelectStyles} className="student-add-form-select-container" classNamePrefix="student-add-form-select" placeholder={"Выбрать пол"} options={sexOptions} isSearchable={false} value={getValue(value)} onChange={(newValue) => onChange((newValue as SexOption).value)} components={{ DropdownIndicator: CustomDropdownIndicator }} />
									{error && <div className="student-add-form__error">{error.message}</div>}
								</>
							)}
						/>
					</label>
					<label className="student-add-form__element">
						Любимый цвет{" "}
						<Controller
							control={control}
							name="color"
							rules={{
								required: "Цвет обязателен",
							}}
							render={({ field: { onChange, value }, fieldState: { error } }) => (
								<>
									<ReactSelect styles={generalSelectStyles} className="student-add-form-select-container" classNamePrefix="student-add-form-select" placeholder={"Выбрать"} options={colorOptions} value={getValue(value)} onChange={(newValue) => onChange((newValue as ColorOption).value)} components={{ DropdownIndicator: CustomDropdownIndicator }} />
									{error && <div className="student-add-form__error">{error.message}</div>}
								</>
							)}
						/>
					</label>

					<button>Создать</button>
				</form>
			</div>
		</div>
	);
};

export default StudentsAdd;
