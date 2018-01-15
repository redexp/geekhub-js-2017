function messagesView(id, callbacks) {
	render();

	store.subscribe(render);

	function render() {
		var messages = store.getState().messages;

		var elements = messages.map(message => {
			return (
				<li key={message.id} className="message">
					{message.text}
					<button
						type="button"
						onClick={() => callbacks.onDelete(message)}
					>Delete</button>
				</li>
			);
		});

		ReactDOM.render(elements, document.getElementById(id));
	}
}