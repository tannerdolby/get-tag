# create-html-tag
Quickly generate an HTML string on the fly with JavaScript.

## Installation
```
npm install create-html-tag
```

## Usage
```js
createTag("a", {"href": "foo.com"}, "Some link");
// <a href="foo.com">Some link</a>

createTag("title", {}, "Some Title");
// <title>Some Title</title>

createTag("meta", {"name": "author", "content": "foo"});
// <meta name="author" content="foo">
```

## License
MIT