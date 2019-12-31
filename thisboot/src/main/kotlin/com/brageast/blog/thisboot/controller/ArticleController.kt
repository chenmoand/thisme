package com.brageast.blog.thisboot.controller

import com.brageast.blog.thisboot.entity.Article
import com.brageast.blog.thisboot.service.ArticleService
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.RequestBody
import com.mongodb.client.result.UpdateResult
import reactor.core.publisher.Mono
import org.springframework.web.bind.annotation.PutMapping
import com.mongodb.client.result.DeleteResult
import org.bson.types.ObjectId
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.RequestParam
import reactor.core.publisher.Flux
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.beans.factory.annotation.Autowired



@RestController
@CrossOrigin
class ArticleController {

    @Autowired
    lateinit var articleService: ArticleService

    @GetMapping("/getAllArticle")
    fun getAllArticle(): Flux<Article> {
        return articleService.show()
    }

    @GetMapping("/getArticle")
    fun getArticle(articleId: ObjectId): Mono<Article> {
        return articleService.findById(articleId)
    }

    @PostMapping("/addArticle")
    fun addArticle(@RequestBody article: Article): Mono<Boolean> {
        return articleService.insert(article)
                .log()
                .hasElement()
    }

    @GetMapping("/getPageArticle")
    fun getPageArticle(@RequestParam(defaultValue = "1") page: Int,
                       @RequestParam(defaultValue = "10") size: Int): Flux<Article> {
        return articleService.limitShow(page, size)
    }

    @DeleteMapping("/deleteArticle")
    fun deleteArticle(id: ObjectId): Mono<DeleteResult> {
        return articleService.delete(id)
    }

    @PutMapping("/updateArticle")
    fun updateArticle(@RequestBody article: Article): Mono<UpdateResult> {
        return articleService.update(article)
    }
}