package com.brageast.blog.thisboot.controller

import com.brageast.blog.thisboot.entity.Article
import com.brageast.blog.thisboot.repository.ArticleRepository
import com.brageast.blog.thisboot.service.ArticleService
import com.mongodb.client.result.UpdateResult
import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono


@CrossOrigin
@RestController
@RequestMapping("/api")
class ArticleController {

    @Autowired
    lateinit var articleService: ArticleService

    @Autowired
    lateinit var articleRepository: ArticleRepository

    fun test() {

        articleRepository
    }

    @GetMapping("/articles")
    fun getAllArticle(): Flux<Article> = articleRepository.findAll()

    @GetMapping("/articles/pagination")
    fun getPageArticle(@RequestParam(defaultValue = "1") page: Int,
                       @RequestParam(defaultValue = "10") size: Int
    ): Flux<Article> = articleService.limitShow(page, size)

    @GetMapping("/articles/{articleId}")
    fun getArticle(@PathVariable articleId: ObjectId): Mono<Article> = articleRepository.findById(articleId)

    @PostMapping("/articles")
    fun addArticle(@RequestBody article: Article): Mono<Boolean> = articleService.insert(article).log().hasElement()


    @DeleteMapping("/articles/{id}")
    fun deleteArticle(@PathVariable id: ObjectId): Mono<Void> = articleRepository.deleteById(id)

    @PutMapping("/articles")
    fun updateArticle(@RequestBody article: Article): Mono<Article> = articleRepository.save(article)
}