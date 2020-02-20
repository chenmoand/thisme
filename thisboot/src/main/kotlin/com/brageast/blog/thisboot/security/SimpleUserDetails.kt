package com.brageast.blog.thisboot.security

import com.brageast.blog.thisboot.entity.User
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails

class SimpleUserDetails (val user: User) : UserDetails {

    private val isExpired: Boolean = Unit.let lambda@ {
        val accountExpiredTime = user.accountExpiredTime ?: return@lambda false
        return@lambda user.joinTime.after(accountExpiredTime)
    }

    private val isNotBan = !user.ban

    override fun getAuthorities(): MutableCollection<out GrantedAuthority> = user.authorities.map { SimpleGrantedAuthority(it) }.toMutableList()

    override fun isEnabled(): Boolean = isNotBan

    override fun getUsername(): String = user.name

    override fun isCredentialsNonExpired(): Boolean = isExpired

    override fun getPassword(): String = user.password

    override fun isAccountNonExpired(): Boolean = isExpired

    override fun isAccountNonLocked(): Boolean = isNotBan


}