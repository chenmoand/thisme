package com.brageast.blog.thisboot;

import com.brageast.blog.thisboot.entity.Article;
import com.brageast.blog.thisboot.entity.Reply;
import com.brageast.blog.thisboot.service.ArticleService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import reactor.core.publisher.Mono;

import java.util.Date;

/**
 * 新版本吧junit包排除了
 */
@Slf4j
@SpringBootTest
public class ThisbootApplicationTests {

    @Autowired
    private ArticleService articleService;

    @Test
    public void contextLoads() {
        /*final Mono<Article> insert = articleService.insert(Article.builder()
                .Author("chenmo").Chick(10).Classify("java").Label(new String[]{"java"}).Describe("java")
                .Title("java").UpDate(new Date()).StartDate(new Date()).Replys(new Reply[]{Reply.builder().Name("java").build()})
                .build()
        );
        insert.doOnNext(System.out::println);*/
//        System.out.println(insert.block().toString());


    }

}
