import { useState, useCallback } from 'react';

const INITIAL_FORM = { name: '' };
const INITIAL_FORM_ERRORS = {
	name: false,
};
export const FORM_VALIDATORS = {
	/**
	 * Description
	 * @param {string} value
	 * @returns {bool}
	 */
	name: (value) => value && /[A-Za-z0-9]+/.test(value),
};

/**
 * Description
 * @param {Object} initForm=INITIAL_FORM
 * @param {Object} initFormErrors=INITIAL_FORM_ERRORS
 * @param {Object} formValidators=FORM_VALIDATORS
 * @returns {Object}
 */
const useForm = (
	initForm = INITIAL_FORM,
	initFormErrors = INITIAL_FORM_ERRORS,
	formValidators = FORM_VALIDATORS
) => {
	const [form, setForm] = useState(initForm);
	const [formErrors, setFormErrors] = useState(initFormErrors);
	const [submittable, setSubmittable] = useState(false);

	const handleFormChange = useCallback(
		(event) => {
			const { name, value } = event.target;
			if (name && value && value !== form[name]) {
				setForm({ ...form, [name]: value });
			}
			if (Object.keys(form).map((name) => form[name] && !formErrors[name])) {
				setSubmittable(true);
			} else {
				setSubmittable(false);
			}
		},
		[form, formErrors]
	);
	const handleFormBlur = useCallback(
		(event) => {
			const { name, value } = event.target;
			setFormErrors({
				...formErrors,
				[name]: !formValidators[name](value),
			});
			handleFormChange(event);
		},
		[formErrors, formValidators, handleFormChange]
	);
	const handleFormFocus = useCallback(
		(event) => {
			const { name } = event.target;
			if (name && Object.keys(form).indexOf(name) !== -1) {
				setFormErrors({
					...formErrors,
					[name]: false,
				});
			}
		},
		[formErrors, form]
	);
	const handleFormReset = useCallback(() => {
		setForm(initForm);
		setFormErrors(initFormErrors);
	}, [initForm, initFormErrors]);

	return {
		form,
		submittable,
		errors: formErrors,
		handleChange: handleFormChange,
		handleBlur: handleFormBlur,
		handleFocus: handleFormFocus,
		handleReset: handleFormReset,
	};
};

export default useForm;
