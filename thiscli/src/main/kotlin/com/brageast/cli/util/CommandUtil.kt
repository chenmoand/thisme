package com.brageast.cli.util

import com.brageast.cli.command.HelpCommand
import com.brageast.cli.entity.CMD
import com.brageast.cli.exception.AnnotationNotfoundException
import com.brageast.cli.template.CommandTemplate
import java.util.*

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
}
fun CMD?.notNull(vararg parameters: String) = this?.commandTemplate?.printOperation(*parameters)  ?: HelpCommand.printDefault()

fun Array<CommandTemplate>.registerCommand() = this.map { CMD(CommandUtil.findAnnotation(it), it) }.sortedBy { it.commandInfo.priority }

fun Array<String>.toParameter(): Array<String> = arrayListOf<String>().let {
    if(this.isNotEmpty()) {
        it.addAll(this.sliceArray(1 until this.size))
    }
    it.addAll(Collections.nCopies(5,""))

    return@let it.slice(0..4).toTypedArray()
}
