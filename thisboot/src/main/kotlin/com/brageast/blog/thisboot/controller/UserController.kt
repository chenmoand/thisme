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
@RequestMapping("/api/users")
class UserController(
        val userService: UserService
) {

    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    fun getAllUser() = userService.findAll()

    @GetMapping("/{id}")
    fun getUserById(@PathVariable id: ObjectId) = userService.findById(id)


    /**
     * 注册用户
     */
    @PostMapping
    fun addUser(user: User) = userService.insert(user)

    @PutMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    fun updateUser(user: User) = userService.update(user)

    /**
     * 指定ID查看用户信息
     */
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping(value = ["/{id}"])
    fun deleteByUserId(@PathVariable id: ObjectId) = userService.deleteById(id)


    /**
     * 查看当前用户信息
     */
    @PreAuthorize("isAuthenticated()")
    @RequestMapping(value = ["/current"])
    fun getCurrentUserInfo(token: Principal) = userService.findByName(token.name)

}