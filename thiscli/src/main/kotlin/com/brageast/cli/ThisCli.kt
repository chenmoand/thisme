@file:JvmName("ThisCliApp")

package com.brageast.cli

import com.brageast.cli.CliConfig.CMDS
import com.brageast.cli.command.HelpCommand
import com.brageast.cli.util.CommandUtil
import com.brageast.cli.util.toParameter

fun main(args: Array<String>) {
    println("< -!ThisCli!- >")
    ThisCli.appInit(args)
}

object ThisCli {
    fun appInit(args: Array<String>) {
        if (args.isNotEmpty()) {
            val parameter = args[0]
            val parameters = args.toParameter()
            when {
                parameter.startsWith("-") -> CMDS
                        .lastOrNull { it.commandInfo.alias.contains(parameter.replace("-", "")) }
                        .apply { CommandUtil.cmdNotNull(this, *parameters) }

                else -> CMDS.lastOrNull {
                    val commandInfo = it.commandInfo
                    commandInfo.alias.contains(parameter) || commandInfo.name == parameter
                }.apply { CommandUtil.cmdNotNull(this, *parameters) }
            }

        } else HelpCommand.printDefault()
    }


}