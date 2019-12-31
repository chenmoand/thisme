package com.brageast.blog.thisboot.entity

import com.brageast.blog.thisboot.entity.enums.ArticleType
import com.fasterxml.jackson.databind.annotation.JsonSerialize
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

/**
 * 对应属性在this-blog-react
 * 19/12/31 剔除replys 让他独立成为一个集合
 *
 * @author chenmo
 */
@Document(collection = "article")
data class Article(@Id
                   @JsonSerialize(using = ToStringSerializer::class)
                   val articleId: ObjectId,
                   var title: String? = null,
                   var label: Array<String>? = null,
                   var classify: String? = null,
                   var describe: String? = null,
                   var startDate: Date? = null,
                   var upDate: Date? = null,
                   var author: String? = null,
                   var content: String? = null,
                   var chick: Int? = null,
//                   var replys: Array<Reply>? = null,
                   var articleType: ArticleType? = null
)
