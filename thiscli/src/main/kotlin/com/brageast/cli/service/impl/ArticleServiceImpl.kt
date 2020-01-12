package com.brageast.cli.service.impl

import com.brageast.cli.entity.Article
import com.brageast.cli.service.ArticleService
import com.brageast.cli.util.*
import com.brageast.cli.util.ConfigUtil.configInfo

object ArticleServiceImpl : ArticleService {
    private val simpleUrl = configInfo.simpleUrl()

    override fun addArticle(article: Article): Boolean {
        val url = simpleUrl + configInfo.api.add
        val response = url.toRequest()
                .post(article.typeJsonRequestBody())
                .build()
                .send()
        val fromJson = gson.fromJson<HashMap<String, Any>>(response)

        return true
    }
}