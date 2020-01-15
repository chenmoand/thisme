@file:JvmName("ThisCliApp")

package com.brageast.cli

import com.brageast.cli.CliConfig.COMMANDS
import com.brageast.cli.command.HelpCommand
import com.brageast.cli.entity.CMD
import com.brageast.cli.util.notNull
import com.brageast.cli.util.toParameter

fun main(args: Array<String>) {
    println("< -!ThisCli!- >")
    ThisCli.appInit(args)
}


object ThisCli {

    private fun Array<String>.ifNotEmpty(callback: Array<String>.() -> Unit) = if (isNotEmpty()) callback(this) else HelpCommand.printDefault()

    fun appInit(args: Array<String>) {
        args.ifNotEmpty {
            val parameters = this.toParameter()
            fun doCommand(callback: CMD.() -> Boolean) = COMMANDS.lastOrNull(callback).notNull(*parameters)
            // 人生苦短我用this
            this[0].apply {
                if (startsWith("-")) doCommand { commandInfo.alias.contains(this@apply.substring(1)) }
                else doCommand { commandInfo.name == this@apply }
            }

        }
    }
}


