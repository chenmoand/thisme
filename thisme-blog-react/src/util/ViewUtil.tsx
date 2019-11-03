import {WebType} from "../redux/reducers/mainReducer";

/**
 * 获取视图的大小
 * @param webType true 表示平板或者电脑 false表示手机
 */
export const viewSize = (webType: WebType) : boolean => {
    switch (webType) {
        case WebType.BIG:
        case WebType.IN:
            return true;
        case WebType.SMALL:
        default:
            return false;
    }
};