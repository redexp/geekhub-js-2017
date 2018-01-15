var nextId = 1;

function messagesReducer(messages, action) {
	if (!messages) return [];

	switch (action.type) {
	case 'ADD_MESSAGE':
	case 'ADD_MESSAGE_FROM_FORM':
		return messages.concat({
			id: ++nextId,
			text: action.payload.text
		});

	case 'DELETE_MESSAGE':
		return messages.filter(function (message) {
			return message.id !== action.payload.id;
		});

	default:
		return messages;
	}
}