export const calculateAge = (birthday: string) => {
	const birthDate = new Date(birthday);
	const currentDate = new Date();

	let age = currentDate.getFullYear() - birthDate.getFullYear();

	if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
		age--;
	}

	return age;
};
