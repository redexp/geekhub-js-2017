/**
 * @typedef {{
 *   type: string,
 *   payload?: Object|string
 * }} Action
 */

function messagesController() {

	/**
	 * @var {string} sergii
	 *
	 */

	ReactDOM.render(
		React.createElement(App, null),
		document.getElementById('app')
	);

	var y = 11;

	try {
		var x = React.asd('asd', 1);
	}
	catch (error) {

	}

	/**
	 * Very helpful function
	 *
	 * @param {string} x
	 * @param {number|string} [y]
	 * @returns {Action}
	 * @throws {Error}
	 */
	React.asd = function (x, y) {
		if (!x) {
			throw new Error('x undefined');
		}

		return obj;
	}
}