package com.brageast.blog.thisboot.service;

import com.brageast.blog.thisboot.entity.Article;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ArticleService {
    Flux<Article> limitShow(int limit);

    Mono<Article> insert(Article article);

    void show();
}
