package com.brageast.blog.thisboot.entity

import com.brageast.blog.thisboot.entity.enums.TState
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono


data class TResult<T> (
        val result: TState,
        val message: String,
        var data: T? = null
) {

    companion object {

        fun <T> ofMono(result: TState, message: String, data: T): Mono<TResult<T>> {
            return Mono.just(TResult(result, message, data))
        }

        fun <T> ofFlux(result: TState, message: String, data: T): Flux<TResult<T>> {
            return Flux.just(TResult(result, message, data))
        }
    }
}

