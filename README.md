
PNG.js
======

PNG.js is a PNG decoder fully written in JavaScript. It works in Google Apps Script.

Usage
-----

``` js
var PNGReader = require('png.js');

var reader = new PNGReader(bytes);
reader.parse(function(err, png){
	if (err) throw err;
	console.log(png);
});

```

Or with options:

``` js
reader.parse({
	data: false
}, function(err, png){
	if (err) throw err;
	console.log(png);
});

```

Currently the only option is:

- `data` (*boolean*) - should it read the pixel data, or only the image information.

### PNG object

The PNG object is passed in the callback. It contains all the data extracted
from the image.

``` js
// most importantly
png.getWidth();
png.getHeight();
png.getPixel(x, y); // [red, blue, green, alpha]
// but also
png.getBitDepth();
png.getColorType();
png.getCompressionMethod();
png.getFilterMethod();
png.getInterlaceMethod();
png.getPalette();
```

Using PNGReader in Node.js
--------------------------

PNGReader accepts an `Buffer` object, returned by `fs.readFile`, for example:

``` js
fs.readFile('test.png', function(err, buffer){

	var reader = new PNGReader(buffer);
	reader.parse(function(err, png){
		if (err) throw err;
		console.log(png);
	});

});
```
