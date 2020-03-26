package com.brageast.blog.thisboot.security

import com.brageast.blog.thisboot.repository.UserRepository
import org.springframework.security.core.userdetails.ReactiveUserDetailsService
import org.springframework.security.core.userdetails.UserDetails
import reactor.core.publisher.Mono
import java.util.concurrent.ConcurrentHashMap


class SimpleReactiveUserDetailsService(
        private val userRepository: UserRepository
) : ReactiveUserDetailsService {

    // TODO WebFlux对缓存支持的并不好, 暂时用ConcurrentHashMap当作缓存, 用户删除可会出现问题
    private val userDetailsMap by lazy { ConcurrentHashMap<String, UserDetails>() }

    override fun findByUsername(username: String): Mono<UserDetails> {

        val userDetail = userDetailsMap[username]

        return if (userDetail == null) userRepository
                .findByName(username)
                .map {
                    val simpleUserDetails = SimpleUserDetails(it)
                    userDetailsMap[username] = simpleUserDetails
                    simpleUserDetails
                }
        else Mono.just(userDetail)
    }

}