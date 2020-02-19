package com.brageast.blog.thisboot.repository

import com.brageast.blog.thisboot.entity.Article
import org.bson.types.ObjectId
import org.springframework.data.domain.Pageable
import org.springframework.data.mongodb.repository.Query
import org.springframework.data.repository.reactive.ReactiveSortingRepository
import reactor.core.publisher.Flux

interface ArticleRepository : ReactiveSortingRepository<Article, ObjectId> {
    fun findAllBy(pageable: Pageable): Flux<Article>
}