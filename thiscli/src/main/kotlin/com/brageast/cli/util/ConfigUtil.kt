package com.brageast.cli.util

import com.brageast.cli.CliConfig.CONFIG_FILE
import com.brageast.cli.CliConfig.CONFIG_NAME
import com.brageast.cli.entity.ConfigInfo

object ConfigUtil {
    val configInfo: ConfigInfo by lazy {
        if (!CONFIG_FILE.exists()) {
            println("-> [err] 配置文件未存在, 正在使用默认配置")
            val file = ClassLoader.getSystemResourceAsStream(CONFIG_NAME)
                    ?.let { String(it.readBytes()) }
                    ?: "{}"
            return@lazy gson.fromJson<ConfigInfo>(file)
        }
        gson.fromJson<ConfigInfo>(CONFIG_FILE.readText())
    }
}