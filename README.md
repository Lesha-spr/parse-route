# parse-route

## Usage
```npm install parse-route```

```javascript
var parseRoute = require('parse-route');

parseRoute('/path/with/:some/:param/and/:another/param',
 {some: 'really', param: 'awesome', another: 'splitted'}); // /path/with/really/awesome/and/splitted/param
```