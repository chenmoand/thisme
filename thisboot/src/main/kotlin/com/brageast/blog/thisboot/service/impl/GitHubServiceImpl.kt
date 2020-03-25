package com.brageast.blog.thisboot.service.impl

import com.brageast.blog.thisboot.service.GitHubService
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import org.springframework.web.reactive.function.client.bodyToMono
import reactor.core.publisher.Mono

@Service
class GitHubServiceImpl(
        val webClient: WebClient,
        val mapper: ObjectMapper
) : GitHubService {

    override fun getAccessToken(code: String) = webClient
            .post()
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
            .flatMap { resp ->
                // 这个地方真坑, 我研究了2个多小时, (‾◡◝)
                // 我一直纳闷bodyToXXX 为啥还能接收个参数 就是Class
                // 我以为他会善良得帮我序列化一下, 结果一直报错, 我在想,
                // 在编写得时候为什么不给个默认得String得方式, 太坑了
                resp.bodyToMono<String>()
            }
            .map { result ->
                val map = hashMapOf<String, String>()
                for (s in result.split('&')) {
                    val split = s.split('=')
                    map[split[0]] = split[1]
                }
                return@map map
            }

    override fun getUserInfo(token: String) = webClient
            .get()
            .uri("https://api.github.com/user")
            .header("Authorization", "token $token")
            .exchange()
            .flatMap {
                it.bodyToMono<String>()
            }
            .map {
                mapper.readValue<Map<String, String>>(it)
            }

}