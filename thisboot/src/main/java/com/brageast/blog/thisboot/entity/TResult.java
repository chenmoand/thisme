package com.brageast.blog.thisboot.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Data
@AllArgsConstructor
public class TResult<T> {
    private TState result;
    private String message;
    private T data;

    public static <T> Mono<TResult<T>> ofMono(TState result, String message, T data) {
        return Mono.just(new TResult<T>(result, message, data));
    }

    public static <T> Flux<TResult<T>> ofFlux(TState result, String message, T data) {
        return Flux.just(new TResult<T>(result, message, data));
    }
}

