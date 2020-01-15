package com.brageast.blog.thisboot.entity

import com.fasterxml.jackson.databind.annotation.JsonSerialize
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

/**
 * 对应属性在this-blog-react
 * 19/12/31 剔除replys 让他独立成为一个集合
 * 20/1/14 楼上可真蠢, ps: 雾 还是自己换回来把
 *
 * @author chenmo
 */
@Document(collection = "article")
data class Article(@Id
                   @JsonSerialize(using = ToStringSerializer::class)
                   val articleId: ObjectId,
                   var title: String?,
                   var label: List<String> = listOf(),
                   var classify: String?,
                   var describe: String?,
                   var startDate: Date?,
                   var upDate: Date?,
                   var author: String?,
                   var content: String?,
                   var chick: Int?,
                   var articleType: ArticleType?,
                   var replys: List<Reply> = listOf()
)

enum class ArticleType {
    /* 原创 */ORIGINAL,
    /* 转载 */REPRINT
}

/**
 * 回复
 */
data class Reply(
        @Id
        @JsonSerialize(using = ToStringSerializer::class)
        var name: String?,
        var startDate: Date?,
        var upDate: Date?,
        var content: String?,
        // 嵌套回复
        var replys: List<Reply> = listOf()
)