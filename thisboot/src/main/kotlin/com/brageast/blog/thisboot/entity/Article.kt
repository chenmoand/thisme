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
                   var title: String?,
                   var label: Array<String>?,
                   var classify: String?,
                   var describe: String?,
                   var startDate: Date?,
                   var upDate: Date?,
                   var author: String?,
                   var content: String?,
                   var chick: Int?,
                   var articleType: ArticleType?
)
