var reduce = Redux.combineReducers({
	messages: messagesReducer,
	form: formReducer
});

var store = Redux.createStore(function (state, action) {
	if (typeof state === 'undefined') {
		return {
			messages: [],
			form: {
				text: location.hash.replace('#', '')
			}
		};
	}
	else {
		return reduce(state, action);
	}
});