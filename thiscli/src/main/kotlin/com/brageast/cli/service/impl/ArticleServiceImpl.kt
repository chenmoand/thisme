package com.brageast.cli.service.impl

import com.brageast.cli.entity.Article
import com.brageast.cli.service.ArticleService
import com.brageast.cli.util.toJson

class ArticleServiceImpl: ArticleService {
    override fun addArticle(article: Article): Boolean {
        article.toJson()
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}