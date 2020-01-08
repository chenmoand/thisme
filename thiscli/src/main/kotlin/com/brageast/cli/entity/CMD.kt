package com.brageast.cli.entity

import com.brageast.cli.annotations.Command
import com.brageast.cli.template.CommandTemplate

data class CMD(val commandInfo: Command, val commandTemplate: CommandTemplate)