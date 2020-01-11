package com.brageast.cli.command

import com.brageast.cli.annotations.Command
import com.brageast.cli.template.CommandTemplate
import com.brageast.cli.util.FileUtil

@Command(name = "deploy", alias = ["d"], description = "把文章推送到后台")
class DeployCommand : CommandTemplate {

    override fun doOperation(vararg parameters: String): String =
            when (val pt = parameters[0]) {
                "help" -> "-> thiscli deploy 发送文章"
                else -> {
                    print(FileUtil.configInfo)
                    ""
                }
            }
}
