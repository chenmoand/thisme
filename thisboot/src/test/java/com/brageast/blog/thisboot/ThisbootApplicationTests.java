package com.brageast.blog.thisboot;

import com.brageast.blog.thisboot.entity.Article;
import com.brageast.blog.thisboot.entity.ArticleType;
import com.brageast.blog.thisboot.entity.Reply;
import com.brageast.blog.thisboot.service.ArticleService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.ReactiveMongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import reactor.core.publisher.Mono;

import java.util.Date;

/**
 * 新版本吧junit包排除了
 */
@Slf4j
@SpringBootTest
public class ThisbootApplicationTests {
    @Autowired
    private ReactiveMongoTemplate reactiveMongoTemplate;

    @Autowired
    private ArticleService articleService;

    @Test
    public void  onReact() {
    }

    @Test
    public void contextLoads() {
        final Article article = new Article();
        article.setAuthor("chenmo");
        article.setDescribe("这是一个来自java的测试请求");
        article.setChick(20);
        article.setClassify("java");
        article.setArticleType(ArticleType.ORIGINAL);
        article.setLabel(new String[]{"java"});
        article.setTitle("这是一个来自java的测试请求");
        article.setStartDate(new Date());
        article.setUpDate(new Date());
        article.setReplys(new Reply[]{Reply.builder().name("demo").build()});
        final Mono<Article> insert = articleService.insert(article);
        System.out.println(insert.log().block().toString());
    }

}
