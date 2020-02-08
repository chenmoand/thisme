package com.brageast.blog.thisboot

import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class ThisbootApplicationTests {

    @Autowired
    lateinit var articleService: TestArticleService

    @Test
    fun contextLoads() {

        articleService.findAll().subscribe(::print)
    }

}
