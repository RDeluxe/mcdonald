import ui.ImageView;

exports = Class(ui.ImageView, function(supr) {

	this.init = function(opts) {
		supr(this, "init", [opts]);
	};
});