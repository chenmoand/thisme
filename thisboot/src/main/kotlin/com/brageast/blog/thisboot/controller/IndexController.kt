package com.brageast.blog.thisboot.controller

import com.brageast.blog.thisboot.entity.User
import com.brageast.blog.thisboot.service.GitHubService
import com.brageast.blog.thisboot.service.UserService
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.ResponseBody
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono


/**
 * 主要index显示页面
 *
 * @author chenmo
 */
@Controller
class IndexController(
        val userService: UserService,
        val gitHubService: GitHubService
) {

    @GetMapping(
            "/", "/index.html", "/index",
            "/about/**", "/update/**",
            "/article/**", "/directory/**", "/error"
    ) // 将部分URL处理交给前端, 这么做也算是黑魔法把
    fun doIndex(): Mono<String> = Mono.just("index.html")

    /**
     * 用户登陆
     */
    @GetMapping("/login")
    @PreAuthorize("isAnonymous()") // 没登陆可以访问, 防止多次登陆
    fun doLogin(): Mono<String> = Mono.just("login/index")

    @PostMapping("/register")
    @PreAuthorize("isAnonymous()")
    fun register(user: User, model: Model): Mono<String> = userService.insert(user).map {
        if(it == null)
            model.addAttribute("status", "注册失败")
        else
            model.addAttribute("status", "注册成功")
        return@map "login/register.html"
    }

    // https://github.com/login/oauth/authorize?client_id=98e07a1e606d561ed02a
    @ResponseBody
    @GetMapping(path = ["/github"]/*, headers= ["Content-Type=application/json"]*/)
    @PreAuthorize("isAnonymous()")
    fun github(code: String): Mono<Map<String, String>> {
        return gitHubService.getAccessToken(code)
    }
}