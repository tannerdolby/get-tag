const tag = require("../dist/get-tag");

test("Create <title> tag with closing tags + no attributes", () => {
    expect(tag("title", "Test Title")).toBe(
        '<title>Test Title</title>'
    );
});

test("Create <a> tag with attributes + closing tag", () => {
    expect(tag("a", "Bug Saves The World", {href: "foo"})).toBe(
        '<a href="foo">Bug Saves The World</a>'
    );
});

test("Create <meta> tag", () => {
    expect(tag("meta", null, {name: "author", content: "foo"})).toBe(
        '<meta name="author" content="foo">'
    );
});

test("Create <link> tag", () => {
    expect(tag("link", null, {rel: "stylesheet", href: "style.css"})).toBe(
        '<link rel="stylesheet" href="style.css">'
    );
});

test("Create <p> tag", () => {
    expect(tag("p", "foo bar", {class: "text"})).toBe(
        '<p class="text">foo bar</p>'
    );
});

test("Create <img> tag", () => {
    expect(tag("img", null, {src: "foo.jpg", alt: "a test image"})).toBe(
        '<img src="foo.jpg" alt="a test image">'
    );
});

test("Create empty non self closing tag", () => {
    expect(tag("title")).toBe(
        '<title></title>'
    );
});

test("Create empty self closing tag", () => {
    expect(tag("meta")).toBe(
        '<meta>'
    );
})
