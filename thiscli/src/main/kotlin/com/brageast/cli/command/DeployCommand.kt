package com.brageast.cli.command

import com.brageast.cli.CliConfig.USER_FILE
import com.brageast.cli.annotations.Command
import com.brageast.cli.exception.NotFoundException
import com.brageast.cli.template.CommandTemplate
import com.brageast.cli.util.ConfigUtil
import java.io.File
import java.io.IOException
import java.util.*
import java.util.regex.Pattern

@Command(name = "deploy", alias = ["d"], description = "把文章推送到后台")
object DeployCommand : CommandTemplate {

    override fun doOperation(vararg parameters: String): String =
            when (parameters[0]) {

                "help" -> "-> thiscli deploy 发送文章"

                "now" -> TODO("暂未完成")

                else -> let {
                    val scanner = Scanner(System.`in`)

                    // 一个返回方法, 我不知道kotlin'会不会自动关Scanner
                    // 这样写防止到处return 不明意义的东西
                    fun Back(callback: () -> String): String {
                        scanner.close()
                        return callback()
                    }

                    val tabs = USER_FILE
                            .toListFile()
                            .filter(File::isDirectory)
                            .filter { Pattern.compile("\\d{4}-\\d{2}-\\d{2}").matcher(it.name).find() }

                    if (tabs.isEmpty()) return@let Back { "-> 并未找到合适的目录" }

                    tabs.forEachIndexed(formatPrint)
                    //获得相关的文件
                    val files = tabs[scanner + "选择一个发布所在的文件夹(序号): "]
                            .toListFile()
                            .filter(File::isFile)
                            .filter { it.name.endsWith(".md", true) }

                    if (files.isEmpty()) return@let Back { "-> 并未找到合适的文件" }

                    files.forEachIndexed(formatPrint)

                    return@let files[scanner + "选择你要发布的文件(序号): "].run {
                        val date = this.parentFile.name
                        val foloderInfo = ConfigUtil.getFoloderInfo(name)
                        if (foloderInfo.date != date) return@run Back { "-> 文件所在目录与配置文件日期不相等" }

                        val fileName = name.substring(0..name.length - 4)
                        val article = foloderInfo
                                .articleInfos
                                .findLast { it.title == fileName }
                                ?: throw NotFoundException("此文件不是通过命令创建的, 未找到相关信息")

                        article.content = this.readText()



                        return Back { "QWQ" }
                    }

                }
            }
}

private val formatPrint = lambda@ fun(index: Int, file: File) = println("[${index}] - ${file.name}")

/**
 * 提问并且直接获取值
 */
private operator fun Scanner.plus(problem: String): Int {
    print(problem)
    return this.nextInt()
}

private fun File.toListFile(): List<File> = this.listFiles()?.filterNotNull() ?: throw IOException("未找到相关的文件或者目录")


