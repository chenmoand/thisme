package com.brageast.cli

import com.brageast.cli.util.DateUtil

fun main() {
    /*val JSON: MediaType = "application/json; charset=utf-8".toMediaType()
    val client = OkHttpClient()

    val build = Request.Builder().url("https://www.baidu.com").get().build()
    val execute = client.newCall(build).execute()
    execute.body?.run {
        charStream().readLines().forEach(::print)
    }*/
    println(DateUtil.currentDate)
    print(ThisCli.userFile)

}
