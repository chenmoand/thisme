package com.brageast.blog.thisboot.util;

import java.util.Objects;
import java.util.function.Consumer;

/**
 * 一个反射的工具包
 * 写着玩的
 *
 * @author chenmo
 */
public class ReflectionUtil {
    private Class<?> aClass;

    private ReflectionUtil () {
        this.aClass = null;
    }

    private ReflectionUtil(Class aClass) {
        Objects.requireNonNull(aClass);
        this.aClass = aClass;
    }

    public static ReflectionUtil of(Class aClass) {

        return new ReflectionUtil(aClass);
    }
    public static ReflectionUtil of(String cls) {
        return of(cls, throwable -> throwable.printStackTrace());
    }

    public static ReflectionUtil of(String cls, Consumer<Throwable> consumer) {
        Class<?> acls = null;
        try {
            acls = Class.forName(cls);
        } catch (Exception e) {
            consumer.accept(e);
        }
        return new ReflectionUtil(acls);
    }

    public static ReflectionUtil empty() {
        return new ReflectionUtil();
    }
//    pubic withAnnotation()

}
