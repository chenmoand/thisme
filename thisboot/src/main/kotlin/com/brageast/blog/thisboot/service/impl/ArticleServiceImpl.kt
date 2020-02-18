package com.brageast.blog.thisboot.service.impl

import com.brageast.blog.thisboot.entity.Article
import com.brageast.blog.thisboot.repository.ArticleRepository
import com.brageast.blog.thisboot.service.ArticleService
import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.PageRequest
import org.springframework.data.mongodb.core.ReactiveMongoTemplate
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono


@Service
class ArticleServiceImpl : ArticleService {

    /**
     * 因为这个肯定有 ReactiveMongoTemplate 这个类
     * 所以用 lateinit var 修饰, 比较双!!号也是麻烦
     */
    @Autowired
    lateinit var reactiveMongoTemplate: ReactiveMongoTemplate

    @Autowired
    lateinit var articleRepository: ArticleRepository


    override fun findAll(): Flux<Article> = articleRepository.findAll()
    /**
     * 用reactiveMongoTemplate 实现为 reactiveMongoTemplate.
     *                              find(Query()
     *                              .with(PageRequest.of(page - 1, size)), Article::class.java)
     *
     * @param page 默认减一, 使页面成 1 开始
     * @param size 每页的大小
     * @return
     */
    override fun findWithPagination(page: Int, size: Int): Flux<Article> {
        return if(size <= 0 || page < 0) Flux.empty() else articleRepository.findAllBy(PageRequest.of(page - 1, size))
    }

    override fun insert(article: Article): Mono<Article> {
        return reactiveMongoTemplate.insert(article)
    }

    override fun updateOrInsert(article: Article): Mono<Article> = articleRepository.save(article)

    override fun findById(id: ObjectId): Mono<Article> = articleRepository.findById(id)

    override fun deleteById(id: ObjectId): Mono<Void> = articleRepository.deleteById(id)

    override fun findById(id: String): Mono<Article> {
        val objectId = ObjectId(id)
        return articleRepository.findById(objectId)
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