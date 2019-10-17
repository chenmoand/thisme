package com.brageast.blog.thisboot.config;

import com.brageast.blog.thisboot.controller.IndexController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.config.EnableWebFlux;
import org.springframework.web.reactive.config.WebFluxConfigurer;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

/**
 * WebFlux的配置
 * @author chenmo
 *
 */
@EnableWebFlux
@Configuration
public class WebFluxConfig implements WebFluxConfigurer {

    /*private final IndexController indexController;

    public WebFluxConfig(IndexController indexController) {
        this.indexController = indexController;
    }

    @Bean
    public RouterFunction<ServerResponse> webFluxRoutesRegister() {
        return RouterFunctions.
                route(RequestPredicates.GET("/"), indexController::doIndex);
    }*/
}
