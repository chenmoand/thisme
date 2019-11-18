package com.brageast.blog.thisboot.service;

import com.brageast.blog.thisboot.entity.Article;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ArticleService {
    Flux<Article> limitShow(int page, int size);

    Mono<Article> insert(Mono<Article> article);

    Mono<Article> insert(Article article);

    Flux<Article> show();

    Mono<DeleteResult> delete(String id);

    Mono<UpdateResult> update(Article article);

    Mono<Article> findArticleId(String articleId);
}
