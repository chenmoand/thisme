package com.brageast.cli.service

import com.brageast.cli.entity.Article

interface ArticleService {
    fun addArticle(article: Article): Boolean
}