package com.brageast.blog.thisboot.service.impl

import com.brageast.blog.thisboot.entity.Article
import com.brageast.blog.thisboot.service.ArticleService
import com.brageast.blog.thisboot.util.toJSON
import com.brageast.blog.thisboot.util.toQueryById
import com.mongodb.client.result.UpdateResult
import org.bson.Document
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.PageRequest
import org.springframework.data.mongodb.core.ReactiveMongoTemplate
import org.springframework.data.mongodb.core.query.Query
import org.springframework.data.mongodb.core.query.Update
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import java.util.*


@Service
class ArticleServiceImpl : ArticleService {

    /**
     * 因为这个肯定有 ReactiveMongoTemplate 这个类
     * 所以用 lateinit var 修饰, 比较双!!号也是麻烦
     */
    @Autowired
    lateinit var reactiveMongoTemplate: ReactiveMongoTemplate

    /**
     * @param page 默认减一, 使页面成 1 开始
     * @param size 每页的大小
     * @return
     */
    override fun limitShow(page: Int, size: Int): Flux<Article> {
        return reactiveMongoTemplate.find(Query().with(PageRequest.of(page - 1, size)), Article::class.java)
    }

    override fun insert(article: Article): Mono<Article> {
        return reactiveMongoTemplate.insert(article)
    }

    /*override fun update(article: Article): Mono<UpdateResult> = article.run {
        val parse = Document.parse(this.toJSON())

        val update = Update.fromDocument(
                parse, "articleId", "update", "startDate", "chick"
        ).set("upDate", Date())

        val query = articleId?.toQueryById("articleId") ?: return@run Mono.just(UpdateResult.unacknowledged())

        return reactiveMongoTemplate.updateFirst(query, update, Article::class.java)
    }*/

}