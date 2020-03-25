@file:JvmName("GlobalFunction")

package com.brageast.blog.thisboot.util

import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.core.JsonParser
import com.fasterxml.jackson.databind.ObjectMapper
import org.bson.types.ObjectId
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query

/**
 * note: Spring有Bean我只是单独声明了一个
 *
 */
val basalObjectMapper by lazy {
    ObjectMapper().apply {
        this.setSerializationInclusion(JsonInclude.Include.NON_EMPTY)
    }
}

fun Any.toJSON(): String? = basalObjectMapper.writeValueAsString(this)

inline fun <reified T> String.toBean(): T =  basalObjectMapper.readValue(this, T::class.java)

fun <T> String.toBean(cls: Class<T>): T = basalObjectMapper.readValue(this, cls)

fun ObjectId.toQueryById(id: String): Query = Query.query(Criteria().and(id).`is`(this.toString()))

inline fun <reified T> loggerOf(): Logger = LoggerFactory.getLogger(T::class.java)

fun loggerOf(cls: Class<*>): Logger = LoggerFactory.getLogger(cls)