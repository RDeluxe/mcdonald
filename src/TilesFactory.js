import ui.resource.Image as Image;

import src.TileView as TileView;

exports = Class(function() {

  /**
   * Constructor
   *
   * @param  Image    image  Image instance
   * @param  Object   config {"name": [clipX, clipY, clipWidth, clipHeight, centerX, centerY]}
   */
  this.init = function(image, config) {
    this.image = image;
    this.config = config;
  };

  this.getTile = function(name) {
    if (this.config[name]) {
      var config = this.config[name];
      return new TileView({
        image: new Image({
          url: "resources/images/" + this.image + ".png",
          sourceX: config[0],
          sourceY: config[1],
          sourceW: config[2],
          sourceH: config[3]
        }),
        x: 0,
        y: 0,
        width: config[2],
        height: config[3],
        offsetX: -config[4],
        offsetY: -config[5]
      });
    } else {
      throw new Error("Sprite unknown: " + name);
    }
  };

});