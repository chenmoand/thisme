package com.brageast.blog.thisboot.controller

import com.brageast.blog.thisboot.entity.User
import com.brageast.blog.thisboot.service.UserService
import com.brageast.blog.thisboot.util.basalObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.reactive.function.client.WebClient
import org.springframework.web.reactive.function.client.bodyToMono
import reactor.core.publisher.Mono


/**
 * 主要index显示页面
 *
 * @author chenmo
 */
@Controller
class IndexController(
        val userService: UserService,
        val webClient: WebClient
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
    fun register(user: User, model: Model): Mono<String> {
        userService.insert(user).subscribe {
            // Mono.empty() 方法创建的实例似乎不会走subscribe方法, 所以出此下策
            it ?: model.addAttribute("status", "注册失败")
        }
        model.addAttribute("status", "注册成功")
        return Mono.just("login/register.html")
    }

    // https://github.com/login/oauth/authorize?client_id=98e07a1e606d561ed02a
    @GetMapping(path= ["/github"]/*, headers= ["Content-Type=application/json"]*/)
    @ResponseBody
    fun github(code: String) {
        var rep: Map<String, Any> = emptyMap();

        webClient.post()
                .uri("https://github.com/login/oauth/access_token")
                .header("Content-Type", "application/json;charset=utf-8")
                .body(Mono.just(
                        linkedMapOf(
                                "client_id" to "98e07a1e606d561ed02a",
                                "client_secret" to "7b17a3aae019be56709b1ba28bbfde9f70c8941d",
                                "code" to code
                        )), Map::class.java
                )
                .exchange()
                .subscribe {
                    // 这个地方真坑, 我研究了2个多小时, (‾◡◝)
                    // 我一直纳闷bodyToXXX 为啥还能接收个参数 就是Class
                    // 我以为他会善良得帮我序列化一下, 结果一直报错, 我在想,
                    // 在编写得时候为什么不给个默认得String得方式, 太坑了
                    it.bodyToMono<String>()
                            .subscribe { str ->
                                rep = basalObjectMapper.readValue(str)
                            }

                }
//        return rep
    }
}