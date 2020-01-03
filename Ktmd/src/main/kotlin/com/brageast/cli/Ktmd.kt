package com.brageast.cli

import com.brageast.cli.command.HelpCommand
import com.brageast.cli.command.InitializationCommand
import com.brageast.cli.command.VersionCommand
import com.brageast.cli.template.CommandTemplate
import com.brageast.cli.util.CommandUtil

object Ktmd {
    const val version: String = "1.0.0"

    val commands: Array<CommandTemplate> = arrayOf(
            VersionCommand(), InitializationCommand(), HelpCommand
    )
    val cmds = CommandUtil.registerCommand()
    // 获取当前cmd 输入的所在目录
    val userPath = System.getProperty("user.dir")

    fun appInit(args: Array<String>) {
        if (args.isNotEmpty()) {
            val parameter = args[0]
            val parameter2 = if (args.size > 1) args[1] else "default"
            when {
                parameter.startsWith("--") -> {
                    val lastOrNull = cmds.lastOrNull { cmd -> cmd.commandInfo.value == parameter.replace("--", "") }
                    print(lastOrNull)
                    if (lastOrNull != null)
                        lastOrNull.commandTemplate.printOperation(parameter2)
                    else
                        HelpCommand.printDefault()

                }
                parameter.startsWith("-") -> {
                    val lastOrNull = cmds.lastOrNull { cmd -> cmd.commandInfo.alias.contains(parameter.replace("-", "")) }
                    if (lastOrNull != null)
                        lastOrNull.commandTemplate.printOperation(parameter2)
                    else
                        HelpCommand.printDefault()
                }
                else -> HelpCommand.printDefault()
            }

        } else HelpCommand.printDefault()
    }
}

fun main(args: Array<String>) {
    println("---------[kbmd]---------")
    Ktmd.appInit(args)
}