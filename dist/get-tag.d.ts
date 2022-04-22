declare type Attributes = {
    [key: string]: string | boolean;
};
declare function element(tag: string, content?: string, selfClosing?: boolean, tagInfo?: string): string;
