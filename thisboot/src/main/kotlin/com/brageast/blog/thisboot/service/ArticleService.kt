package com.brageast.blog.thisboot.service

import com.brageast.blog.thisboot.entity.Article
import org.bson.types.ObjectId
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

interface ArticleService {
    fun insert(article: Article): Mono<Article>
    fun findAll(): Flux<Article>
    fun findWithPagination(page: Int, size: Int): Flux<Article>
    fun updateOrInsert(article: Article): Mono<Article>
    fun findById(id: String): Mono<Article>
    fun findById(id: ObjectId): Mono<Article>
    fun deleteById(id: ObjectId): Mono<Void>
    fun getSize(): Mono<Long>
}
