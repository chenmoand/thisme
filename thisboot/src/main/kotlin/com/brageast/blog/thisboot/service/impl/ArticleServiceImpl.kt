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
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import java.util.*

@Service
class ArticleServiceImpl : ArticleService {

    @Autowired
    private val reactiveMongoTemplate: ReactiveMongoTemplate? = null

    /**
     * @param page 默认减一, 使页面成 1 开始
     * @param size 每页的大小
     * @return
     */
    override fun limitShow(page: Int, size: Int): Flux<Article> {
        return reactiveMongoTemplate!!.find(Query().with(PageRequest.of(page - 1, size)), Article::class.java)
    }

    override fun insert(article: Mono<Article>): Mono<Article> {
        return reactiveMongoTemplate!!.insert(article)
    }

    override fun insert(article: Article): Mono<Article> {
        return reactiveMongoTemplate!!.insert(article)
    }

    override fun show(): Flux<Article> {
        return reactiveMongoTemplate!!.findAll(Article::class.java)
    }

    override fun delete(id: ObjectId): Mono<DeleteResult> {
        return reactiveMongoTemplate!!.remove(doId(id.toString()), Article::class.java)
    }

    override fun update(article: Article): Mono<UpdateResult> {
        val update = EntityUtil.addUpdate(
                article, "title", "label", "classify",
                "describe", "author", "content", "chick", "replys"
        )
        update.set("upDate", Date())

        return reactiveMongoTemplate!!.updateFirst(doId(article.articleId!!.toString()), update, Article::class.java)
    }

    override fun findById(articleId: ObjectId): Mono<Article> {
        return reactiveMongoTemplate!!.findOne(doId(articleId.toString()), Article::class.java)
    }

    private fun doId(id: String): Query {
        return Query.query(
                Criteria().and("articleId").`is`(id)
        )
    }
}
