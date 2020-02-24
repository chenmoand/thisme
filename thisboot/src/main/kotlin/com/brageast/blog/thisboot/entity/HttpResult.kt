package com.brageast.blog.thisboot.entity

import com.fasterxml.jackson.core.JsonGenerator
import com.fasterxml.jackson.databind.JsonSerializer
import com.fasterxml.jackson.databind.SerializerProvider
import com.fasterxml.jackson.databind.annotation.JsonSerialize
import org.springframework.http.HttpStatus


data class HttpResult<T: Any>(
        @JsonSerialize(using = ToHttpStatusSerializer::class)
        val state: HttpStatus = HttpStatus.OK,
        val message: String = "Success",
        val data: T? = null
)

class ToHttpStatusSerializer : JsonSerializer<HttpStatus>() {
    override fun serialize(value: HttpStatus?, gen: JsonGenerator?, serializers: SerializerProvider?) {
        if(value != null && gen != null) {
            val _value = value.value()
            gen.writeNumber(_value)
        }
    }
}

