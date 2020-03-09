package com.brageast.blog.thisboot

import com.brageast.blog.thisboot.util.HttpResult
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
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Flux

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
//        val user = userService.findByName("chenmo").block()
//        val (userId, name, password, email, joinTime, accountExpiredTime, authorities, ban) = userService.findByName("chenmo").block()

        val insert = userService.insert(User(name = "233", password = "233", email = "233@qq.com", authorities = setOf("ADMIN")))
        val block = insert.block()
        println(block)
    }


    @Autowired
    lateinit var webClient: WebClient

    @Test
    fun onRestful() {
        val get = webClient.get()
                .uri("https://gturnquist-quoters.cfapps.io/api/random")
                .retrieve()
                .bodyToMono(Any::class.java)
        println(get.block())

    }

}


class AverageTest {

    private val log = loggerOf<AverageTest>()

    @Test
    fun onSer() {
        val httpResult = HttpResult(message = "成功", data = "哈哈哈哈")
        val json = basalObjectMapper.writeValueAsString(httpResult)
        log.info(json)
    }

    @Test
    fun onDate() {

    }

}

