const createTag = require("../dist/create-tag");

test("Create an element with closing tags and without attributes", () => {
    expect(createTag("title", {}, "Test Title")).toBe(
        '<title>Test Title</title>'
    );
});

test("Create an element with attributes and closing tag", () => {
    expect(createTag("a", {"href": "foo"}, "Bug Saves The World")).toBe(
        '<a href="foo">Bug Saves The World</a>'
    );
});

test("Create a meta tag", () => {
    expect(createTag("meta", {"name": "author", "content": "foo"})).toBe(
        '<meta name="author" content="foo">'
    );
});