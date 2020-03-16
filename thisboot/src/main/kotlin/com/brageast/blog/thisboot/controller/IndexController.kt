package com.brageast.blog.thisboot.controller

import com.brageast.blog.thisboot.entity.User
import com.brageast.blog.thisboot.service.UserService
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
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
    ) // 将部分URL处理交给前端, 这么做也算是黑魔法把
    fun doIndex(): Mono<String> = Mono.just("index.html")

    /**
     * 用户登陆
     */
    @GetMapping(value = ["/login"])
    @PreAuthorize("isAnonymous()") // 没登陆可以访问, 防止多次登陆
    fun doLogin(): Mono<String> = Mono.just("login/index")

    @PostMapping(value = ["/register"])
    fun register(user: User, model: Model): Mono<String> {
        userService.insert(user).subscribe{
            // Mono.empty() 方法创建的实例似乎不会走subscribe方法, 所以出此下策
            it?: model.addAttribute("status", "注册失败")
        }
        model.addAttribute("status", "注册成功")
        return Mono.just("login/register.html")
    }
}