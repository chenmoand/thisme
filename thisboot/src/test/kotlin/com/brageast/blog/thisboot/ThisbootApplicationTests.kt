package com.brageast.blog.thisboot

import com.brageast.blog.thisboot.entity.RequestResult
import com.brageast.blog.thisboot.entity.ResultState
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories

import reactor.kotlin.core.publisher.toMono

@SpringBootTest
class ThisbootApplicationTests {

    @Autowired
    lateinit var articleService: TestArticleService

    @Test
    fun contextLoads() {

        articleService.findAll().subscribe(::print)
    }

}
