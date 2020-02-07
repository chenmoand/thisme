package com.brageast.cli

class User (var name: String) {


    companion object {
        @JvmStatic
        @JvmName("getUser")
        fun String.toUser(): User {
            return User(this)
        }
    }

}