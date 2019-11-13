package com.brageast.blog.thisboot.service.impl;

import com.brageast.blog.thisboot.entity.Article;
import com.brageast.blog.thisboot.service.ArticleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.ReactiveMongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Slf4j
@Service
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    private ReactiveMongoTemplate reactiveMongoTemplate;

    @Override
    public Flux<Article> limitShow(int limit) {
        return reactiveMongoTemplate.findAll(Article.class);
    }

    @Override
    public Mono<Article> insert(Article article) {
        return reactiveMongoTemplate.insert(article);
    }

    @Override
    public void show() {

    }
}
