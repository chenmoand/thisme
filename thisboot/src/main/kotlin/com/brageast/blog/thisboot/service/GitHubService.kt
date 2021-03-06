package com.brageast.blog.thisboot.service

import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

interface GitHubService {
    fun getAccessToken(code: String): Flux<String>
    fun getUserInfo(token: String): Mono<out Map<String, String>>
}