function newMessageFormView(id, callbacks) {
	render();

	store.subscribe(function () {
		render();
	});

	function render() {
		ReactDOM.render(
			(
				<form onSubmit={submit}>
					<input type="text" value={store.getState().form.text} onChange={changeText}/>
					<button>Send</button>
				</form>
			),
			document.getElementById(id)
		);
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