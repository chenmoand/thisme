package com.brageast.blog.thisboot

import com.brageast.blog.thisboot.entity.HttpResult
import com.brageast.blog.thisboot.entity.User
import com.brageast.blog.thisboot.service.ArticleService
import com.brageast.blog.thisboot.service.UserService
import com.brageast.blog.thisboot.util.basalObjectMapper
import com.brageast.blog.thisboot.util.loggerOf
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.context.annotation.Bean
import org.springframework.security.core.userdetails.MapReactiveUserDetailsService
import reactor.core.publisher.Flux
import java.util.*

@SpringBootTest
class ThisbootApplicationTests {


//    @Autowired
//    lateinit var userRepository: UserRepository

    val log = loggerOf<ThisbootApplicationTests>()

    @Bean
    fun getUser(): MapReactiveUserDetailsService {
        return MapReactiveUserDetailsService()
    }

 /*   @Test
    fun onRepos() {
        println(userRepository.count().block())

    }*/


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

    @Autowired
    lateinit var userService: UserService;

    @Test
    fun onAddUser() {
        val user = userService.findByName("chenmo").block()
//        val (userId, name, password, email, joinTime, accountExpiredTime, authorities, ban) = userService.findByName("chenmo").block()

        val insert = userService.insert(User(userId = user?.userId,name = "chenmo", password = "chenmo", email = "2010557767@qq.com", authorities = setOf("ADMIN")))
        val block = insert.block()
        println(block)
    }

}


class AverageTest {

    val log = loggerOf<AverageTest>()

    @Test
    fun onSer() {
        val httpResult = HttpResult(message = "成功", data = "哈哈哈哈")
        val json = basalObjectMapper.writeValueAsString(httpResult)
        log.info(json)
    }

    @Test
    fun onDate() {
        val d1 = Date() // 小
        Thread.sleep(4000L)
        val d2 = Date() // 大

        println(d1.before(d2))

    }

}

