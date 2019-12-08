
export const ADDRESSS = "http://127.0.0.1:8080";

export const setRequestUrl = (url: string):string => {
    return ADDRESSS + "/" + url;
};