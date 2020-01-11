package com.brageast.cli

import com.brageast.cli.util.FileUtil
import com.brageast.cli.util.toJson

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

    println(FileUtil.configInfo.toJson())

}
