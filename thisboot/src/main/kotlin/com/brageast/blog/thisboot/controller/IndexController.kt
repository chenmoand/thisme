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
    fun doIndex(): Mono<String> = Mono.just("index.html")


    @GetMapping(value = ["/login"])
    fun doLogin(): Mono<String> = Mono.just("login/index")

    @GetMapping(value = ["/test"])
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    fun doTest(): Mono<String> = Mono.just("index.html")
}