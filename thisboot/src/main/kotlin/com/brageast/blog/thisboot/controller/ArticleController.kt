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


@RestController
@CrossOrigin
class ArticleController {

    @Autowired
    lateinit var articleService: ArticleService

    @Autowired
    lateinit var articleRepository: ArticleRepository


    @GetMapping("/getAllArticle")
    fun getAllArticle(): Flux<Article> = articleRepository.findAll()

    @GetMapping("/getArticle")
    fun getArticle(articleId: ObjectId): Mono<Article> = articleRepository.findById(articleId)

    @PostMapping("/addArticle")
    fun addArticle(@RequestBody article: Article): Mono<Boolean> = articleService.insert(article).log().hasElement()


    @GetMapping("/getPageArticle")
    fun getPageArticle(@RequestParam(defaultValue = "1") page: Int,
                       @RequestParam(defaultValue = "10") size: Int): Flux<Article> = articleService.limitShow(page, size)


    @DeleteMapping("/deleteArticle")
    fun deleteArticle(id: ObjectId): Mono<Void> = articleRepository.deleteById(id)

    @PutMapping("/updateArticle")
    fun updateArticle(@RequestBody article: Article): Mono<UpdateResult> = articleService.update(article)
}