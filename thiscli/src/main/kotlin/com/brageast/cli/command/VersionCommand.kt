package com.brageast.cli.command

import com.brageast.cli.ThisCli
import com.brageast.cli.annotations.Command
import com.brageast.cli.template.CommandTemplate

@Command(value = "version", alias = ["v"], description = "获得版本号指令")
class VersionCommand: CommandTemplate {

    override fun doOperation(vararg parameters: String): String = when(parameters[0]) {
        "help" -> "获得Ktmd版本号信息"
        else -> "ktmd-com.brageast.cli version: ${ThisCli.version}"
    }

}