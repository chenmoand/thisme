package com.brageast.blog.thisboot.service

import com.brageast.blog.thisboot.entity.User
import org.bson.types.ObjectId
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

interface UserService {

    fun insert(user: User): Mono<User>
    fun update(user: User): Mono<User>
    fun deleteById(objectId: ObjectId): Mono<Void>
    fun findAll(): Flux<User>
    fun findById(objectId: ObjectId): Mono<User>
    fun findByName(name: String): Mono<User>
}
