package com.brageast.cli.command

import com.brageast.cli.annotations.Command
import com.brageast.cli.template.CommandTemplate
import com.brageast.cli.util.DateUtil

@Command(value = "create", alias = ["c"], description = "创建一个实时的markdown日志文件")
class CreateMarkdownCommand : CommandTemplate {
    override fun doOperation(vararg parameters: String): String =
            when (val filename = parameters[0]) {
                else -> "-> 创建./${DateUtil.currentDate}/${filename}.md文件失败"
            }
}