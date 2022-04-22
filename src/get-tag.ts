type Attributes = {
    [key: string]: string | boolean;
};

function element(tag: string, content: string="", selfClosing: boolean=false, tagInfo: string=tag) {
    return `<${tagInfo}>${!selfClosing ? content : ""}${!selfClosing ? `</${tag}>` : ""}`;
};

/**
 * Create an HTML tag string.
 * @param {string} tag HTML tag name.
 * @param {string} textContent Text content for the element.
 * @param {Attributes} attributes Object representing attribute key/value pairs.
 * @param {boolean} selfClosing Text content for the element. Default: true
 * @return {string} A string representing the constructed HTML element.
 */
module.exports = (tag: string, textContent: string="", attributes: Attributes | undefined, isSelfClosing: boolean = false): string => {
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
}
