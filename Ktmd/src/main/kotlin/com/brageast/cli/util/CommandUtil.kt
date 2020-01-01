package com.brageast.cli.util

import com.brageast.cli.Ktmd
import com.brageast.cli.annotations.Command
import com.brageast.cli.entity.CMD
import com.brageast.cli.exception.AnnotationNotfoundException
import com.brageast.cli.template.CommandTemplate
import kotlin.streams.toList

object CommandUtil {

    fun <T: Annotation> findAnnotation(instance: CommandTemplate, clazz: Class<T>): T {
        val instanceClass = instance.javaClass
        return instanceClass.getAnnotation(clazz) ?: throw AnnotationNotfoundException(instanceClass, clazz)
    }

    fun registerCommand(): List<CMD> {
        val cmds = ArrayList<CMD>()
        for (command in Ktmd.commands) {
            val findAnnotation = findAnnotation(command, Command::class.java)
            cmds.add(CMD(findAnnotation, command))
        }
        return cmds.stream().sorted{ c1, c2 -> if(c1.commandInfo.priority > c2.commandInfo.priority) -1 else 1 }.toList()
    }
}