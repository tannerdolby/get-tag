# get-tag
Create HTML tag strings on the fly.

## Installation
Install the plugin from [npm](https://www.npmjs.com/package/get-tag):

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

### Details
```js
/**
 * @param {string} tag HTML tag name.
 * @param {string} textContent Text content for the element.
 * @param {Attributes} attributes Object representing attribute key/value pairs.
 * @param {boolean} selfClosing Boolean representing a self closing element. Default: false
 * @return {string} A string representing the constructed HTML element.
 */
getTag(tag, textContent, attributes, selfClosing);
```

## License
MIT

## Related projects
- [html-tag](https://www.npmjs.com/package/html-tag)