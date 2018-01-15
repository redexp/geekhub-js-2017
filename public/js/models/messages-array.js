function MessagesArray() {
	Array.call(this);

	this.callbacks = [];
}

MessagesArray.prototype = Object.create(Array.prototype);
MessagesArray.prototype.constructor = MessagesArray;

MessagesArray.prototype.add = function (message) {
	if (message instanceof Array) {
		var messages = this;
		message.forEach(function (item) {
			messages.push(item);
			messages.trigger('add', [item]);
		});
	}
	else {
		this.push(message);
		this.trigger('add', [message]);
	}

	return this;
};

MessagesArray.prototype.remove = function (message) {
	var index = this.indexOf(message);

	if (index === -1) return this;

	this.splice(index, 1);

	this.trigger('remove', [message, index])

	return this;
};

MessagesArray.prototype.on = function (event, callback) {
	this.callbacks.push({
		event: event,
		callback: callback
	});
};

MessagesArray.prototype.trigger = function (event, args) {
	var messages = this;

	args = args || [];

	this.callbacks.forEach(function (item) {
		if (item.event === event) {
			item.callback.apply(messages, args);
		}
	});
};