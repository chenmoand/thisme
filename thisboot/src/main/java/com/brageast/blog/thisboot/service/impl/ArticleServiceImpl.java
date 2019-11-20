package com.brageast.blog.thisboot.service.impl;

import com.brageast.blog.thisboot.entity.Article;
import com.brageast.blog.thisboot.service.ArticleService;
import com.brageast.blog.thisboot.util.EntityUtil;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;
import lombok.extern.slf4j.Slf4j;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.core.ReactiveMongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.Date;

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

    @Override
    public Mono<DeleteResult> delete(ObjectId id) {
        return reactiveMongoTemplate.remove(doId(id.toString()), Article.class);
    }

    @Override
    public Mono<UpdateResult> update(Article article) {
        Update update = EntityUtil.addUpdate(
                article, "title", "label", "classify",
                "describe", "author", "content", "chick", "replys"
        );
        update.set("upDate", new Date());

        return reactiveMongoTemplate.updateFirst(doId(article.getArticleId().toString()), update, Article.class);
    }

    @Override
    public Mono<Article> findById(ObjectId articleId) {
        return reactiveMongoTemplate.findOne(doId(articleId.toString()), Article.class);
    }

    private Query doId(String id ) {
        return Query.query(
                new Criteria().and("articleId").is(id)
        );
    }
}
