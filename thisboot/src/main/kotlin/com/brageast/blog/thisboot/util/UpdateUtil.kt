package com.brageast.blog.thisboot.util

import org.springframework.data.mongodb.core.query.Update

fun Update.setToEntity(entity: Any, vararg exclude: String): Update {
    val entityClass = entity.javaClass
    val declaredFields = entityClass.declaredFields?.filterNotNull()

    if (!declaredFields.isNullOrEmpty()) {
        declaredFields.filter {
            !exclude.contains(it.name)
        }.forEach {
            it.isAccessible = true

            it.get(entity)?.also { value ->
                this.set(it.name, value)
            }
        }


    }


    return this
}
