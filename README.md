
PNG.js
======

PNG.js is a PNG decoder fully written in JavaScript. It works in Google Apps Script.

Usage
-----

``` js
var img = UrlFetchApp.fetch('http://example.com/image.png');
var reader = new pngjs.PNGReader(blobToUint8(img.getContent()));
reader.parse(function(err, png){
	if (err) throw err;
	console.log(png);
});

function blobToUint8(blob) {
  return blob.map(function(e){
    return parseInt(e < 0 ? e + 256 : e);
  });
}

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
