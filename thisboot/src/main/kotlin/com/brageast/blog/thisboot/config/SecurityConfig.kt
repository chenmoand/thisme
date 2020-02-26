package com.brageast.blog.thisboot.config

import com.brageast.blog.thisboot.annotation.EnableAuthenticationManager
import com.brageast.blog.thisboot.util.loggerOf
import org.springframework.boot.autoconfigure.security.reactive.PathRequest
import org.springframework.context.annotation.Bean
import org.springframework.security.authorization.AuthorizationDecision
import org.springframework.security.config.annotation.method.configuration.EnableReactiveMethodSecurity
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity
import org.springframework.security.config.web.server.ServerHttpSecurity
import org.springframework.security.web.server.SecurityWebFilterChain
import org.springframework.security.web.server.csrf.WebSessionServerCsrfTokenRepository
import reactor.core.publisher.Mono
import reactor.kotlin.core.publisher.toMono

@EnableWebFluxSecurity
@EnableReactiveMethodSecurity
@EnableAuthenticationManager
class SecurityConfig {

    val log = loggerOf<SecurityConfig>()

    /**
     * web安全配置
     *
     * @param http
     * @return https://docs.spring.io/spring-boot/docs/2.2.0.RELEASE/reference/htmlsingle/#boot-features-security-webflux
     */
    @Bean
    fun securityWebFilterChain(http: ServerHttpSecurity): SecurityWebFilterChain = http.run {
        // csrf 与 Thymeleaf不太兼容
        csrf().disable()

        formLogin().loginPage("/login")

       /* logout().logoutUrl("/logout").logoutSuccessHandler { exchange, authentication ->
            exchange.exchange
                    .addUrlTransformer { "/login" }
            authentication.details
            Mono.empty()
        }*/

        httpBasic().disable()

        // 通过注解方式来进行权限验证
        authorizeExchange()
                /*.matchers(PathRequest.toStaticResources().atCommonLocations())
                .permitAll()*/
                .pathMatchers("/**")
                .permitAll()



        build()
    }

}