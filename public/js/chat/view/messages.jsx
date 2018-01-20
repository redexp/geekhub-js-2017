class Messages extends React.Component
{
	render() {
		return (
			<ul className="messages">
				{this.props.messages.map(message => (
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