package com.brageast.blog.thisboot.controller

import com.brageast.blog.thisboot.entity.User
import com.brageast.blog.thisboot.service.UserService
import org.bson.types.ObjectId
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.*
import org.springframework.web.reactive.function.server.ServerResponse
import reactor.core.publisher.Mono
import java.net.URI
import java.security.Principal

@CrossOrigin
@RestController
@RequestMapping("/api")
class UserController(
        val userService: UserService
) {

    @GetMapping(value = ["/users"])
    @PreAuthorize("hasAuthority('ADMIN')")
    fun getAllUser() = userService.findAll()

    @GetMapping(value = ["/users/{id}"])
    fun getUserById(@PathVariable id: ObjectId) = userService.findById(id)


    /**
     * 注册用户
     */
    @PostMapping(value = ["/users"])
    fun addUser(user: User) = userService.insert(user)

    @PutMapping(value = ["/users"])
    @PreAuthorize("hasAuthority('ADMIN')")
    fun updateUser(user: User) = userService.update(user)

    /**
     * 指定ID查看用户信息
     */
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping(value = ["/users/{id}"])
    fun deleteByUserId(@PathVariable id: ObjectId) = userService.deleteById(id)


    /**
     * 查看当前用户信息
     */
    @PreAuthorize("isAuthenticated()")
    @RequestMapping(value = ["/users/current"])
    fun getCurrentUserInfo(token: Principal) = userService.findByName(token.name)

}