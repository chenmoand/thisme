@file:JvmName("ThisCliApp")

package com.brageast.cli

import com.brageast.cli.CliConfig.COMMANDS
import com.brageast.cli.command.HelpCommand
import com.brageast.cli.util.notNull
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
                parameter
                        .startsWith("-") -> COMMANDS
                        .lastOrNull {
                            it.commandInfo.alias.contains(parameter.replace("-", ""))
                        }
                        .notNull(*parameters)

                else -> COMMANDS
                        .lastOrNull {
                            val commandInfo = it.commandInfo
                            commandInfo.alias.contains(parameter) || commandInfo.name == parameter
                        }
                        .notNull(*parameters)
            }

        } else HelpCommand.printDefault()
    }


}