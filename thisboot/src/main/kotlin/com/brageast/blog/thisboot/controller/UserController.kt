package com.brageast.blog.thisboot.controller

import com.brageast.blog.thisboot.entity.User
import com.brageast.blog.thisboot.service.UserService
import org.bson.types.ObjectId
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.*

@CrossOrigin
@RestController
@RequestMapping("/api")
class UserController(
        val userService: UserService
) {

    @GetMapping(value = ["/users"])
    fun getAllUser() = userService.findAll()

    @GetMapping(value = ["/users/{id}"])
    fun getUserById(@PathVariable id: ObjectId) = userService.findById(id)

    @PostMapping(value = ["/users"])
    fun addUser(user: User) = userService.insert(user)

    @PutMapping(value = ["/users"])
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    fun updateUser(user: User) = userService.update(user)

    @PreAuthorize("hasAnyAuthority('ADMIN')")
    @DeleteMapping(value = ["/users/{id}"])
    fun deleteByUserId(@PathVariable id: ObjectId) = userService.deleteById(id)

}