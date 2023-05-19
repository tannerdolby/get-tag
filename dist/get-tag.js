"use strict";
const selfClosingTags = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
];
function isObject(obj) {
    if (!obj)
        return false;
    return typeof obj === 'object' && obj.constructor === Object;
}
/**
 * Create an HTML tag string.
 * @param {string} tag HTML tag name.
 * @param {string} textContent Text content for the element.
 * @param {Object} attributes Object representing attribute key/value pairs.
 * @param {boolean} selfClosing Boolean representing a self closing element. Set to true if `tag` is a known [void-element](https://www.w3.org/TR/2011/WD-html-markup-20110113/syntax.html#void-elements)
 * @returns {string} A string representing the HTML element.
 */
function getTag(tag, textContent, attributes, selfClosing) {
    if (!tag || typeof tag !== 'string') {
        throw new Error('Invalid HTML tag name. The first parameter `tag` is required and must be a string');
    }
    let attrs = '';
    tag = tag.toLowerCase();
    selfClosing = selfClosingTags.includes(tag) || selfClosing;
    if (attributes && isObject(attributes)) {
        Object.entries(attributes).forEach(([key, val]) => {
            attrs += `${key}="${val}" `;
        });
    }
    return `<${`${tag} ${attrs}`.trim()}>${selfClosing ? '' : `${textContent || ''}</${tag}>`}`;
}
module.exports = getTag;
