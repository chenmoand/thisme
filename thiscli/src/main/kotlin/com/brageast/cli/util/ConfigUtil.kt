package com.brageast.cli.util

import com.brageast.cli.CliConfig.CONFIG_FILE
import com.brageast.cli.CliConfig.CONFIG_NAME
import com.brageast.cli.entity.ConfigInfo
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
}