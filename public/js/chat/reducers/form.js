function formReducer(form, action) {
	if (!form) return {text: ''};

	switch (action.type) {
	case 'CHANGE_FORM_TEXT':
		return Object.assign({}, form, {
			text: action.payload.text
		});

	case 'ADD_MESSAGE_FROM_FORM':
		return Object.assign({}, form, {
			text: ''
		});

	default:
		return form;
	}
}