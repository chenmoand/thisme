package com.brageast.blog.thisboot

import com.brageast.blog.thisboot.entity.Article
import com.brageast.blog.thisboot.entity.User
import com.brageast.blog.thisboot.service.ArticleService
import com.brageast.blog.thisboot.service.UserService
import com.brageast.blog.thisboot.util.HttpResult
import com.brageast.blog.thisboot.util.basalObjectMapper
import com.brageast.blog.thisboot.util.loggerOf
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.context.ApplicationContext
import org.springframework.context.annotation.Bean
import org.springframework.restdocs.RestDocumentationContextProvider
import org.springframework.restdocs.RestDocumentationExtension
import org.springframework.restdocs.webtestclient.WebTestClientRestDocumentation.documentationConfiguration
import org.springframework.security.core.userdetails.MapReactiveUserDetailsService
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.test.context.junit.jupiter.SpringExtension
import org.springframework.test.web.reactive.server.WebTestClient
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Flux


@SpringBootTest
@ExtendWith(RestDocumentationExtension::class, SpringExtension::class)
class ThisbootApplicationTests {


//    @Autowired
//    lateinit var userRepository: UserRepository

    val log = loggerOf<ThisbootApplicationTests>()

    lateinit var webTestClient: WebTestClient

    @Autowired
    lateinit var context: ApplicationContext

    @BeforeEach
    fun setUp(applicationContext: ApplicationContext,
              restDocumentation: RestDocumentationContextProvider) {
        this.webTestClient = WebTestClient.bindToApplicationContext(applicationContext)
                .configureClient()
                .filter(documentationConfiguration(restDocumentation))
                .build()
    }

    @Test
    fun buildDocs() {

    }


    @Bean
    fun getUser(): MapReactiveUserDetailsService {
        return MapReactiveUserDetailsService()
    }

    @Autowired
    lateinit var articleService: ArticleService

    @Test
    fun addArticle() {
        val article = Article(
                title = "Hello world !!!",
                label = listOf("hello world"),
                classify = "hello world",
                describe = "你好 世界 博客 第一 (篇) 正式 **(雾)** 文章",
                author = "chenmo",
                content = """
                    # 你好, 世界

                这是博客第一篇正式文章???
                
                ``` java
                public static void main(){
                    System.out.print("Hello world");
                }
                ```
                
                ``` kotlin
                fun main() {
                    print("Hello world")	
                }
                ```
                
                ``` go
                func main() {
                    fmt.print("hello world")
                }
                ```
                
                ```javascript
                console.log("hello world")
                ```
                
                **注**: 这居然是我手动发送得请求;
                """.trimIndent()
        )
        /*var intRange = 1..10
        intRange.forEach { _ ->
        }*/
            articleService.insert(article).block()
    }

    @Test
    fun contextLoads() {
        // 免费的MongoDb 太慢了, 慢到Flux 都不打印
        val all = articleService.findAll()
        all.doOnError {
            log.error(it.message, it)
        }.subscribe(::print)
        Flux.just(1, 3, 4, 5, 6)/*.then()*/.subscribe(::println)
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

    @Autowired
    lateinit var bCryptPasswordEncoder: BCryptPasswordEncoder

    @Test
    fun onUser() {
        val encode = bCryptPasswordEncoder.encode("123456")
        println(encode)
        val matches = bCryptPasswordEncoder.matches("123456", encode)
        println(matches)
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
//        Mono.just("").the
    }

}

