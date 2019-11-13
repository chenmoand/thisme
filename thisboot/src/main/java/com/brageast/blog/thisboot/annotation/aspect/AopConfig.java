package com.brageast.blog.thisboot.annotation.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;

public interface AopConfig{
    void doBefore(JoinPoint joinPoint) throws Throwable;

    void doAfter() throws Throwable;

    Object doAround(ProceedingJoinPoint proceedingJoinPoint) throws Throwable;

    default void doAfterReturning() {
    }

    default void doAfterThrowing() {
    }
}
