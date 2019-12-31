package com.brageast.cli.template

interface CommandTemplate {

    fun doOperation(str: String): String

    fun showMessage(): String

}