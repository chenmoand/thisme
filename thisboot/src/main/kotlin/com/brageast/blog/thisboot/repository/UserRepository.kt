package com.brageast.blog.thisboot.repository

import com.brageast.blog.thisboot.entity.User
import org.bson.types.ObjectId
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.reactive.ReactiveSortingRepository
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

interface UserRepository : ReactiveSortingRepository<User, ObjectId> {
    fun findByName(name: String): Mono<User>

    fun findAllBy(pageable: Pageable): Flux<User>

    fun existsByName(name: String): Mono<Boolean>
}