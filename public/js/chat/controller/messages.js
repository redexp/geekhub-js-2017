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

	window.client = new Faye.Client('https://localhost:5000/faye');

	client.subscribe('/messages', function (data) {
		console.log(data);
	});
}