package com.brageast.cli.util

import okhttp3.MediaType
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

object AjaxUtil {
    val JSON: MediaType = "application/json; charset=utf-8".toMediaType()
    var client = OkHttpClient()
}

/**
 * 直接转换为Request请求
 */
fun String.toRequest(): Request.Builder = Request.Builder().url(this)

@Throws(IOException::class)
fun Request.send(): String = AjaxUtil.client.newCall(this).execute().body?.string() ?: throw IOException("信息读取失败")

fun Any.typeJsonRequestBody() : RequestBody = this.toJson().toRequestBody(AjaxUtil.JSON)