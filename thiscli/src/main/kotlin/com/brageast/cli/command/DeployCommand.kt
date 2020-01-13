package com.brageast.cli.command

import com.brageast.cli.CliConfig.USER_FILE
import com.brageast.cli.annotations.Command
import com.brageast.cli.template.CommandTemplate
import java.io.File
import java.io.IOException
import java.util.*

@Command(name = "deploy", alias = ["d"], description = "把文章推送到后台")
class DeployCommand : CommandTemplate {

    override fun doOperation(vararg parameters: String): String =
            when (val pt = parameters[0]) {
                "help" -> "-> thiscli deploy 发送文章"
                "now" -> TODO("暂未完成")
                else -> {
                    val scanner = Scanner(System.`in`)

                    val listFiles = USER_FILE.toListFile().filter(File::isDirectory)
                    listFiles.forEachIndexed { index, file -> println("${index}. ${file.name}") }
                    var select = scanner + "选择一个发布所在的文件夹(序号): "
                    val file = listFiles[select].toListFile()
                    file.filter(File::isFile).filter { it.name.endsWith(".md", true) }.forEachIndexed(function)
                    select = scanner + "选择你要发布的文件(序号): "
                    val selectFile = file[select]

                    ""
                }
            }
}

private val function = lambda@ fun(index: Int, file: File) = println("${index}. ${file.name}")

private operator fun Scanner.plus(problem: String): Int {
    print(problem)
    return this.nextInt()
}

private fun File.toListFile(): List<File> = this.listFiles()?.filterNotNull() ?: throw IOException("未找到相关的文件或者目录")
