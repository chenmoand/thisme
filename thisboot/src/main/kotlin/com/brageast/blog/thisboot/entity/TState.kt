package com.brageast.blog.thisboot.entity

enum class TState constructor(val code: Int) {
    //成功
    SUCCESS(200),

    //失败
    FAIL(400),

    //错误
    FALSE(404),

    //token过期
    EXPIRED(401),

    //无权限
    NOPERMISSION(403),

    //内部错误
    ERROR(500)
}