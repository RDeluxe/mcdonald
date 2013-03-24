import ui.View;
import device;
import src.Application;
import ui.widget.ButtonView as ButtonView;
import ui.ImageView as ImageView;

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
			image: "resources/images/Fullmap.jpg",
			x: GC.app.maxImageX,
			y: GC.app.maxImageY,
			width: GC.app.maxImageWidth,
			height: GC.app.maxImageHeight
		});

		// Start button => Map screen
		new ButtonView({
			superview: this,
			width: 300,
			height: 250,
			x: 90,
			y: 75,
			images: {
				up: "resources/images/Loupe.png"
			}
}).on('InputSelect', bind(this, function() {		this.emit('mapScreen:start');

		}));

		new ButtonView({
			superview: this,
			width: 120,
			height: 115,
			x: device.width - 130,
			y: 10,
			images: {
				up: "resources/images/BackButton.png"
			}
		}).on('InputSelect', bind(this, function() {
			this.emit('mapScreen:end');
		}));
	};
});