package com.brageast.blog.thisboot.security.cache

import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import java.io.Serializable

interface ReactiveCache<E : Any, ID : Serializable> {

    fun put(e: Mono<E>): Mono<E>

    fun putAll(e: Flux<E>): Flux<E>

    fun remove(id: ID)

    fun remove(entity: E)

    fun update(entity: E)

    fun get(id: ID)

}

