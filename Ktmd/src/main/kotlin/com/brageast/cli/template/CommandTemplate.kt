package com.brageast.cli.template

interface CommandTemplate {

    fun doOperation(vararg parameters: String): String

    fun printOperation(vararg parameters: String) = println(this.doOperation(*parameters))

}