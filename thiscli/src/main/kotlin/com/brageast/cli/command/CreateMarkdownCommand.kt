package com.brageast.cli.command

import com.brageast.cli.CliConfig.INFO_NAME
import com.brageast.cli.CliConfig.USER_FILE
import com.brageast.cli.annotations.Command
import com.brageast.cli.entity.ArticleInfo
import com.brageast.cli.entity.ArticlesInfo
import com.brageast.cli.exception.FileNameSameException
import com.brageast.cli.template.CommandTemplate
import com.brageast.cli.util.DateUtil
import com.brageast.cli.util.fromJson
import com.brageast.cli.util.IGson
import com.brageast.cli.util.toJson
import java.io.File
import java.util.*

@Command(name = "create", alias = ["c"], description = "description 创建一个实时的markdown日志文件")
object CreateMarkdownCommand : CommandTemplate {
    override fun doOperation(vararg parameters: String): String =
            when (val filename = parameters[0]) {
                "" -> "-> 未输入指定参数"
                "help" -> "m-> 创建一个实时的markdown日志文件"
                else -> {
                    val outFileUrl = "${DateUtil.currentDate}/${filename}.md"
                    val file = File(USER_FILE, outFileUrl)
                    // 尝试创建所在目录
                    file.parentFile?.apply {
                        if (!exists()) mkdirs()
                        File(this, INFO_NAME).let {
                            val ai = ArticleInfo(null, filename, parameters[1], Date())
                            if (!it.exists()) {
                                it.createNewFile()
                                it.writeText(ArticlesInfo(DateUtil.currentDate, arrayListOf(ai)).toJson())
                            } else {
                                val oldInfo = IGson.fromJson<ArticlesInfo>(it.readText())
                                oldInfo.articleInfos.let { ais ->
                                    if (ais.map(ArticleInfo::articleTitle).contains(filename)) {
                                        throw FileNameSameException("文件${filename}名称相同, 无法创建")
                                    }
                                    ais.add(ai)
                                }
                                it.writeText(oldInfo.toJson())
                            }
                        }
                    } ?: throw IllegalAccessError("创建文件夹错误")
                    if (file.createNewFile()) "-> 创建${outFileUrl}文件成功" else "-> 创建${outFileUrl}文件失败"
                }
            }
}