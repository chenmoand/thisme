package com.brageast.cli.util

import com.brageast.cli.ThisCli
import com.brageast.cli.annotations.Command
import com.brageast.cli.command.HelpCommand
import com.brageast.cli.entity.CMD
import com.brageast.cli.exception.AnnotationNotfoundException
import com.brageast.cli.template.CommandTemplate

object CommandUtil {

    @JvmStatic
    fun <T : Annotation> findAnnotation(instance: CommandTemplate, clazz: Class<T>): T {
        val instanceClass = instance.javaClass
        return instanceClass.getAnnotation(clazz) ?: throw AnnotationNotfoundException(instanceClass, clazz)
    }

    /*@JvmStatic*/
    inline fun <reified T : Annotation> findAnnotation(instance: CommandTemplate): T {
        val clazz = T::class.java
        val instanceClass = instance.javaClass
        return instanceClass.getAnnotation(clazz) ?: throw AnnotationNotfoundException(instanceClass, clazz)
    }

    fun registerCommand(): List<CMD> {
        val cmds = ArrayList<CMD>()
        for (command in ThisCli.commands) {
            val findAnnotation: Command = findAnnotation(command)
            cmds.add(CMD(findAnnotation, command))
        }
        return cmds.sortedBy { it.commandInfo.priority }
    }

    fun cmdNotNull(cmd: CMD?, vararg parameters: String) =
            cmd?.run { commandTemplate.printOperation(*parameters) } ?: HelpCommand.printDefault()
}