//sdk imports
import ui.View;
import device;
import ui.widget.ButtonView as ButtonView;

import src.MapView as MapView;

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

        new MapView({
            superview: this,
            x: 0,
            y: 0,
            width: this.style.width,
            height: this.style.height
        });

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
            this.emit('gameScreen:end');
        }));
    };

});