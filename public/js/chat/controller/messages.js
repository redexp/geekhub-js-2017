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
			id: Math.random(),
			data: {
				test: 12
			}
		};

		callbacks[message.id] = function (data) {
			clearTimeout(timer);
			console.log('Response from server', data);
		};

		var timer = setTimeout(function () {
			console.error('Server timeout', message);
			delete callbacks[message.id];
		}, 3000);

		client.send(JSON.stringify(message));
	};

	client.onerror = function (event) {
		event;
	};

	client.onmessage = function (event) {
		var response = JSON.parse(event.data);

		if (callbacks.hasOwnProperty(response.id)) {
			var callback = callbacks[response.id];
			callback(response.data);
			delete callbacks[response.id];
		}
	};
}