package com.brageast.blog.thisboot.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
@EnableWebFluxSecurity
//@EnableOAuth2Sso
public class SecurityConfig {

    /**
     * web安全配置
     * @param http
     * @return
     * https://docs.spring.io/spring-boot/docs/2.2.0.RELEASE/reference/htmlsingle/#boot-features-security-webflux
     */
    @Bean
    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {
        //TODO 暂时先放行全部
        http.csrf().disable()
                .authorizeExchange()
                .pathMatchers("/**")
                .permitAll();
        return http.build();
    }
}
