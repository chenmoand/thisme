package com.brageast.cli.command

import com.brageast.cli.ThisCli
import com.brageast.cli.annotations.Command
import com.brageast.cli.template.CommandTemplate
import com.brageast.cli.util.DateUtil
import java.io.File

@Command(value = "create", alias = ["c"], description = "创建一个实时的markdown日志文件")
class CreateMarkdownCommand : CommandTemplate {
    override fun doOperation(vararg parameters: String): String =
            when (val filename = parameters[0]) {
                "" -> "-> 未输入指定参数"
                "help" -> "-> 创建一个实时的markdown日志文件"
                else -> {
                    val outFileUrl = "${DateUtil.currentDate}/${filename}.md"
                    val file = File(ThisCli.userFile, outFileUrl)
                    // 尝试创建所在目录
                    file.parentFile?.run { if(!exists()) mkdirs() } ?: throw IllegalAccessError("创建文件夹错误")
                    if (file.createNewFile()) "-> 创建${outFileUrl}文件成功" else "-> 创建${outFileUrl}文件失败"
                }
            }
}