package com.brageast.cli.command

import com.brageast.cli.Ktmd
import com.brageast.cli.annotations.Command
import com.brageast.cli.template.CommandTemplate

@Command(value = "version", alias = ["v"], description = "获得版本号指令")
class VersionCommand: CommandTemplate {

    override fun doOperation(vararg strs: String): String = when(strs[0]) {
        "help" -> "获得Ktmd版本号信息"
        else -> "ktmd-cli version: ${Ktmd.version}"
    }

}