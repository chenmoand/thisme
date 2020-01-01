package com.brageast.cli.template

interface CommandTemplate {

    fun doOperation(vararg str: String): String

}