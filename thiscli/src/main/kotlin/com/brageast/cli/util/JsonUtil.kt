@file:JvmName("JsonUtil")

package com.brageast.cli.util

import com.google.gson.Gson

val gson: Gson by lazy { Gson() }

inline fun <reified T: Any> Gson.fromJson(json: String): T = fromJson(json, T::class.java)
/**
 * 将一个实例转化正JSON格式
 */
fun Any.toJson() = gson.toJson(this, this.javaClass) ?: "{}"