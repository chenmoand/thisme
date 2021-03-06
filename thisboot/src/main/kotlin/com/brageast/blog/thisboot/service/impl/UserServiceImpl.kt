package com.brageast.blog.thisboot.service.impl

import com.brageast.blog.thisboot.entity.User
import com.brageast.blog.thisboot.repository.UserRepository
import com.brageast.blog.thisboot.service.UserService
import org.bson.types.ObjectId
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class UserServiceImpl(
        val userRepository: UserRepository,
        val bCryptPasswordEncoder: BCryptPasswordEncoder
) : UserService {

    override fun findAll(): Flux<User> = userRepository.findAll()

    override fun findById(objectId: ObjectId): Mono<User> = userRepository.findById(objectId)

    override fun findByName(name: String) = userRepository.findByName(name)

    @Transactional
    override fun insert(user: User): Mono<User> = userRepository
            .existsByName(user.name)
            .flatMap {
                if (!it) {
                    val encodePassword = bCryptPasswordEncoder.encode(user.password)
                    user.password = encodePassword
                    return@flatMap userRepository.save(user)
                }
                return@flatMap Mono.empty<User>()
            }


    override fun existsByName(name: String): Mono<Boolean> = userRepository.existsByName(name)

    @Transactional
    override fun update(user: User): Mono<User> {
        val userId = user.userId ?: return Mono.empty()

        // mongodb 的保存和更新是一个, 我不得不先查询一次, 在确定是否加密密码
        // 可能我知识的浅薄, 还是mongodb 不适合存储用户信息, LOL
        return findById(userId).flatMap {
            if (it.password != user.password) insert(user) else userRepository.save(user)
        }

    }

    @Transactional
    override fun deleteById(objectId: ObjectId): Mono<Void> = userRepository.deleteById(objectId)


}