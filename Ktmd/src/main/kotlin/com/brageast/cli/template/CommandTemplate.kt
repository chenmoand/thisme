package com.brageast.cli.template

interface CommandTemplate {

    fun doOperation(vararg strs: String): String

}