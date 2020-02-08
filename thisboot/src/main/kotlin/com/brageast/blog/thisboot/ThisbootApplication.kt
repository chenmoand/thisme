package com.brageast.blog.thisboot

import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories


@SpringBootApplication
class ThisbootApplication

val log: Logger = getLogger<ThisbootApplication>()

/**
 * 19/12/31 原先java 代码替换为kotlin
 *          要敢于刚新东西, 自己收获了 才是真的,
 */
fun main(args: Array<String>) {
    runApplication<ThisbootApplication>(*args)
    log.info("代码托管于 https://github.com/chenmoand/thisme")
}

inline fun <reified T> getLogger(): Logger = LoggerFactory.getLogger(T::class.java)