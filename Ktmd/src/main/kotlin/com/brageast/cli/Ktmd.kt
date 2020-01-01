package com.brageast.cli

import com.brageast.cli.command.HelpCommand
import com.brageast.cli.command.VersionCommand
import com.brageast.cli.template.CommandTemplate

object Ktmd {
    const val version: String = "1.0.0"
    val commands: Array<CommandTemplate> = arrayOf(
            VersionCommand(), HelpCommand()
    )
}

fun main(args:Array<String>) {

}