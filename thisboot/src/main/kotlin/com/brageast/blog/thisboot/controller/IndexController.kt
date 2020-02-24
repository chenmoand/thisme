package com.brageast.blog.thisboot.controller

import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import reactor.core.publisher.Mono


/**
 * 主要index显示页面
 *
 * @author chenmo
 */
@Controller
class IndexController {

    
    @GetMapping(
            value = [
                "/", "/index.html", "/index", "/about/**",
                "/update/**", "/article/**", "/directory/**", "/error"
            ]
    )
    fun doIndex(): Mono<String> {
        return Mono.just("index.html")
    }
}