package com.brageast.cli.command

import com.brageast.cli.CliConfig.USER_FILE
import com.brageast.cli.annotations.Command
import com.brageast.cli.template.CommandTemplate
import java.io.File
import java.io.IOException
import java.util.*
import java.util.regex.Pattern

@Command(name = "deploy", alias = ["d"], description = "把文章推送到后台")
object DeployCommand : CommandTemplate {

    override fun doOperation(vararg parameters: String): String =
            when (val pt = parameters[0]) {
                "help" -> "-> thiscli deploy 发送文章"
                "now" -> TODO("暂未完成")
                else -> let {
                    val scanner = Scanner(System.`in`)
                    val tabs = USER_FILE
                            .toListFile()
                            .filter(File::isDirectory)
                            .filter { Pattern.compile("\\d{4}-\\d{2}-\\d{2}").matcher(it.name).find() }
                    if (tabs.isEmpty()) {
                        scanner.close()
                        return "-> 并未找到合适的目录"
                    }
                    tabs.forEachIndexed(formatPrint)

                    val files = tabs[scanner + "选择一个发布所在的文件夹(序号): "]
                            .toListFile()
                            .filter(File::isFile)
                            .filter { it.name.endsWith(".md", true) }
                    if (files.isEmpty()) {
                        scanner.close()
                        return "-> 并未找到合适的文件"
                    }
                    files.forEachIndexed(formatPrint)

                    val selectFile = files[scanner + "选择你要发布的文件(序号): "]

                    ""
                }
            }
}

private val formatPrint = lambda@ fun(index: Int, file: File) = println("[${index}] - ${file.name}")

private operator fun Scanner.plus(problem: String): Int {
    print(problem)
    return this.nextInt()
}

private fun File.toListFile(): List<File> = this.listFiles()?.filterNotNull() ?: throw IOException("未找到相关的文件或者目录")
