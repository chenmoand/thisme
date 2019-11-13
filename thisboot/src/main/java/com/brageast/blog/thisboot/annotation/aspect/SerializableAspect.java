package com.brageast.blog.thisboot.annotation.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

@Aspect
@Slf4j
@Component
//@Profile({"dev", "test", "prod"})
public class SerializableAspect implements AopConfig {

    private static final String NAME = "Serializable()";

    @Pointcut("@annotation(com.brageast.blog.thisboot.annotation.Serializable)")
    private void Serializable() {
    }

    @Override
    @Before(NAME)
    public void doBefore(JoinPoint joinPoint) throws Throwable {
        log.info("========================================== Start ==========================================");
    }

    @Override
    @After(NAME)
    public void doAfter() throws Throwable {
        log.info("=========================================== End ===========================================" + "\n");
    }

    @Override
    @Around(NAME)
    public Object doAround(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        return proceedingJoinPoint.proceed();
    }
}
