import {History} from "history";

export const equalPath = (loc: string, url: string): boolean => {
    let pathname = loc.replace('#','');
    return pathname === url;
};