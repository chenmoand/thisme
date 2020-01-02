package com.brageast.cli.command

import com.brageast.cli.Ktmd
import com.brageast.cli.annotations.Command
import com.brageast.cli.template.CommandTemplate
import java.lang.StringBuilder

@Command(value = "help", alias = ["h"], description = "获得帮指令帮助", priority = 99)
class HelpCommand: CommandTemplate  {

    override fun doOperation(vararg strs: String): String {
        val str:String = strs[0]
        if("" == str) {
            val stringBuilder = StringBuilder()
            Ktmd.cmds.forEach {
                val commandInfo = it.commandInfo
                stringBuilder.append(commandInfo.alias.map { s-> "-$s" })
                stringBuilder.append(" ")
                stringBuilder.append("--" + commandInfo.value)
                stringBuilder.append(" ")
                stringBuilder.append(commandInfo.description)
                stringBuilder.append("\n")
            }
            return stringBuilder.toString()
        }

        if("help" == str)  return "获取帮助信息"

        return Ktmd.cmds.stream().filter {
            it.commandInfo.alias.contains(str) || it.commandInfo.value.contains(str)
        }.findFirst().get().commandTemplate.doOperation("help")

    }

}
