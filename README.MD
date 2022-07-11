**[superagent-binary-parser](https://www.npmjs.com/package/superagent-binary-parser)** is a [superagent](https://www.npmjs.com/package/superagent) plugin, created to parse binary response stream (pdf, zip, etc...)

### Installation

```
npm install superagent-binary-parser --save

```

### Usage


```
const binaryParser = require('superagent-binary-parser');
const superagent = require('superagent');

superagent.get('https://philosophiatopics.files.wordpress.com/2018/10/skin-in-the-game-nassim-nicholas-taleb.pdf')
	.parse(binaryParser)
	.buffer()
	.end((err, resp) => {
		//resp.body is a buffer
		fs.writeFileSync('./resp.pdf', resp.body)
	})
```
