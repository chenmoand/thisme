package com.brageast.cli.entity

import java.util.*
import kotlin.collections.ArrayList

data class ArticleInfo(var articleId: String?, val articleTitle: String, var articleDescribe: String, val createDate: Date)

data class ArticlesInfo(val date: String, var articleInfos: ArrayList<ArticleInfo>)