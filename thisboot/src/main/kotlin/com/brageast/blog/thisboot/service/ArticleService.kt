package com.brageast.blog.thisboot.service

import com.brageast.blog.thisboot.entity.Article
import com.mongodb.client.result.DeleteResult
import com.mongodb.client.result.UpdateResult
import org.bson.types.ObjectId
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

interface ArticleService {
    fun limitShow(page: Int, size: Int): Flux<Article>

    fun insert(article: Article): Mono<Article>

    fun update(article: Article): Mono<UpdateResult>

}
