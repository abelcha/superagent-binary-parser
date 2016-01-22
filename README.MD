**superagent-binary-parser** is a [superagent](https://www.npmjs.com/package/superagent) plugin, created to parse binary response stream (pdf, zip, etc...)

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
	.end(function(err, resp) {
		//resp.body is the buffer
		//resp.data is the raw data
		fs.writeFileSync("./resp.pdf", resp.buffer)
	})
```