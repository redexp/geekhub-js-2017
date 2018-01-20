'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessagesApp = function (_React$Component) {
	_inherits(MessagesApp, _React$Component);

	function MessagesApp() {
		_classCallCheck(this, MessagesApp);

		return _possibleConstructorReturn(this, (MessagesApp.__proto__ || Object.getPrototypeOf(MessagesApp)).apply(this, arguments));
	}

	_createClass(MessagesApp, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				React.Fragment,
				null,
				React.createElement(Messages, {
					messages: this.props.messages,

					onDelete: function onDelete(message) {
						deleteMessageAction(message.id);
					}
				}),
				React.createElement(MessageForm, {
					text: this.props.text,
					onSend: function onSend() {
						_this2.props.addMessageFromForm(_this2.props.text);
					},
					onChangeText: function onChangeText(text) {
						changeFormTextAction(text);
					}
				})
			);
		}
	}]);

	return MessagesApp;
}(React.Component);

var ConnectedMessagesApp = ReactRedux.connect(function (state) {
	return {
		messages: state.messages,
		text: state.form.text
	};
}, function (dispatch, props) {
	return {
		addMessageFromForm: function addMessageFromForm(text) {
			dispatch({
				type: 'ADD_MESSAGE_FROM_FORM',
				payload: {
					text: text
				}
			});
		}
	};
})(MessagesApp);
