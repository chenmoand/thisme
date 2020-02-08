package com.brageast.blog.thisboot

import com.brageast.blog.thisboot.entity.Article
import org.springframework.data.repository.reactive.ReactiveSortingRepository


interface TestArticleService : ReactiveSortingRepository<Article, String> {


}