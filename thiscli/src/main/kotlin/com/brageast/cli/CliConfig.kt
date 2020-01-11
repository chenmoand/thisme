package com.brageast.cli

import com.brageast.cli.command.*
import com.brageast.cli.template.CommandTemplate
import com.brageast.cli.util.CommandUtil
import java.io.File

object CliConfig {
    const val VERSION: String = "1.0.0"
    const val CONFIG_NAME = "thiscli.config.json"

    val COMMANDS: Array<CommandTemplate> = arrayOf(
            VersionCommand(), InitializationCommand(), HelpCommand,
            CreateMarkdownCommand(), DeployCommand()
    )
    val CMDS = CommandUtil.registerCommand()
    // 获取当前cmd 输入的所在目录
    @JvmStatic
    val USER_PATH: String = System.getProperty("user.dir")
    val USER_FILE = File(USER_PATH)
    val CONFIG_FILE = File(USER_FILE, CONFIG_NAME)
}