declare type Attributes = Object & {
    [key: string]: string | boolean;
};
declare const selfClosingTags: string[];
declare function isObject(obj: Attributes): boolean;
/**
 * Create an HTML tag string.
 * @param {string} tag HTML tag name.
 * @param {string} textContent Text content for the element.
 * @param {Object} attributes Object representing attribute key/value pairs.
 * @param {boolean} selfClosing Boolean representing a self closing element. Set to true if `tag` is a known [void-element](https://www.w3.org/TR/2011/WD-html-markup-20110113/syntax.html#void-elements)
 * @returns {string} A string representing the HTML element.
 */
declare function getTag(tag: string, textContent?: string, attributes?: Attributes | undefined, selfClosing?: boolean): string;
