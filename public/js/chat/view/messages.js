"use strict";

function messagesView(id, callbacks) {
	render();

	store.subscribe(render);

	function render() {
		var messages = store.getState().messages;

		var elements = messages.map(function (message) {
			return React.createElement(
				"li",
				{ key: message.id, className: "message" },
				message.text,
				React.createElement(
					"button",
					{
						type: "button",
						onClick: function onClick() {
							return callbacks.onDelete(message);
						}
					},
					"Delete"
				)
			);
		});

		ReactDOM.render(elements, document.getElementById(id));
	}
}
