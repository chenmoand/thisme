package com.brageast.blog.thisboot.controller;

import com.brageast.blog.thisboot.entity.Article;
import com.brageast.blog.thisboot.service.ArticleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Slf4j
@Component
@RestController
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @GetMapping("/getAllArticle")
    public Flux<Article> getAllArticle() {
        return articleService.show();
    }

    @PostMapping("/addArticle")
    @ResponseBody
    public Mono<Article> addArticle(@RequestBody Article article) {
        System.out.println(article);
        return articleService.insert(article);
    }

    @GetMapping("/getPageArticle")
    public Flux<Article> getPageArticle(@RequestParam(defaultValue = "1") int page,
                                        @RequestParam(defaultValue = "10") int size) {
        return articleService.limitShow(page, size);
    }
}
