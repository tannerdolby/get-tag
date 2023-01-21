const getTag = require('../dist/get-tag');

describe('unit test for creating tags', () => {
    test('Create <title> tag with closing tags + no attributes', () => {
        expect(getTag('title', 'Test Title')).toBe(
            '<title>Test Title</title>'
        );
    });

    test('Create <a> tag with attributes + closing tag', () => {
        expect(getTag('a', 'Bug Saves The World', { href: 'foo' })).toBe(
            '<a href="foo">Bug Saves The World</a>'
        );
    });

    test('Create <meta> tag', () => {
        expect(getTag('meta', null, { name: 'author', content: 'foo' })).toBe(
            '<meta name="author" content="foo">'
        );
    });

    test('Create <link> tag', () => {
        expect(getTag('link', null, { rel: 'stylesheet', href: 'style.css' })).toBe(
            '<link rel="stylesheet" href="style.css">'
        );
    });

    test('Create <p> tag', () => {
        expect(getTag('p', 'foo bar', { class: 'prose' })).toBe(
            '<p class="prose">foo bar</p>'
        );
    });

    test('Create <img> tag', () => {
        expect(getTag('img', null, { src: 'foo.jpg', alt: 'a test image' })).toBe(
            '<img src="foo.jpg" alt="a test image">'
        );
    });

    test('Create <h1> tag', () => {
        expect(getTag('h1', 'Some Heading')).toBe('<h1>Some Heading</h1>');
    })

    test('Create empty non self closing tag', () => {
        expect(getTag('title')).toBe(
            '<title></title>'
        );
    });

    test('Create empty self closing tag', () => {
        expect(getTag('meta')).toBe(
            '<meta>'
        );
    });

    test('Throws error when a tag name is not provided', () => {
        const getTagMock = () => getTag();
        expect(getTagMock).toThrow(
            'Missing HTML tag name. The first parameter `tag` is required'
        );
    });
});
