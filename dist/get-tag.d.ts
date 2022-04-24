declare type Attributes = {
    [key: string]: string | boolean;
};
declare function element(tag: string, content?: string, selfClosing?: boolean, tagInfo?: string): string;
/**
 * Create an HTML tag string.
 * @param {string} tag HTML tag name.
 * @param {string} textContent Text content for the element.
 * @param {Object} attributes Object representing attribute key/value pairs.
 * @param {boolean} selfClosing Boolean representing a self closing element. Default: false (or true if `tag` is a known [void-element](https://www.w3.org/TR/2011/WD-html-markup-20110113/syntax.html#void-elements))
 * @return {string} A string representing the constructed HTML element.
 */
declare function getTag(tag: string, textContent: string, attributes: Attributes | undefined, selfClosing?: boolean): string;
