# get-tag
Create HTML tag strings on the fly.

## Installation
Install the package from [npm](https://www.npmjs.com/package/get-tag):

```bash
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

If the provided HTML tag name is included in the [void-elements](https://www.w3.org/TR/2011/WD-html-markup-20110113/syntax.html#void-elements) list, then `selfClosing` will default to `true`.

## Related projects
- [html-tag](https://www.npmjs.com/package/html-tag)