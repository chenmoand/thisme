package com.brageast.blog.thisboot.annotation

import com.brageast.blog.thisboot.security.SimpleAuthenticationManager
import org.springframework.context.annotation.Import


/**
 * 启动用户相关的操作并关闭Security默认的配置
 */
@Target(AnnotationTarget.CLASS)
@Retention(AnnotationRetention.RUNTIME)
@MustBeDocumented
@Import(SimpleAuthenticationManager::class)
annotation class EnableAuthenticationManager