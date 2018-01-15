var states = [];

function messagesController() {

	store.subscribe(function () {
		states.push(store.getState());
	});

	newMessageFormView('new-message-form', {
		onSend: function () {
			store.dispatch({
				type: 'ADD_MESSAGE_FROM_FORM',
				payload: {
					text: store.getState().form.text
				}
			});
		}
	});

	messagesView('messages', {
		onDelete: function (message) {
			store.dispatch({
				type: 'DELETE_MESSAGE',
				payload: {
					id: message.id
				}
			});
		}
	});

	jQuery(window).on('popstate', function () {
		var text = location.href.match(/\w+$/)[0];

		store.dispatch({
			type: 'CHANGE_FORM_TEXT',
			payload: {
				text: text
			}
		});
	});

	store.subscribe(function () {
		var text = store.getState().form.text;

		history.pushState({text: text}, 'Text is ' + text, '/text/' + text);
	});
}