var reducers = Redux.combineReducers({
	messages: messagesReducer,
	form: formReducer
});

var store = Redux.createStore(reducers);