export const equalPath = (loc: string, url: string): boolean => {
    let pathname = loc.replace('/article/','');
    return pathname === url;
};

export const articlePath = (url: string) => {
    return '/article/' + url;
};