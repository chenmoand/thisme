package com.brageast.blog.thisboot.controller

import com.brageast.blog.thisboot.entity.Article
import com.brageast.blog.thisboot.repository.ArticleRepository
import com.brageast.blog.thisboot.service.ArticleService
import com.mongodb.client.result.UpdateResult
import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono


@CrossOrigin
@RestController
@RequestMapping("/api")
class ArticleController (
        val articleService: ArticleService
) {
    @GetMapping("/articles")
    fun getAllArticle(): Flux<Article> = articleService.findAll()

    @GetMapping("/articles/pagination")
    fun getPageArticle(@RequestParam(defaultValue = "1") page: Int,
                       @RequestParam(defaultValue = "10") size: Int
    ): Flux<Article> = articleService.findWithPagination(page, size)

    @GetMapping("/articles/{articleId}")
    fun getArticle(@PathVariable articleId: ObjectId): Mono<Article> = articleService.findById(articleId)

    @PostMapping("/articles")
    fun addArticle(@RequestBody article: Article): Mono<Article> = articleService.insert(article).log()


    @DeleteMapping("/articles/{id}")
    fun deleteArticle(@PathVariable id: ObjectId): Mono<Void> = articleService.deleteById(id)

    @PutMapping("/articles")
    fun updateArticle(@RequestBody article: Article): Mono<Article> = articleService.updateOrInsert(article)
}