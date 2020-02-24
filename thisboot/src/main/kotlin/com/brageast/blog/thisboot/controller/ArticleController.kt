package com.brageast.blog.thisboot.controller

import com.brageast.blog.thisboot.entity.Article
import com.brageast.blog.thisboot.service.ArticleService
import org.bson.types.ObjectId
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import javax.annotation.security.PermitAll


@CrossOrigin
@RestController
@RequestMapping("/api")
class ArticleController(
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
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    fun addArticle(@RequestBody article: Article): Mono<Article> = articleService.insert(article)


    @DeleteMapping("/articles/{id}")
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    fun deleteArticle(@PathVariable id: ObjectId): Mono<Void> = articleService.deleteById(id)

    @PutMapping("/articles")
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    fun updateArticle(@RequestBody article: Article): Mono<Article> = articleService.updateOrInsert(article)
}