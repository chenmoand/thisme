package com.brageast.cli.command

import com.brageast.cli.annotations.Command
import com.brageast.cli.template.CommandTemplate

@Command(value = "help", alias = ["h"], description = "获得帮指令帮助", priority = 99)
class HelpCommand: CommandTemplate  {

    override fun doOperation(vararg str: String): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}