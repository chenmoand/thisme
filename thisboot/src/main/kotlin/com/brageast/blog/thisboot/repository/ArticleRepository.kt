package com.brageast.blog.thisboot.repository

import com.brageast.blog.thisboot.entity.Article
import org.bson.types.ObjectId
import org.springframework.data.repository.reactive.ReactiveSortingRepository

interface ArticleRepository : ReactiveSortingRepository<Article, ObjectId>