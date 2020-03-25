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
import javax.validation.constraints.Size

@Document(collection = "user")
data class User(
        @MongoId
        @JsonSerialize(using = ToStringSerializer::class)
        val userId: ObjectId? = null,
        @Size(min = 2, max = 12)
        @Indexed(unique = true, name = "name")
        var name: String,
        @Size(min = 6, max = 16)
        var password: String,
        var avatar: String? = null, // 头像地址
        @Email
        var email: String? = null,
        @CreatedDate
        var joinTime: Date? = null, // 加入时间
        var accountExpiredTime: Date? = null, // 账户过期时间, null为永不过期
        var authorities: Set<String> = setOf("USER"),  // 权限列表
        var ban: Boolean = false, // 是否被封禁
        var accountType: AccountType = AccountType.DEFAULT
) : Persistable<ObjectId> {

    override fun getId(): ObjectId? = userId;

    override fun isNew(): Boolean = userId == null;
}

enum class AccountType {
    GITHUB, DEFAULT
}