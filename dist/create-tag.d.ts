interface Attributes {
    [key: string]: string | boolean;
}
/**
 * Create an HTML element string.
 * @param {string} tag HTML tag name.
 * @param {string} textContent Text content for the element.
 * @param {Attributes} attributes An object representing key/value pair element attributes.
 * @return {string} A string representing the constructed HTML element.
 */
declare function createTag(tag: string, attributes: Attributes, textContent?: string, isSelfClosing?: boolean): string;
