import ui.ScrollView;
import math.util as util;

import src.TilesFactory as TilesFactory;
import src.TileView as TileView;

exports = Class(ui.ScrollView, function(supr) {

	var nTilesX = 60;
	var nTilesY = 60;
	var tileHeight = 32;

	this.init = function(opts) {
		opts = merge(opts, {
			scrollBounds: {
				minX: 0,
				maxX: nTilesX * tileWidth,
				minY: 0,
				maxY: nTilesY * tileHeight
			}
		});

		supr(this, 'init', [opts]);
		this.build();
	};

	this.build = function() {

		var tilesFactory = new TilesFactory("tileSprite", {
			"wall": [0, 0, 32, 32, 16, 16],
			"road": [32, 0, 32, 32, 16, 16],
			"grass": [64, 0, 32, 32, 16, 16]
		});

		var tiles = [];
		for (var y = 0; y < nTilesY; y++) {
			for (var x = 0; x < nTilesX; x++) {
				var type = "grass";
				if (util.random(0, 2) == 0) {
					type = "road";
				} else if (util.random(0, 2) == 0) {
					type = "wall";
				}

				var tile = tilesFactory.getTile(type);
				tile.style.x = x * tileWidth / 2;
				tile.style.y = y * tileHeight / 2;
				tile.style.zIndex = y * nTilesY + x;
				this.addSubview(tile);
				tiles.push(type);
			}
		}

	};
});