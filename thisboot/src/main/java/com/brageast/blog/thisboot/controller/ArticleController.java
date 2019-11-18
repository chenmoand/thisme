package com.brageast.blog.thisboot.controller;

import com.brageast.blog.thisboot.entity.Article;
import com.brageast.blog.thisboot.service.ArticleService;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;
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
    public Mono<Boolean> addArticle(@RequestBody Article article) {
        return articleService.
                insert(article).
                log().hasElement();
    }

    @GetMapping("/getPageArticle")
    public Flux<Article> getPageArticle(@RequestParam(defaultValue = "1") int page,
                                        @RequestParam(defaultValue = "10") int size) {
        return articleService.limitShow(page, size);
    }

    @DeleteMapping("/deleteArticle")
    public Mono<DeleteResult> deleteArticle (String id) {
        return articleService.delete(id);
    }

    @PutMapping("/updateArticle")
    public Mono<UpdateResult> updateArticle(@RequestBody Article article) {
        return articleService.update(article);
    }
}
