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
}

fun main(args: Array<String>) {
    if (args[0].startsWith("--")) {

    } else if (args[0].startsWith("-")) {

    } else {
        println(HelpCommand().doOperation(""))
    }
}