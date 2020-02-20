package com.brageast.blog.thisboot.config

import org.springframework.boot.autoconfigure.security.reactive.PathRequest
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.method.configuration.EnableReactiveMethodSecurity
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity
import org.springframework.security.config.web.server.ServerHttpSecurity
import org.springframework.security.core.userdetails.ReactiveUserDetailsService
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.web.server.SecurityWebFilterChain
import reactor.core.publisher.Mono

@Configuration
@EnableWebFluxSecurity
@EnableReactiveMethodSecurity
class SecurityConfig {

    /**
     * web安全配置
     *
     * @param http
     * @return https://docs.spring.io/spring-boot/docs/2.2.0.RELEASE/reference/htmlsingle/#boot-features-security-webflux
     */
    @Bean
    fun securityWebFilterChain(http: ServerHttpSecurity) : SecurityWebFilterChain {
        //TODO 暂时先放行全部
        return http.csrf().disable()
                .formLogin().disable()
                .httpBasic().disable()
                .authorizeExchange()
                .matchers(PathRequest.toStaticResources().atCommonLocations())
                .permitAll()
                .pathMatchers("/**")
                .permitAll()
                .and().build();
    }



}