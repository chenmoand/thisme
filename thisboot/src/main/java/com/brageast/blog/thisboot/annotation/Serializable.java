package com.brageast.blog.thisboot.annotation;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;

import java.lang.annotation.*;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE})
@Order(Ordered.HIGHEST_PRECEDENCE)
public @interface Serializable {
}
