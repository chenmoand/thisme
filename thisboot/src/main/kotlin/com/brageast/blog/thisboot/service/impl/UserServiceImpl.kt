package com.brageast.blog.thisboot.service.impl

import com.brageast.blog.thisboot.entity.User
import com.brageast.blog.thisboot.repository.UserRepository
import com.brageast.blog.thisboot.service.UserService
import org.bson.types.ObjectId
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import reactor.core.publisher.Mono

@Service
class UserServiceImpl(
        val userRepository: UserRepository,
        val bCryptPasswordEncoder: BCryptPasswordEncoder
): UserService {

    override fun findAll() = userRepository.findAll()!!

    override fun findById(objectId: ObjectId) = userRepository.findById(objectId)!!

    override fun findByName(name: String) = userRepository.findByName(name)

    @Transactional
    override fun insert(user: User): Mono<User> {
        val encodePassword = bCryptPasswordEncoder.encode(user.password)
        user.password = encodePassword
        return userRepository.save(user)
    }

    @Transactional
    override fun update(user: User): Mono<User> {
        val userId = user.userId ?: return insert(user)

        val block = findById(userId).block() ?: return Mono.empty()

        // mongodb 的保存和更新是一个, 我不得不先查询一次, 在确定是否加密密码
        // 可能我知识的浅薄, 还是mongodb 不适合存储用户信息, LOL
        return if (block.password != user.password) insert(user) else userRepository.save(user)

    }

    @Transactional
    override fun deleteById(objectId: ObjectId) = userRepository.deleteById(objectId)!!


}