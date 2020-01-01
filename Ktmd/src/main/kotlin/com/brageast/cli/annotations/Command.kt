package com.brageast.cli.annotations

@MustBeDocumented
@Retention(AnnotationRetention.RUNTIME)
@Target(AnnotationTarget.CLASS)
annotation class Command(
        /**
         * 指令全名 例: --value
         */
        val value: String,
        /**
         * 指令缩写 例: -v
         */
        vararg val alias: String,
        /**
         * 指令描述
         */
        val description: String = "",
        /**
         * 指令权重
         */
        val priority: Int = 0
)