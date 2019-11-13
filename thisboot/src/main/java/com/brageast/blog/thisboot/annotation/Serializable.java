package com.brageast.blog.thisboot.annotation;

import java.lang.annotation.*;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE})
//@Order(Ordered.HIGHEST_PRECEDENCE)
public @interface Serializable {
}
