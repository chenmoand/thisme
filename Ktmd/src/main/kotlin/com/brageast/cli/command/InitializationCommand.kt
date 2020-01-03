package com.brageast.cli.command

import com.brageast.cli.annotations.Command
import com.brageast.cli.template.CommandTemplate

@Command(value = "initialization", alias = ["i", "init"], description = "初始化这个目录")
class InitializationCommand: CommandTemplate {

    override fun doOperation(vararg parameters: String): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

}