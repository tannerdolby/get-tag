declare type Attributes = {
    [key: string]: string | boolean;
};
declare function element(tag: string, content?: string, selfClosing?: boolean, tagInfo?: string): string;
/**
 * Create an HTML tag string.
 * @param {string} tag HTML tag name.
 * @param {string} textContent Text content for the element.
 * @param {Attributes} attributes Object representing attribute key/value pairs.
 * @param {boolean} selfClosing Boolean representing a self closing element. Default: false
 * @return {string} A string representing the constructed HTML element.
 */
declare function getTag(tag: string, textContent: string, attributes: Attributes | undefined, isSelfClosing?: boolean): string;
