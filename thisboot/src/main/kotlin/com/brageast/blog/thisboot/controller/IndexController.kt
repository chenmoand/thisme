package com.brageast.blog.thisboot.controller

import com.brageast.blog.thisboot.entity.User
import com.brageast.blog.thisboot.service.UserService
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import reactor.core.publisher.Mono


/**
 * 主要index显示页面
 *
 * @author chenmo
 */
@Controller
class IndexController(
        val userService: UserService
) {


    @GetMapping(
            value = [
                "/", "/index.html", "/index", "/about/**",
                "/update/**", "/article/**", "/directory/**", "/error"
            ]
    )
    fun doIndex(): Mono<String> = Mono.just("index.html")


    /**
     * 用户登陆
     */
    @GetMapping(value = ["/login"])
    @PreAuthorize("isAnonymous()") // 没登陆可以访问, 防止多次登陆
    fun doLogin(): Mono<String> = Mono.just("login/index")

    @GetMapping(value = ["/test"])
    @PreAuthorize("hasAuthority('ADMIN')")
    fun doTest(): Mono<String> = Mono.just("index.html")

    @PostMapping(value = ["/registerUser"])
    fun register(user: User): Mono<String> {
        userService.insert(user);
        return Mono.just("index.html")
    }
}