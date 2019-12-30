package com.brageast.blog.thisboot.annotation;

import java.lang.annotation.*;

/**
 * 写入当前时间
 */
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.FIELD})
public @interface CreateTime {
}
