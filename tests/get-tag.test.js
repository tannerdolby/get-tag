const getTag = require('../dist/get-tag');

describe('Tag creation unit test', () => {
  test('Create <title> tag with closing tags + no attributes', () => {
    expect(getTag('title', 'Test Title')).toBe(
      '<title>Test Title</title>'
    );
  });

  test('create <a> tag with attributes + closing tag', () => {
    expect(getTag('a', 'Bug Saves The World', { href: 'foo' })).toBe(
      '<a href="foo">Bug Saves The World</a>'
    );
  });

  test('create <meta> tag', () => {
    expect(getTag('meta', null, { name: 'author', content: 'foo' })).toBe(
      '<meta name="author" content="foo">'
    );
  });

  test('create <link> tag', () => {
    expect(getTag('link', null, { rel: 'stylesheet', href: 'style.css' })).toBe(
      '<link rel="stylesheet" href="style.css">'
    );
  });

  test('create <p> tag', () => {
    expect(getTag('p', 'foo bar', { class: 'prose' })).toBe(
      '<p class="prose">foo bar</p>'
    );
  });

  test('create <img> tag', () => {
    expect(getTag('img', null, { src: 'foo.jpg', alt: 'a test image' })).toBe(
      '<img src="foo.jpg" alt="a test image">'
    );
  });

  test('create <h1> tag', () => {
    expect(getTag('h1', 'Some Heading')).toBe('<h1>Some Heading</h1>');
  })

  test('create empty non self closing tag', () => {
    expect(getTag('title')).toBe('<title></title>');
  });

  test('create empty self closing tag', () => {
    expect(getTag('meta')).toBe('<meta>');
  });

  test('create img element with closing slash', () => {
    expect(getTag('img', null, null, true, true)).toBe('<img />');
  });

  test('throws error when a tag name is not provided', () => {
    const getTagMock = () => getTag();
    expect(getTagMock).toThrow(
      'Invalid HTML tag name. The first parameter `tag` is required and must be a string'
    );
  });

  test('throws error when provided an invalid tag parameter', () => {
    let mocks = [
      getTagMock = () => getTag(123),
      getTagMockTwo = () => getTag(['foo', 'bar']),
      getTagMockThree = () => getTag(false)
    ];

    mocks.forEach(mock => {
      expect(mock).toThrow(
        'Invalid HTML tag name. The first parameter `tag` is required and must be a string'
      )
    });
  });
});
