package com.brageast.blog.thisboot.entity

import com.fasterxml.jackson.databind.annotation.JsonSerialize
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

/**
 * 对应属性在this-blog-react
 *
 * @author chenmo
 */
@Document(collection = "Article")
data class Article(@Id
                   @JsonSerialize(using = ToStringSerializer::class)
                   var articleId: ObjectId? = null,
                   var title: String? = null,
                   var label: Array<String>? = emptyArray(),
                   var classify: String? = null,
                   var describe: String? = null,
                   var startDate: Date? = null,
                   var upDate: Date? = null,
                   var author: String? = null,
                   var content: String? = null,
                   var chick: Int? = null,
                   var replys: Array<Reply>? = emptyArray(),
                   var articleType: ArticleType? = null
)
