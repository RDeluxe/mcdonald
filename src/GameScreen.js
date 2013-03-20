/*
 * The game screen is a singleton view that consists of
 * a scoreboard and a collection of molehills.
 */

import ui.View;
import device;
import src.Application;

/* Some game constants.
 */


/* The GameScreen view is a child of the main application.
 */
exports = Class(ui.View, function(supr) {
	this.init = function(opts) {
		opts = merge(opts, {
			x: 0,
			y: 0,
			width: 0,
			height: 0,
			opacity: 0.5,
			backgroundColor: '#35063a'
		});

		supr(this, 'init', [opts]);

		this.build();
	};


	this.build = function() {
		/* The start event is emitted from the start button via the main application.
		 */


		this.on('app:start', start_game_flow.bind(this));

	};
});



function start_game_flow() {
	var that = this;

	var backbutton = new ui.View({
		superview: this,
		x: 650,
		y: 40,
		width: 100,
		height: 50,
		opacity: 0.5,
		backgroundColor: '#6E2F15'
	});

	/* Listening for a touch or click event, and will dispatch a
	 * custom event to the title screen, which is listened for in
	 * the top-level application file.
	 */
	backbutton.on('InputSelect', bind(this, function() {
		this.emit('gamescreen:end');
	}));

	setTimeout(emit_game_flow_event.bind(this), 1000);
}
/* Tell the main app to switch back to the title screen.
 */

function emit_game_flow_event() {



}