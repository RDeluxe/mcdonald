//sdk imports
import ui.View;
import device;


exports = Class(ui.View, function() {



    this.build = function(context) {

        context.fillStyle = "#000044";
        context.fillRect(0, 0, device.width - 50, device.height - 125);


    };

    this.render = function(context) {

         this.build(context);

    };
});