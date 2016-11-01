**[superagent-binary-parser](https://www.npmjs.com/package/superagent-binary-parser)** is a [superagent](https://www.npmjs.com/package/superagent) plugin, created to parse binary response stream (pdf, zip, etc...)

### Installation

```
npm install superagent-binary-parser --save

```

### Usage


```
var binaryParser = require('superagent-binary-parser');
var superagent = require('superagent');

superagent.get("https://website.com/ressource.pdf")
	.parse(binaryParser)
	.buffer()
	.end(function(err, resp) {
		//resp.body is the buffer
		fs.writeFileSync("./resp.pdf", resp.body)
	})
```
