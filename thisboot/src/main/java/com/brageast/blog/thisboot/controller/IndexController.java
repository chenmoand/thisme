package com.brageast.blog.thisboot.controller;

import com.brageast.blog.thisboot.annotation.Serializable;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.method.support.ModelAndViewContainer;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

/**
 * 主要index
 * @author chenmo
 */
@Slf4j
@Component
//@Controller
public class IndexController {
    public Mono<ServerResponse> doIndex(ServerRequest request) {
        return ServerResponse.ok().
                contentType(MediaType.TEXT_HTML).
                render("index.html");
    }

}
