package com.brageast.cli.entity

data class ConfigInfo(
        var url: String, var port: Int = 8080, var author: String, var token: String
)