const messages = {
	name: {
		required: "Don't be blank",
		wrong: 'Wrong format, letters only'
	},
	number: {
		required: "Don't be blank",
		wrong: 'Wrong format, numbers only'
	},
	month: {
		required: "Don't be blank",
		wrong: 'Wrong format, numbers only'
	},
	year: {
		required: "Don't be blank",
		wrong: 'Wrong format, numbers only'
	},
	cvc: {
		required: "Don't be blank",
		wrong: 'Wrong format, numbers only'
	}
};

const patterns = {
	onlyLetters: /^[a-zA-ZñÑ]+$/,
	onlyNumberCard: /^\d{16}$/,
	onlyMonth: /^(1[0-2]|0?[1-9])$/,
	onlyYear: /^\d{2}$/,
	onlyCvc: /^\d{3}$/
};

const nameValidation = {
	required: messages.name.required,
	pattern: {
		value: patterns.onlyLetters,
		message: messages.name.wrong
	}
};

const numberValidation = {
	required: messages.number.required,
	pattern: {
		value: patterns.onlyNumberCard,
		message: messages.number.wrong
	}
};

const monthValidation = {
	required: messages.month.required,
	pattern: {
		value: patterns.onlyMonth,
		message: messages.month.wrong
	}
};

const yearValidation = {
	required: messages.year.required,
	pattern: {
		value: patterns.onlyYear,
		message: messages.year.wrong
	}
};

const cvcValidation = {
	required: messages.cvc.required,
	pattern: {
		value: patterns.onlyCvc,
		message: messages.cvc.wrong
	}
};

export const FORM_VALIDATION = {
	NAME: nameValidation,
	NUMBER: numberValidation,
	YEAR: yearValidation,
	MONTH: monthValidation,
	CVC: cvcValidation
};
