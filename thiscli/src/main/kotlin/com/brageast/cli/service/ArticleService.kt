package com.brageast.cli.service

import com.brageast.cli.entity.Article

interface ArticleService {
    fun insert(article: Article)

    fun update(article: Article)
}