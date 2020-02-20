package com.brageast.blog.thisboot

import com.brageast.blog.thisboot.util.loggerOf
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication


val log = loggerOf<ThisbootApplication>()

@SpringBootApplication/*(exclude = [ReactiveUserDetailsServiceAutoConfiguration::class])*/
class ThisbootApplication

// enable spring boot
fun main(args: Array<String>) {
    runApplication<ThisbootApplication>(*args)
    log.info("代码托管于 https://github.com/chenmoand/thisme")
}

