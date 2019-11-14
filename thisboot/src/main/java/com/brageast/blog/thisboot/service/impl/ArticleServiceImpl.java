package com.brageast.blog.thisboot.service.impl;

import com.brageast.blog.thisboot.entity.Article;
import com.brageast.blog.thisboot.service.ArticleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
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

    /**
     *
     * @param page 默认减一, 使页面成 1 开始
     * @param size 每页的大小
     * @return
     */
    @Override
    public Flux<Article> limitShow(int page, int size) {
        return reactiveMongoTemplate.find(new Query().with(PageRequest.of(page - 1, size)), Article.class);
    }

    @Override
    public Mono<Article> insert(Mono<Article> article) {
        /*if(reactiveMongoTemplate.insert(article).block() != null) {
            return TResult.ofMono(TState.SUCCESS,  "文章添加成功", true);
        }
        return TResult.ofMono(TState.FAIL,  "文章添加失败", false);*/
        return reactiveMongoTemplate.insert(article);
    }

    @Override
    public Mono<Article> insert(Article article) {
        return reactiveMongoTemplate.insert(article);
    }

    @Override
    public Flux<Article> show() {
        return reactiveMongoTemplate.findAll(Article.class);
    }



}
