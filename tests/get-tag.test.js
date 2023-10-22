const getTag = require('../dist/get-tag');

describe('getTag module', () => {
  it('create <title> without attributes and with a closing tag', () => {
    expect(getTag('title', 'Test Title')).toBe(
      '<title>Test Title</title>'
    );
  });

  it('create <a> with attributes and a closing tag', () => {
    expect(getTag('a', 'Bug Saves The World', { href: 'foo' })).toBe(
      '<a href="foo">Bug Saves The World</a>'
    );
  });

  it('create <meta>', () => {
    expect(getTag('meta', null, { name: 'author', content: 'foo' })).toBe(
      '<meta name="author" content="foo">'
    );
  });

  it('create <link>', () => {
    expect(getTag('link', null, { rel: 'stylesheet', href: 'style.css' })).toBe(
      '<link rel="stylesheet" href="style.css">'
    );
  });

  it('create <p>', () => {
    expect(getTag('p', 'foo bar', { class: 'prose' })).toBe(
      '<p class="prose">foo bar</p>'
    );
  });

  it('create <img>', () => {
    expect(getTag('img', null, { src: 'foo.jpg', alt: 'a test image' })).toBe(
      '<img src="foo.jpg" alt="a test image">'
    );
  });

  it('create <h1>', () => {
    expect(getTag('h1', 'Some Heading')).toBe('<h1>Some Heading</h1>');
  })

  it('create empty non self closing', () => {
    expect(getTag('title')).toBe('<title></title>');
  });

  it('create empty self closing', () => {
    expect(getTag('meta')).toBe('<meta>');
  });

  it('create img element with closing slash', () => {
    expect(getTag('img', null, null, true, true)).toBe('<img />');
  });

  it('throws error when a tag name is not provided', () => {
    const getTagMock = () => getTag();
    expect(getTagMock).toThrow(
      'Invalid HTML tag name. The first parameter `tag` is required and must be a string'
    );
  });

  it('throws error when provided an invalid tag parameter', () => {
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
