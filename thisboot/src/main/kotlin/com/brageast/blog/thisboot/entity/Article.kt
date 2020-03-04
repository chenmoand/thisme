package com.brageast.blog.thisboot.entity

import com.fasterxml.jackson.core.JsonGenerator
import com.fasterxml.jackson.databind.JsonSerializer
import com.fasterxml.jackson.databind.SerializerProvider
import com.fasterxml.jackson.databind.annotation.JsonSerialize
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer
import org.bson.types.ObjectId
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.MongoId
import org.springframework.http.HttpStatus
import java.util.*

/**
 * 对应属性在this-blog-react
 * 19/12/31 剔除replys 让他独立成为一个集合
 * 20/1/14 楼上可真蠢, ps: 雾 还是自己换回来把
 *
 * @author chenmo
 */
@Document(collection = "article")
data class Article(@MongoId
                   @JsonSerialize(using = ToStringSerializer::class)
                   val articleId: ObjectId? = null,
                   var title: String?,
                   var label: List<String> = emptyList(),
                   var classify: String?,
                   var describe: String?,
                   var startDate: Date?,
                   var update: Date?,
                   var author: String?,
                   var content: String?,
                   var chick: Int? = 0,
                   @JsonSerialize(using = ToArticleTypeSerializer::class)
                   var articleType: ArticleType? = ArticleType.ORIGINAL,
                   var replys: List<Reply> = emptyList()
)

enum class ArticleType(val value: String) {
    /* 原创 */ORIGINAL("原创"),
    /* 转载 */REPRINT("转载");
}

class ToArticleTypeSerializer : JsonSerializer<ArticleType>() {
    override fun serialize(type: ArticleType?, gen: JsonGenerator?, serializers: SerializerProvider?) {
        if(type != null && gen != null) {
            val type = type.value
            gen.writeNumber(type)
        }
    }
}

/**
 * 回复
 */
data class Reply(
        var name: String?,
        var startDate: Date?,
        var upDate: Date?,
        var content: String?,
        // 嵌套回复
        var replys: List<Reply> = emptyList()
)