package com.brageast.blog.thisboot.service.impl

import com.brageast.blog.thisboot.entity.Article
import com.brageast.blog.thisboot.service.ArticleService
import com.brageast.blog.thisboot.util.EntityUtil
import com.mongodb.client.result.DeleteResult
import com.mongodb.client.result.UpdateResult
import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.PageRequest
import org.springframework.data.mongodb.core.ReactiveMongoTemplate
import org.springframework.data.mongodb.core.query.Criteria
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

    override fun insert(article: Mono<Article>): Mono<Article> {
        return reactiveMongoTemplate.insert(article)
    }

    override fun insert(article: Article): Mono<Article> {
        return reactiveMongoTemplate.insert(article)
    }

    override fun show(): Flux<Article> {
        return reactiveMongoTemplate.findAll(Article::class.java)
    }

    override fun delete(id: ObjectId): Mono<DeleteResult> {
        return reactiveMongoTemplate.remove(id.toId(), Article::class.java)
    }

    override fun update(article: Article): Mono<UpdateResult> {

        val update = EntityUtil.addUpdate(
                article, "title", "label", "classify",
                "describe", "author", "content", "chick"
        )

        update.set("upDate", Date())

        return reactiveMongoTemplate.updateFirst(article.articleId.toId(), update, Article::class.java)
    }

    override fun findById(articleId: ObjectId): Mono<Article> {
        return reactiveMongoTemplate.findOne(articleId.toId(), Article::class.java)
    }

    private fun ObjectId.toId():Query = Query.query(Criteria().and("articleId").`is`(this.toString()))

}