package com.brageast.blog.thisboot.security

import com.brageast.blog.thisboot.entity.User
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails

class SimpleUserDetails(val user: User) : UserDetails {

    private val isNotExpired: Boolean = user.run {
        if(joinTime != null && accountExpiredTime != null)
            // IDEA 的最新版Kotlin插件各种报错
            // 我都判断不是null还在一个劲的报加!!
            joinTime!!.before(accountExpiredTime)
        else true
    }

    private val isNotBan = !user.ban

    override fun getAuthorities(): MutableCollection<out GrantedAuthority> = user
            .authorities.map {
                SimpleGrantedAuthority(it)
            }.toMutableList()

    override fun isEnabled(): Boolean = isNotBan

    override fun getUsername(): String = user.name

    override fun isCredentialsNonExpired(): Boolean = isNotExpired

    override fun getPassword(): String = user.password

    override fun isAccountNonExpired(): Boolean = isNotExpired

    override fun isAccountNonLocked(): Boolean = isNotBan


}