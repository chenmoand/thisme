@file:JvmName("JsonUtil")

package com.brageast.cli.util

import com.google.gson.Gson
import com.google.gson.GsonBuilder

val IGson: Gson by lazy { GsonBuilder().setPrettyPrinting().create(); }

inline fun <reified T: Any> Gson.fromJson(json: String): T = fromJson(json, T::class.java)
/**
 * 将一个实例转化正JSON格式
 */
fun Any.toJson() = IGson.toJson(this, this.javaClass) ?: "{}"