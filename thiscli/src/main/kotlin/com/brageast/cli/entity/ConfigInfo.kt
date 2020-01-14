package com.brageast.cli.entity

data class ConfigInfo(
        var author: String, val server: Server, val api: Api
) {
    fun doURL(callBack: (Api) -> String): String = "${server.url}:${server.port}/${api.base}/${callBack(api)}"
}

data class Server(var url: String, var port: Int = 8080, var token: String?)

data class Api(val base: String, val add: String, val remove: String, val update: String, val show: String)