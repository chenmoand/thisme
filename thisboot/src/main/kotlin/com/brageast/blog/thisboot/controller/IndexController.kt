package com.brageast.blog.thisboot.controller

import org.springframework.stereotype.Controller
import reactor.core.publisher.Mono
import org.springframework.web.bind.annotation.GetMapping


/**
 * 主要index显示页面
 *
 * @author chenmo
 */
@Controller
class IndexController {
    @GetMapping(value = ["/", "/index.html", "/index", "/about/**", "/update/**", "/article/**", "/directory/**"])
    fun doIndex(): Mono<String> {
        return Mono.just("index.html")
    }
}