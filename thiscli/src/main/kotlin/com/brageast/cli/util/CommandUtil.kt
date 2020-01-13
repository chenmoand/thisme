package com.brageast.cli.util

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
}
fun CMD?.notNull(vararg parameters: String) = this?.commandTemplate?.printOperation(*parameters)  ?: HelpCommand.printDefault()

fun Array<CommandTemplate>.registerCommand() = this.map { CMD(CommandUtil.findAnnotation(it), it) }.sortedBy { it.commandInfo.priority }

fun Array<String>.toParameter(): Array<String> {
    val arr = arrayListOf<String>()

    if (this.isNotEmpty()) forEachIndexed { index: Int, str: String -> if (index != 0) arr.add(str) }

    arr.addAll(listOf("") * 5)

    return arr.slice(0..4).toTypedArray()
}

private operator fun <E> List<E>.times(i: Int): Collection<E> {
    val arr = arrayListOf<E>()
    for (o in 1..i) arr.addAll(this)
    return arr
}
