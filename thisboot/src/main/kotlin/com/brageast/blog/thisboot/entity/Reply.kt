package com.brageast.blog.thisboot.entity

import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

/**
 * 回复
 */
@Document
data class Reply(
    var name: String? = null,
    var startDate: Date? = null,
    var upDate: Date? = null,
    var content: String? = null,
    /**
     * 多重回复
     */
    var replys: Array<Reply>? = null
)