# get-tag
Create HTML tag strings on the fly.

## Installation
Install the plugin from [npm](https://www.npmjs.com/package/get-tag):

```js
npm install get-tag
```

## Usage
```js
const getTag = require("get-tag");

getTag("title", "Some Title");
// <title>Some Title</title>

getTag("a", "Some Link", {href: "foo.com"});
// <a href="foo.com">Some link</a>

getTag("meta", null, {name: "author", content: "foo"});
// <meta name="author" content="foo">
```

## License
MIT

## Related projects
- [html-tag](https://www.npmjs.com/package/html-tag)