package com.brageast.blog.thisboot.entity

import com.fasterxml.jackson.databind.annotation.JsonSerialize
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

/**
 * 回复
 */
@Document(collection = "reply")
data class Reply(
        @Id
        @JsonSerialize(using = ToStringSerializer::class)
        val replyId: ObjectId,
        var name: String? = null,
        var startDate: Date? = null,
        var upDate: Date? = null,
        var content: String? = null,
        // 嵌套回复
        var replys: Array<Reply>? = null
)