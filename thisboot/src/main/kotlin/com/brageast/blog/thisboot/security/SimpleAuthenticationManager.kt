package com.brageast.blog.thisboot.security

import com.brageast.blog.thisboot.repository.UserRepository
import org.springframework.context.annotation.Bean
import org.springframework.security.authentication.UserDetailsRepositoryReactiveAuthenticationManager
import org.springframework.security.core.userdetails.ReactiveUserDetailsService
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder

class SimpleAuthenticationManager {
    @Bean
    fun simpleReactiveUserDetailsService(userRepository: UserRepository): ReactiveUserDetailsService = SimpleReactiveUserDetailsService(userRepository)


    /**
     * 密码加密器
     */
    @Bean
    fun bCryptPasswordEncoder() = BCryptPasswordEncoder()

    @Bean
    fun userDetailsRepositoryReactiveAuthenticationManager(reactiveUserDetailsService: ReactiveUserDetailsService, bCryptPasswordEncoder: BCryptPasswordEncoder): UserDetailsRepositoryReactiveAuthenticationManager {
        val userDetailsRepositoryReactiveAuthenticationManager = UserDetailsRepositoryReactiveAuthenticationManager(reactiveUserDetailsService)
        userDetailsRepositoryReactiveAuthenticationManager.setPasswordEncoder(bCryptPasswordEncoder)
        return userDetailsRepositoryReactiveAuthenticationManager
    }
}