package com.brageast.cli

import com.brageast.cli.command.HelpCommand
import com.brageast.cli.command.InitializationCommand
import com.brageast.cli.command.VersionCommand
import com.brageast.cli.entity.CMD
import com.brageast.cli.template.CommandTemplate
import com.brageast.cli.util.CommandUtil
import java.io.File

fun main(args: Array<String>) {
    println("---------[kbmd]---------")
    ThisCli.appInit(args)

}

object ThisCli {
    const val version: String = "1.0.0"

    val commands: Array<CommandTemplate> = arrayOf(
            VersionCommand(), InitializationCommand(), HelpCommand
    )
    val cmds = CommandUtil.registerCommand()
    // 获取当前cmd 输入的所在目录
    @JvmStatic
    val userPath: String = System.getProperty("user.dir")
    val userFile = File(userPath)

    fun appInit(args: Array<String>) {
        if (args.isNotEmpty()) {
            val parameter = args[0]
            val parameter2 = if (args.size > 1) args[1] else "default"
            when {
                parameter.startsWith("--") -> {
                    val lastOrNull = cmds.lastOrNull { cmd -> cmd.commandInfo.value == parameter.replace("--", "") }
                    cmdNotNull(lastOrNull, parameter2)

                }
                parameter.startsWith("-") -> {
                    val lastOrNull = cmds.lastOrNull { cmd -> cmd.commandInfo.alias.contains(parameter.replace("-", "")) }
                    cmdNotNull(lastOrNull, parameter2)
                }
                else -> HelpCommand.printDefault()
            }

        } else HelpCommand.printDefault()
    }

    private fun cmdNotNull(cmd: CMD?, vararg parameters: String) =
        if(cmd != null) cmd.commandTemplate.printOperation(*parameters) else HelpCommand.printDefault()

}