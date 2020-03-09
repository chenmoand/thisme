package com.brageast.blog.thisboot.entity

import com.fasterxml.jackson.core.JsonGenerator
import com.fasterxml.jackson.databind.JsonSerializer
import com.fasterxml.jackson.databind.SerializerProvider
import com.fasterxml.jackson.databind.annotation.JsonSerialize
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer
import org.bson.types.ObjectId
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.domain.Persistable
import org.springframework.data.mongodb.core.index.Indexed
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field
import org.springframework.data.mongodb.core.mapping.MongoId
import java.util.*

/**
 * 对应属性在this-blog-react
 * 19/12/31 剔除replys 让他独立成为一个集合
 * 20/1/14 楼上可真蠢, ps: 雾 还是自己换回来把
 *
 * @author chenmo
 */
@Document(collection = "article")
data class Article(
        @MongoId
        @JsonSerialize(using = ToStringSerializer::class)
        val articleId: ObjectId? = null,
        var title: String? = null,
        var label: List<String> = emptyList(),
        var classify: String? = null,
        var describe: String? = null,
        @CreatedDate
        var createdDate: Date? = null,
        @LastModifiedDate
        var lastModifiedDate: Date? = null,
        var author: String? = null,
        var content: String? = null,
        @JsonSerialize(using = ToArticleTypeSerializer::class)
        var articleType: ArticleType? = ArticleType.ORIGINAL,
        var replys: List<Reply> = emptyList()
) : Persistable<ObjectId> {

    override fun getId(): ObjectId? = articleId

    override fun isNew(): Boolean = createdDate == null

}

enum class ArticleType(val value: String) {
    /* 原创 */ORIGINAL("原创"),
    /* 转载 */REPRINT("转载");
}

class ToArticleTypeSerializer : JsonSerializer<ArticleType>() {
    override fun serialize(type: ArticleType?, gen: JsonGenerator?, serializers: SerializerProvider?) {
        if (type != null && gen != null) {
            val value = type.value
            gen.writeNumber(value)
        }
    }
}

/**
 * 回复
 */
data class Reply(
        var createdBy: String? = null,
        var createdDate: Date? = null,
        var lastModifiedDate: Date? = null,
        var content: String?,
        // 嵌套回复
        var replys: List<Reply> = emptyList()
)