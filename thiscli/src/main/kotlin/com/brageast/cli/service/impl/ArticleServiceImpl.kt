package com.brageast.cli.service.impl

import com.brageast.cli.entity.Api
import com.brageast.cli.entity.Article
import com.brageast.cli.service.ArticleService
import com.brageast.cli.util.*
import com.brageast.cli.util.ConfigUtil.configInfo

object ArticleServiceImpl : ArticleService {

    override fun insert(article: Article) {
        val response = article.send1 { it.add }
        article.articleId = IGson.fromJson<HashMap<String, Any>>(response)["data"] as String
    }

    override fun update(article: Article) {
        article.send1 { it.update }
    }

    /**
     * 用于发送增和改
     */
    private fun Article.send1(callback: (Api) -> String): String {
        val url = configInfo.doURL { callback(it) }
        return url.toRequest()
                .post(this.typeJsonRequestBody())
                .build()
                .send()
    }
}