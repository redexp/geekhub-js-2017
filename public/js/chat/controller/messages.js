// @flow

/**
 * @typedef {{
 *   type: string,
 *   payload?: Object|string
 * }} Action
 */

function messagesController(ReactDOM, React, App) {

	/**
	 * @var {JQueryStatic} sergii
	 *
	 */

	sergii.ajax()

	ReactDOM.render(
		React.createElement(App, null),
		document.getElementById('app')
	);

	var y = 11;

	var x: number = asd('asd', 1);

	/**
	 * Very helpful function
	 *
	 */
	function asd(x: string, y: number) : number {
		if (!x) {
			throw new Error('x undefined');
		}

		return Number(x);
	}
}