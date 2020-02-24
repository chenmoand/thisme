package com.brageast.blog.thisboot.security

import com.brageast.blog.thisboot.repository.UserRepository
import org.springframework.security.core.userdetails.ReactiveUserDetailsService
import org.springframework.security.core.userdetails.UserDetails
import reactor.core.publisher.Mono
import java.util.concurrent.ConcurrentHashMap


class SimpleReactiveUserDetailsService(
        private val userRepository: UserRepository
) : ReactiveUserDetailsService {

    // TODO 没有缓存, 暂时用HashMap当作缓存
    private val userDetailsMap = ConcurrentHashMap<String, UserDetails>(32)

    override fun findByUsername(username: String): Mono<UserDetails> {
        var userDetails: UserDetails = userDetailsMap[username]
                ?: return userRepository.findByName(username).map {
                    val simpleUserDetails = SimpleUserDetails(it)
                    userDetailsMap[username] = simpleUserDetails
                    simpleUserDetails
                }

        return Mono.just(userDetails)
    }

}