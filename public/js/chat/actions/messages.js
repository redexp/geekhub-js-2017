var CHANGE_FORM_TEXT = 'CHANGE_FORM_TEXT';
var DELETE_MESSAGE = 'DELETE_MESSAGE';

function changeFormTextAction(text) {
	store.dispatch({
		type: CHANGE_FORM_TEXT,
		payload: {
			text: text
		}
	});
}

function deleteMessageAction(id) {
	store.dispatch({
		type: DELETE_MESSAGE,
		payload: {
			id: id
		}
	});
}