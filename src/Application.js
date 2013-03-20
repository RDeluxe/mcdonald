/* @license
 * This file is part of the Game Closure SDK.
 *
 * The Game Closure SDK is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * The Game Closure SDK is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with the Game Closure SDK.  If not, see <http://www.gnu.org/licenses/>.
 */

//sdk imports
import device;
import ui.View;
import ui.StackView as StackView;
//user imports
import src.TitleScreen as TitleScreen;
import src.GameScreen as GameScreen;
import src.Map as Map;

/* Your application inherits from GC.Application, which is
 * exported and instantiated when the game is run.
 */
exports = Class(GC.Application, function() {

	/* Run after the engine is created and the scene graph is in
	 * place, but before the resources have been loaded.
	 */
	this.initUI = function() {
		var titlescreen = new TitleScreen(),
			gamescreen = new GameScreen(),
			canvas = new Map({
				superview: this.view,
				width: device.width - 50,
				height: device.height - 150,
				zIndex: 0,
				x: 25,
				y: 125
			});


		this.view.style.backgroundColor = '#35063a';



		//Add a new StackView to the root of the scene graph
		var rootView = new StackView({
			superview: this,
			x: device.width / 2 - 400,
			y: device.height / 2 - 300,
			width: 800,
			height: 600,
			clip: true,
			backgroundColor: '#0f0d0f'


		});

		rootView.push(titlescreen);

		/* Listen for an event dispatched by the title screen when
		 * the start button has been pressed. Hide the title screen,
		 * show the game screen, then dispatch a custom event to the
		 * game screen to start the game.
		 */
		titlescreen.on('titlescreen:start', function() {
			rootView.push(gamescreen);
			gamescreen.addSubview(canvas);
			gamescreen.emit('app:start');
		});

		/* When the game screen has signalled that the game is over,
		 * show the title screen so that the user may play the game again.
		 */
		gamescreen.on('gamescreen:end', function() {
			rootView.pop();
		});
	};

	/* Executed after the asset resources have been loaded.
	 * If there is a splash screen, it's removed.
	 */
	this.launchUI = function() {};
});