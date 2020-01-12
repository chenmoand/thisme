package com.brageast.cli

import com.brageast.cli.entity.Article
import com.brageast.cli.entity.ArticleType
import com.brageast.cli.service.ArticleService
import com.brageast.cli.service.impl.ArticleServiceImpl
import com.brageast.cli.util.ConfigUtil
import java.util.*

fun main() {
    /*val JSON: MediaType = "application/json; charset=utf-8".toMediaType()
    val client = OkHttpClient()

    val build = Request.Builder().url("https://www.baidu.com").get().build()
    val execute = client.newCall(build).execute()
    execute.body?.run {
        charStream().readLines().forEach(::print)
    }

    val arrayOf = arrayOf("1", "2").toParameter()
    arrayOf.forEach(::print)
    println(arrayOf.size)*/

//    println("https://www.zhihu.com".toRequest().build().send())
    val articleService: ArticleService = ArticleServiceImpl
    articleService.addArticle(Article("1","2", arrayOf("")," ", "", Date(), Date(),"", "", ArticleType.ORIGINAL))


}
