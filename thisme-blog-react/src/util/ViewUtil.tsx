import {WebType} from "@/redux/reducers/index-reducer";
import {ArticleType} from "../component/interface/articleInterface";

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

export const doArticleType = (articleType : ArticleType):string => {
    switch (articleType) {
        case "ORIGINAL":
            return "原创";
        case "REPRINT":
            return "转载";
        default:
            return "未知";
    }
};