package com.brageast.blog.thisboot.config

import com.brageast.blog.thisboot.annotation.EnableAuthenticationManager
import org.springframework.boot.autoconfigure.security.reactive.PathRequest
import org.springframework.context.annotation.Bean
import org.springframework.security.config.annotation.method.configuration.EnableReactiveMethodSecurity
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity
import org.springframework.security.config.web.server.ServerHttpSecurity
import org.springframework.security.web.server.SecurityWebFilterChain

@EnableWebFluxSecurity
@EnableReactiveMethodSecurity
@EnableAuthenticationManager
class SecurityConfig {

    /**
     * web安全配置
     *
     * @param http
     * @return https://docs.spring.io/spring-boot/docs/2.2.0.RELEASE/reference/htmlsingle/#boot-features-security-webflux
     */
    @Bean
    fun securityWebFilterChain(http: ServerHttpSecurity): SecurityWebFilterChain = http.run {
        // csrf 有待测试, 并没有前后端分离的考虑
        // 后端是前端的载物, 如果IP多个的话在尝试关掉 csrf
        csrf()
        formLogin()
        logout()
        httpBasic().disable()

        // 通过注解方式来进行权限验证
        authorizeExchange()
                .matchers(PathRequest.toStaticResources().atCommonLocations())
                .permitAll()
                .pathMatchers("/**")
                .permitAll()



        build()
    }

}