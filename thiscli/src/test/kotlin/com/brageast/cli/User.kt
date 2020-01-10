package com.brageast.cli

class User {
    companion object {
        @JvmName("_getUser")
        @Deprecated(
                message = "moved to extension function",
                replaceWith = ReplaceWith(
                        expression = "str.toUser()",
                        imports = ["com.brageast.cli.User.toUser"]),
                level = DeprecationLevel.ERROR)
        fun getUser(str: String): User {
            return User()
        }

        @JvmStatic
        @JvmName("getUser")
        fun String.toUser(): User {
            return User()
        }
    }
}