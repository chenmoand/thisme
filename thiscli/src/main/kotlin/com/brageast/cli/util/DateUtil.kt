package com.brageast.cli.util

import java.text.SimpleDateFormat
import java.util.*

object DateUtil {
    val currentDate: String = SimpleDateFormat("yyyy-MM-dd").format(Date())
}