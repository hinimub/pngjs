function perf() {
  "use strict";

  var file = UrlFetchApp.fetch('https://raw.githubusercontent.com/hinimub/pngjs/master/html/ubuntu-screenshot.png');

  var t1 = new Date();

  var reader = new pngjs.PNGReader(file.getContent());
  reader.parse(function(err, png){

    var t2 = new Date();

	Logger.log('benchmark took %s ms', t2-t1);

	Logger.log('pixels ' + png.pixels.length);
	Logger.log('width ' + png.width + ' height ' + png.height + ' colors ' + png.colors);
	Logger.log('colorType ' + png.colorType);
	Logger.log('bitDepth ' + png.bitDepth);
	Logger.log('colors ' + png.colors);

	t1 = new Date();

	for (var i = 0; i < png.width; i++){
		for (var j = 0; j < png.height; j++){
			png.getPixel(i, j);
		}
	}

	t2 = new Date();
	Logger.log('getPixel benchmark took %s ms', t2-t1);

	});
}
