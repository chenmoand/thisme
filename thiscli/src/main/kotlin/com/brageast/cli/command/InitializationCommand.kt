package com.brageast.cli.command

import com.brageast.cli.ThisCli.userFile
import com.brageast.cli.annotations.Command
import com.brageast.cli.template.CommandTemplate
import java.io.File
import java.io.FileOutputStream

@Command(value = "initialization", alias = ["i", "init"], description = "初始化这个目录")
class InitializationCommand : CommandTemplate {

    override fun doOperation(vararg parameters: String): String = when (parameters[0]) {
        "help" -> "ktmd 对这个目录初始化"
        else -> {
            val file = File(userFile, "kmconfig.json")
            if(!file.exists()) {
                val fileOutputStream = FileOutputStream(file)
                ClassLoader.getSystemResourceAsStream("kmconfig.json")?.copyTo(fileOutputStream)
                fileOutputStream.close()
            }
            "* <kmconfig.json> 初始化成功"
        }
    }

}