package com.brageast.cli.command

import com.brageast.cli.ThisCli.configName
import com.brageast.cli.ThisCli.userFile
import com.brageast.cli.annotations.Command
import com.brageast.cli.template.CommandTemplate
import java.io.File
import java.io.FileOutputStream

@Command(value = "init", alias = ["i"], description = "初始化这个目录")
class InitializationCommand : CommandTemplate {


    override fun doOperation(vararg parameters: String): String = when (parameters[0]) {
        "help" -> "ktmd 对这个目录初始化"
        else -> File(userFile, configName).run {
            if (!exists()) {
                val fileOutputStream = FileOutputStream(this)
                ClassLoader.getSystemResourceAsStream(configName)
                        ?.copyTo(fileOutputStream)
                        ?: throw IllegalAccessError("jar包已损坏, 请重新下载")
                fileOutputStream.close()
                return@run "-> <${configName}> 初始化成功"
            }
            "-> <${configName}> 已存在, 如果想继续初始化请手动删除并且再次运行本指令"
        }


    }

}