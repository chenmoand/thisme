package com.brageast.blog.thisboot.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import reactor.core.publisher.Mono;

/**
 * 主要index显示页面
 *
 * @author chenmo
 */
@Slf4j
@Controller
public class IndexController {

    @GetMapping(
            value = {"/", "/index.html", "/index", "/about/**", "/update/**", "/article/**", "/directory/**"}
    )
    public Mono<String> doIndex() {
        return Mono.just("index.html");
    }
}
