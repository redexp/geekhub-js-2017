class MessagesApp extends React.Component
{
	render() {
		return (
			<React.Fragment>
				<Messages
					messages={this.props.messages}

					onDelete={message => {
						deleteMessageAction(message.id);
					}}
				/>

				<MessageForm
					text={this.props.text}
					onSend={() => {
						this.props.addMessageFromForm(this.props.text);
					}}
					onChangeText={text => {
						changeFormTextAction(text);
					}}
				/>
			</React.Fragment>
		);
	}
}

var ConnectedMessagesApp = ReactRedux.connect(
	function (state) {
		return {
			messages: state.messages,
			text: state.form.text
		};
	},
	function (dispatch, props) {
		return {
			addMessageFromForm: function (text) {
				dispatch({
					type: 'ADD_MESSAGE_FROM_FORM',
					payload: {
						text: text
					}
				});
			}
		};
	}
)(MessagesApp);