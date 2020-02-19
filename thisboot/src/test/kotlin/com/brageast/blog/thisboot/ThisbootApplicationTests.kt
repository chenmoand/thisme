package com.brageast.blog.thisboot

import com.brageast.blog.thisboot.service.ArticleService
import com.brageast.blog.thisboot.util.loggerOf
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import reactor.core.publisher.Flux

@SpringBootTest
class ThisbootApplicationTests {

    val log = loggerOf<ThisbootApplicationTests>()

    @Autowired
    lateinit var articleService: ArticleService

    @Test
    fun contextLoads() {
        // 免费的MongoDb 太慢了, 慢到Flux 都不打印
        val all = articleService.findAll()
        all.doOnError{
            log.error(it.message, it)
        }.subscribe(::print)
        Flux.just(1,3,4,5,6)/*.then()*/.subscribe(::println)
//        println(all.blockLast())

    }

}

