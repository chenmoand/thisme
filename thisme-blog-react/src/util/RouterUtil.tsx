export const equalPath = (loc: string, url: string): boolean => {
    let pathname = loc.replace('/article/','');
    return pathname === url;
};