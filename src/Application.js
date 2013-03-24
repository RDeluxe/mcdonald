import device;
import ui.View;
import ui.StackView as StackView;

import src.TitleScreen as TitleScreen;
import src.MapScreen as MapScreen;
import src.GameScreen as GameScreen;

exports = Class(GC.Application, function() {

	this.imageWidth = 1280;
	this.imageHeight = 960;
	this.maxImageWidth = device.height * this.imageWidth / this.imageHeight;
	this.maxImageHeight = device.height;
	this.maxImageX = (device.width - this.maxImageWidth) / 2;
	this.maxImageY = 0;

	this.initUI = function() {

		this.view.style.backgroundColor = '#000000';

		var titleScreen = new TitleScreen(),
			mapScreen = new MapScreen(),
			gameScreen = new GameScreen(),
			rootView = new StackView({
				superview: this,
				x: 0,
				y: 0,
				width: device.width,
				height: device.height
			});

		rootView.push(titleScreen);

		titleScreen.on('titleScreen:start', function() {
			rootView.push(mapScreen);
		});
		mapScreen.on('mapScreen:start', function() {
			rootView.push(gameScreen);
		});
		mapScreen.on('mapScreen:end', function() {
			rootView.pop();
		});
		gameScreen.on('gameScreen:end', function() {
			rootView.pop();
		});
	};

	this.launchUI = function() {};
});