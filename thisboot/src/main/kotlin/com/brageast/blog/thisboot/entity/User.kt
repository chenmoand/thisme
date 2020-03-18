package com.brageast.blog.thisboot.entity

import com.fasterxml.jackson.databind.annotation.JsonSerialize
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer
import org.bson.types.ObjectId
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.domain.Persistable
import org.springframework.data.mongodb.core.index.Indexed
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.MongoId
import java.util.*
import javax.validation.constraints.Email

@Document(collection = "user")
data class User(
        @MongoId
        @JsonSerialize(using = ToStringSerializer::class)
        val userId: ObjectId? = null,
        @Indexed(unique = true, name = "name")
        var name: String,
        var password: String,
        @Email
        var email: String?,
        @CreatedDate
        var joinTime: Date? = null, // 加入时间
        var accountExpiredTime: Date? = null, // 账户过期时间, null为永不过期
        var authorities: Set<String> = emptySet(),  // 权限列表
        var ban: Boolean = false // 是否被封禁
) : Persistable<ObjectId> {

    override fun getId(): ObjectId? = userId;

    override fun isNew(): Boolean = userId == null;
}