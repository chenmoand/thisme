package com.brageast.blog.thisboot

import com.brageast.blog.thisboot.repository.UserRepository
import com.brageast.blog.thisboot.service.ArticleService
import com.brageast.blog.thisboot.util.loggerOf
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.context.annotation.Bean
import org.springframework.data.mongodb.core.mapping.MongoMappingContext
import org.springframework.security.core.userdetails.MapReactiveUserDetailsService
import org.springframework.security.core.userdetails.User
import reactor.core.publisher.Flux
import java.util.*

@SpringBootTest
class ThisbootApplicationTests {


    @Autowired
    lateinit var userRepository: UserRepository

    val log = loggerOf<ThisbootApplicationTests>()

    @Bean
    fun getUser(): MapReactiveUserDetailsService {
        return MapReactiveUserDetailsService()
    }

    @Test
    fun onRepos() {
        println(userRepository.count().block())

    }

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
    }

}


class AverageTest {

    @Test
    fun onDate() {
        val d1 = Date() // 小
        Thread.sleep(4000L)
        val d2 = Date() // 大

        println(d1.after(d2))

    }

}

