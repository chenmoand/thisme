package com.brageast.blog.thisboot.service

import reactor.core.publisher.Mono

interface GitHubService {
    fun getAccessToken(code: String): Mono<HashMap<String, String>>
}