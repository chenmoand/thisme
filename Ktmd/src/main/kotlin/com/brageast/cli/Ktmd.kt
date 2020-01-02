package com.brageast.cli

import com.brageast.cli.command.HelpCommand
import com.brageast.cli.command.VersionCommand
import com.brageast.cli.template.CommandTemplate
import com.brageast.cli.util.CommandUtil

object Ktmd {
    const val version: String = "1.0.0"

    val commands: Array<CommandTemplate> = arrayOf(
            VersionCommand(), HelpCommand()
    )
    val cmds = CommandUtil.registerCommand()

    fun appInit(args: Array<String>) {
        if(args.isNotEmpty()) {
            val parameter = args[0]
            when {
                parameter.startsWith("--") -> {
                    val lastOrNull = cmds.lastOrNull { cmd -> cmd.commandInfo.value == parameter.replace("--", "") }
                    print(lastOrNull)
                    if(lastOrNull != null) {
                        print(lastOrNull.commandTemplate.doOperation("default"))
                    } else HelpCommand().printDefault()


                }
                parameter.startsWith("-") -> {
                    val lastOrNull = cmds.lastOrNull { cmd -> cmd.commandInfo.alias.contains(parameter.replace("-", "")) }
                    if(lastOrNull != null) {
                        println(lastOrNull.commandTemplate.doOperation("default"))
                    } else HelpCommand().printDefault()
                }
                else -> HelpCommand().printDefault()
            }

        } else  HelpCommand().printDefault()
    }
}

fun main(args: Array<String>) {
    Ktmd.appInit(args)
}