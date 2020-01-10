package com.brageast.cli

import okhttp3.MediaType
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request

fun main() {
    val JSON: MediaType = "application/json; charset=utf-8".toMediaType()
    val client = OkHttpClient()

    val build = Request.Builder().url("https://www.baidu.com").get().build()
    val execute = client.newCall(build).execute()
    execute.body?.run {
        charStream().readLines().forEach(::print)
    }


}
