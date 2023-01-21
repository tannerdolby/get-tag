"use strict";
/**
 * Create an HTML tag string.
 * @param {string} tag HTML tag name.
 * @param {string} textContent Text content for the element.
 * @param {Object} attributes Object representing attribute key/value pairs.
 * @param {boolean} selfClosing Boolean representing a self closing element. Default: false (or true if `tag` is a known [void-element](https://www.w3.org/TR/2011/WD-html-markup-20110113/syntax.html#void-elements))
 * @returns {string} A string representing the HTML element.
 */
function getTag(tag, textContent = '', attributes = {}, selfClosing = false) {
    if (!tag) {
        throw new Error('Missing HTML tag name. The first parameter `tag` is required');
    }
    const selfClosingTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
    let attrs = '';
    tag = tag.toLowerCase();
    selfClosing = selfClosingTags.includes(tag) || selfClosing;
    if (attributes && typeof attributes == 'object' && Object.keys(attributes).length > 0) {
        for (const key in attributes) {
            attrs += `${key}="${attributes[key]}" `;
        }
    }
    return `<${`${tag} ${attrs}`.trim()}>${selfClosing ? '' : `${textContent}</${tag}>`}`;
}
module.exports = getTag;
