package com.brageast.blog.thisboot

import com.brageast.blog.thisboot.util.loggerOf
import org.slf4j.Logger
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication


val log: Logger = loggerOf<ThisbootApplication>()

@SpringBootApplication
class ThisbootApplication
/**
 * 19/12/31 原先java 代码替换为kotlin
 *          要敢于刚新东西, 自己收获了才是真的,
 */
fun main(args: Array<String>) {
    runApplication<ThisbootApplication>(*args)
    log.info("代码托管于 https://github.com/chenmoand/thisme")
}

