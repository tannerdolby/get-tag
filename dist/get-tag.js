"use strict";
function element(tag, content = "", selfClosing = false, tagInfo = tag) {
    return `<${tagInfo}>${!selfClosing ? content : ""}${!selfClosing ? `</${tag}>` : ""}`;
}
;
/**
 * Create an HTML tag string.
 * @param {string} tag HTML tag name.
 * @param {Attributes} attributes An object representing attribute key/value pairs.
 * @param {string} textContent Text content for the element.
 * @return {string} A string representing the constructed HTML element.
 */
module.exports = (tag, textContent = "", attributes, isSelfClosing = false) => {
    const selfClosingTags = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];
    tag = tag.toLowerCase();
    const selfClosing = selfClosingTags.includes(tag) || isSelfClosing;
    let fields = "";
    if (attributes && typeof attributes == "object" && Object.keys(attributes).length > 0) {
        for (const key in attributes) {
            fields += `${key}="${attributes[key]}" `;
        }
        return element(tag, textContent, selfClosing, `${tag} ${fields.slice(0, fields.length - 1)}`);
    }
    return element(tag, textContent, selfClosing);
};
