const getTag = require('../dist/get-tag');

describe('getTag module', () => {
  it('should create <title> with text content and a closing tag', () => {
    expect(getTag('title', 'Test Title')).toBe(
      '<title>Test Title</title>'
    );
  });

  it('should create <a> with attributes and a closing tag', () => {
    expect(getTag('a', 'Bug Saves The World', { href: 'foo' })).toBe(
      '<a href="foo">Bug Saves The World</a>'
    );
  });

  it('should create <meta>', () => {
    expect(getTag('meta', null, { name: 'author', content: 'foo' })).toBe(
      '<meta name="author" content="foo">'
    );
  });

  it('should create <link>', () => {
    expect(getTag('link', null, { rel: 'stylesheet', href: 'style.css' })).toBe(
      '<link rel="stylesheet" href="style.css">'
    );
  });

  it('should create <p> tag with text content and class attribute', () => {
    expect(getTag('p', 'foo bar', { class: 'prose' })).toBe(
      '<p class="prose">foo bar</p>'
    );
  });

  it('should create <img> tag', () => {
    expect(getTag('img', null, { src: 'foo.jpg', alt: 'a test image' })).toBe(
      '<img src="foo.jpg" alt="a test image">'
    );
  });

  it('should create <h1> tag', () => {
    expect(getTag('h1', 'Some Heading')).toBe('<h1>Some Heading</h1>');
  })

  it('should create empty non self closing tag', () => {
    expect(getTag('title')).toBe('<title></title>');
  });

  it('should create empty self closing tag', () => {
    expect(getTag('meta')).toBe('<meta>');
  });

  it('should create self closing tag with optional closing slash', () => {
    expect(getTag('img', null, null, true, true)).toBe('<img />');
  });

  it('should throw error when a tag name is not provided', () => {
    const getTagMock = () => getTag();
    expect(getTagMock).toThrow(
      'Invalid HTML tag name. The first parameter `tag` is required and must be a string'
    );
  });

  it('should throw error when provided an invalid tag parameter', () => {
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
