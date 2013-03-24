import ui.View;
import ui.ImageView as ImageView;
import ui.widget.ButtonView as ButtonView;
import device;

exports = Class(ui.View, function(supr) {
	this.init = function(opts) {
		opts = merge(opts, {
			x: 0,
			y: 0
		});

		supr(this, 'init', [opts]);
		this.build();
	};

	this.build = function() {

		new ImageView({
			superview: this,
			image: "resources/images/TitleScreen.jpg",
			x: GC.app.maxImageX,
			y: GC.app.maxImageY,
			width: GC.app.maxImageWidth,
			height: GC.app.maxImageHeight
		});

		new ButtonView({
			superview: this,
			width: 160,
			height: 153,
			x: device.width / 2 - 80,
			y: device.height * 3 / 4 - 77,
			images: {
				up: "resources/images/StartButton.png"
			}
		}).on('InputSelect', bind(this, function() {
			this.emit('titleScreen:start');

		}));
	};
});