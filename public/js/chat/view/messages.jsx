class Messages extends React.Component
{
	render() {
		var messages = this.props.messages || [];

		return (
			<ul className="messages">
				{messages.map(message => (
					<li key={message.id} className="message">
						{message.text}
						<button
							type="button"
							onClick={() => this.props.onDelete(message)}
						>Delete</button>
					</li>
				))}
			</ul>
		);
	}
}