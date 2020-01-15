package com.brageast.cli.util

import com.brageast.cli.CliConfig.CONFIG_FILE
import com.brageast.cli.CliConfig.CONFIG_NAME
import com.brageast.cli.CliConfig.INFO_NAME
import com.brageast.cli.CliConfig.USER_FILE
import com.brageast.cli.entity.ArticlesInfo
import com.brageast.cli.entity.ConfigInfo
import java.io.File
import java.io.FileNotFoundException

object ConfigUtil {
    val configInfo: ConfigInfo by lazy {
        if (!CONFIG_FILE.exists()) {
            println("-> [err] 配置文件未存在, 正在使用默认配置")
            return@lazy IGson.fromJson<ConfigInfo>(
                    String(ClassLoader.getSystemResourceAsStream(CONFIG_NAME)
                            ?. readBytes()
                            ?: throw FileNotFoundException("jar以损坏, 请重新下载")
                    )
            )
        }
        return@lazy IGson.fromJson<ConfigInfo>(CONFIG_FILE.readText())
    }
    fun getFoloderInfo(data: String): ArticlesInfo {
        val file = File(USER_FILE, "${data}/${INFO_NAME}")
        if (!file.exists()) throw FileNotFoundException(INFO_NAME + "文件不存在")
        return IGson.fromJson(file.readText())
    }
}