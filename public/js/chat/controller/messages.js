function messagesController() {

	/*store.subscribe(function () {
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
	});*/



	ReactDOM.render(
		React.createElement(
			ReactRedux.Provider,
			{store: store},
			React.createElement(ConnectedMessagesApp, {
				onSend: function () {

				}
			})
		),
		document.getElementById('messages-app')
	);

	var client = new WebSocket('ws://localhost:5000');

	var callbacks = {};

	client.onopen = function () {
		var message = {
			type: 'init',
			user_id: 1
		};

		client.send(JSON.stringify(message));

		client.send(JSON.stringify({
			type: 'message-all',
			text: 'hello'
		}));
	};

	client.onerror = function (event) {
		event;
	};

	client.onmessage = function (event) {
		var message = JSON.parse(event.data);

		switch (message.type) {
		case 'message':
			console.log('Message from', message.from_user_id, message.text);
			break;
		}
	};
}