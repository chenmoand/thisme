package com.brageast.blog.thisboot.controller

import com.brageast.blog.thisboot.entity.Article
import com.brageast.blog.thisboot.service.ArticleService
import org.bson.types.ObjectId
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono


@CrossOrigin
@RestController
@RequestMapping("/api/articles")
class ArticleController(
        val articleService: ArticleService
) {
    @GetMapping
    fun getAllArticle(): Flux<Article> = articleService.findAll()

    @GetMapping("/size")
    fun getAllArticleSize(): Mono<Long> = articleService.getSize()

    @GetMapping("/pagination")
    fun getPageArticle(@RequestParam(defaultValue = "1") page: Int,
                       @RequestParam(defaultValue = "10") size: Int
    ): Flux<Article> = articleService.findWithPagination(page, size)

    @GetMapping("/{articleId}")
    fun getArticle(@PathVariable articleId: ObjectId): Mono<Article> = articleService.findById(articleId)

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    fun addArticle(@RequestBody article: Article): Mono<Article> = articleService.insert(article)


    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    fun deleteArticle(@PathVariable id: ObjectId): Mono<Void> = articleService.deleteById(id)

    @PutMapping("/")
    @PreAuthorize("hasAuthority('ADMIN')")
    fun updateArticle(@RequestBody article: Article): Mono<Article> = articleService.updateOrInsert(article)
}