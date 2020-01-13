package com.brageast.cli.command

import com.brageast.cli.CliConfig.CONFIG_FILE
import com.brageast.cli.CliConfig.CONFIG_NAME
import com.brageast.cli.annotations.Command
import com.brageast.cli.template.CommandTemplate
import java.io.FileOutputStream

@Command(name = "init", alias = ["i"], description = "初始化这个目录")
object InitializationCommand : CommandTemplate {

    override fun doOperation(vararg parameters: String): String = when (parameters[0]) {
        "help" -> "ktmd 对这个目录初始化"
        else -> CONFIG_FILE.run {
            if (!exists()) {
                val fileOutputStream = FileOutputStream(this)
                ClassLoader.getSystemResourceAsStream(CONFIG_NAME)
                        ?.copyTo(fileOutputStream)
                        ?: throw IllegalAccessError("jar包已损坏, 请重新构建")
                fileOutputStream.close()
                return@run "-> <${CONFIG_NAME}> 初始化成功"
            }
            "-> <${CONFIG_NAME}> 已存在, 如果想继续初始化请手动删除并且再次运行本指令"
        }


    }

}