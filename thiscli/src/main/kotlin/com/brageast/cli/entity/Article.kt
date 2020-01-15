package com.brageast.cli.entity

import com.brageast.cli.util.ConfigUtil.configInfo
import java.util.*

data class Article(
        val articleId: String? = null,
        var title: String? = null,
        var label: List<String>? = null,
        var classify: String? = null,
        var describe: String? = null,
        var startDate: Date? = null,
        var upDate: Date = Date(),
        var author: String? = configInfo.author,
        var content: String? = null,
        var articleType: ArticleType = ArticleType.ORIGINAL
)
enum class ArticleType {
    /* 原创 */ORIGINAL,
    /* 转载 */REPRINT
}

data class ArticlesInfo(val date: String, var articleInfos: ArrayList<Article>)