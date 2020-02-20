package com.brageast.blog.thisboot.controller

import com.brageast.blog.thisboot.entity.User
import com.brageast.blog.thisboot.service.UserService
import org.bson.types.ObjectId
import org.springframework.web.bind.annotation.*

@CrossOrigin
@RestController
@RequestMapping("/api")
class UserController(
        val userService: UserService
) {

    @GetMapping(value = ["/users"])
    fun getAllUser() = userService.findAll()

    @PostMapping(value = ["/users"])
    fun addUser(user: User) = userService.insert(user)

    @PutMapping(value = ["/users"])
    fun updateUser(user: User) = userService.update(user)

    @DeleteMapping(value = ["/users"])
    fun deleteByUserId(id: ObjectId) = userService.deleteById(id)

}