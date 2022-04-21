"use strict";
/**
 * Create an HTML element string.
 * @param {string} tag HTML tag name.
 * @param {string} textContent Text content for the element.
 * @param {Attributes} attributes An object representing key/value pair element attributes.
 * @return {string} A string representing the constructed HTML element.
 */
function createTag(tag, attributes, textContent = "", isSelfClosing = false) {
    const selfClosingTags = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];
    const selfClosing = selfClosingTags.includes(tag) || isSelfClosing;
    let fields = "";
    if (typeof attributes == "object" && Object.keys(attributes).length > 0) {
        for (const key in attributes) {
            fields += `${key}="${attributes[key]}" `;
        }
        return `<${tag} ${fields.slice(0, fields.length - 1)}>${!selfClosing ? textContent : ""}${!selfClosing ? `</${tag}>` : ""}`;
    }
    return `<${tag}>${!selfClosing ? textContent : ""}${!selfClosing ? `</${tag}>` : ""}`;
}
module.exports = createTag;
