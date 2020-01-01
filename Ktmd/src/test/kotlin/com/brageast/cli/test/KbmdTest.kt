package com.brageast.cli.test

import com.brageast.cli.annotations.Command
import com.brageast.cli.command.VersionCommand
import com.brageast.cli.util.CommandUtil

fun main() {
    var versionCommand = VersionCommand()
    var findAnnotation = CommandUtil.findAnnotation(versionCommand, Command::class.java)
    println(CommandUtil.registerCommand())
}