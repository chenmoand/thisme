package com.brageast.cli.entity

import java.util.*

data class Article(
        val articleId: String?,
        var title: String?,
        var label: Array<String> = arrayOf(),
        var classify: String?,
        var describe: String?,
        var startDate: Date = Date(),
        var upDate: Date = Date(),
        var author: String?,
        var content: String?,
        var articleType: ArticleType = ArticleType.ORIGINAL
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Article

        if (articleId != other.articleId) return false
        if (title != other.title) return false
        if (!label.contentEquals(other.label)) return false
        if (classify != other.classify) return false
        if (describe != other.describe) return false
        if (startDate != other.startDate) return false
        if (upDate != other.upDate) return false
        if (author != other.author) return false
        if (content != other.content) return false
        if (articleType != other.articleType) return false

        return true
    }

    override fun hashCode(): Int {
        var result = articleId?.hashCode() ?: 0
        result = 31 * result + (title?.hashCode() ?: 0)
        result = 31 * result + label.contentHashCode()
        result = 31 * result + (classify?.hashCode() ?: 0)
        result = 31 * result + (describe?.hashCode() ?: 0)
        result = 31 * result + startDate.hashCode()
        result = 31 * result + upDate.hashCode()
        result = 31 * result + (author?.hashCode() ?: 0)
        result = 31 * result + (content?.hashCode() ?: 0)
        result = 31 * result + articleType.hashCode()
        return result
    }
}

enum class ArticleType {
    /* 原创 */ORIGINAL,
    /* 转载 */REPRINT
}