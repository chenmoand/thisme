package com.brageast.blog.thisboot;

import com.brageast.blog.thisboot.entity.Article;
import com.brageast.blog.thisboot.service.ArticleService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

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
        Article article = new Article();
        article.setArticleId("5dcd3e683fc6ba4ccddc3fdf");
        article.setAuthor("java");
        article.setDescribe("哈哈哈哈");
        System.out.println(articleService.update(article).block());

    }

}
