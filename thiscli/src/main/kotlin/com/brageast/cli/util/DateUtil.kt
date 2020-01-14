package com.brageast.cli.util

import java.text.SimpleDateFormat
import java.util.*

object DateUtil {
    val currentDate: String = Date().format()
}

@JvmOverloads
fun Date.format(pattern: String = "yyyy-MM-dd"): String = SimpleDateFormat(pattern).format(this)