package com.brageast.blog.thisboot.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

/**
 * 主要index
 * @author chenmo
 */
@Slf4j
@RestController
public class IndexController {
    @RequestMapping
    public Mono<String> doIndex() {
        return Mono.just("hello world");
    }
}
