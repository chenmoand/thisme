package com.brageast.cli.command

import com.brageast.cli.CliConfig.COMMANDS
import com.brageast.cli.annotations.Command
import com.brageast.cli.template.CommandTemplate

@Command(name = "help", alias = ["h", "*"], description = "获得帮指令帮助", priority = 99)
object HelpCommand : CommandTemplate {

    override fun doOperation(vararg parameters: String): String =
            when (val str: String = parameters[0]) {
                "" -> {
                    val builder = StringBuilder()
                    COMMANDS.forEach {
                        val commandInfo = it.commandInfo
                        val als = commandInfo.alias.map { s -> "-$s" }.toString()
                        builder.append("* thiscli ")
                        builder.append(commandInfo.name)
                        builder.append(" ")
                        builder.append("[")
                        builder.append(als.substring(1, als.length - 1))
                        builder.append("] ")
                        builder.append(commandInfo.description)
                        builder.append("\n")
                    }
                    builder.toString()
                }
                "help" -> "-> 显示 <thiscli --help> 帮助信息 \n-> 食用方法 thiscli -h help"
                else -> COMMANDS.findLast {
                    it.commandInfo.alias.contains(str) || it.commandInfo.name.contains(str)
                }?.run { commandTemplate.doOperation("help") } ?: "并未找到相关于${str}的帮助信息"
            }


    fun printDefault() = this.printOperation("")

}
