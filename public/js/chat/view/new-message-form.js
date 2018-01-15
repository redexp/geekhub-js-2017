"use strict";

function newMessageFormView(id, callbacks) {
	render();

	store.subscribe(function () {
		render();
	});

	function render() {
		ReactDOM.render(React.createElement(
			"form",
			{ onSubmit: submit },
			React.createElement("input", { type: "text", value: store.getState().form.text, onChange: changeText }),
			React.createElement(
				"button",
				null,
				"Send"
			)
		), document.getElementById(id));
	}

	function submit(event) {
		event.preventDefault();

		callbacks.onSend();
	}

	function changeText(event) {
		store.dispatch({
			type: 'CHANGE_FORM_TEXT',
			payload: {
				text: event.target.value
			}
		});
	}
}
