
PNG.js
======

PNG.js is a PNG decoder fully written in JavaScript. It works in Google Apps Script.  
It depend on [zlib](https://github.com/hinimub/zlib.js).

Setup
-----

1. Select "Resources" > "Libraries..." in the Google Apps Script
editor.
2. Enter the project key `1JrL6f7C-aey8sqx-5SOmCVRg9AhkjCI9ZLoGlG4QH85vFiDetMmb9vU9 ` in the "Find a Library" field, and choose "Select". 
3. Choose a version in the dropdown box, and choose pngjs as the
identifier. 
4. Click the "Save" button.

Usage
-----

``` js
var img = UrlFetchApp.fetch('http://example.com/image.png');
var reader = new pngjs.PNGReader(img.getContent());
var png = reader.parse(function(err, png){
	if (err) throw err;
	return png;
});
Logger.log(png);

```

Or with options:

``` js
reader.parse({
	data: false
}, function(err, png){
	if (err) throw err;
	return png;
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
