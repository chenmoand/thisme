@file:JvmName("GlobalFunction")

package com.brageast.blog.thisboot.util

import com.fasterxml.jackson.databind.ObjectMapper
import org.bson.types.ObjectId
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query

val basalObjectMapper by lazy { ObjectMapper() }

fun Any.toJSON(): String? {
    return basalObjectMapper.writeValueAsString(this)
}

inline fun <reified T> String.toBean(): T {
    return basalObjectMapper.readValue(this, T::class.java)
}

fun ObjectId.toQueryById(id: String): Query = Query.query(Criteria().and(id).`is`(this.toString()))