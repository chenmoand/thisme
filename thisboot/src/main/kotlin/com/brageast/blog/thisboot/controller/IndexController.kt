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
import reactor.core.publisher.Mono
import reactor.kotlin.core.publisher.toMono
import javax.validation.Valid


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

    // 将部分URL处理交给前端, 这么做也算是黑魔法把
    @GetMapping("/", "/index.html", "/index", "/about/**",
            "/update/**", "/article/**", "/directory/**", "/error")
    fun doIndex(): Mono<String> = "index.html".toMono()

    // 用户登陆
    @GetMapping("/login")
    @PreAuthorize("isAnonymous()") // 没登陆可以访问, 防止多次登陆
    fun doLogin(): Mono<String> = "login/index.html".toMono()

    @PostMapping("/register")
    @PreAuthorize("isAnonymous()")
    fun register(@Valid user: User, model: Model): Mono<String> = "login/callback.html"
            .toMono()
            .zipWith(userService
                    .insert(user)
                    .hasElement()
            ) { str, has ->
                if (has)
                    model.addAttribute("status", "注册成功")
                else
                    model.addAttribute("status", "注册失败")
                return@zipWith str
            }

    // https://github.com/login/oauth/authorize?client_id=98e07a1e606d561ed02a
    @ResponseBody
    @GetMapping(path = ["/github"])
    @PreAuthorize("isAnonymous()")
    //TODO 暂未完成
    fun github(code: String): Mono<Map<String, String>> = gitHubService
            .getAccessToken(code)
            .filter {
                it.startsWith("access_token=")
            }
            .elementAt(0)
            .flatMap {
                gitHubService.getUserInfo(it.split('=')[1])
            }
}