package com.brageast.cli.service.impl

import com.brageast.cli.entity.Article
import com.brageast.cli.service.ArticleService
import com.brageast.cli.util.*
import com.brageast.cli.util.ConfigUtil.configInfo

object ArticleServiceImpl : ArticleService {

    override fun Article.insert(): String? {
        val url = configInfo.doURL { it.add }
        val response = url.toRequest()
                .post(this.typeJsonRequestBody())
                .build()
                .send()
//        val fromJson = IGson.fromJson<HashMap<String, Any>>(response)

        return null
    }
}