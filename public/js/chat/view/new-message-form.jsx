class MessageForm extends React.Component
{
	constructor() {
		super();

		this.submit = this.submit.bind(this);
		this.changeText = this.changeText.bind(this);
	}

	submit(event) {
		event.preventDefault();
		this.props.onSend();
	}

	changeText(event) {
		this.props.onChangeText(event.target.value);
	}

	render() {
		return (
			<form onSubmit={this.submit}>
				<input type="text" value={this.props.text} onChange={this.changeText}/>
				<button>Send</button>
			</form>
		);
	}
}