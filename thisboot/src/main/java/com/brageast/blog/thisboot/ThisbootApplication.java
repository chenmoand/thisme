package com.brageast.blog.thisboot;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * 开始的地方
 *
 * @author chenmo
 */
@Slf4j
@SpringBootApplication
public class ThisbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(ThisbootApplication.class, args);
        log.info("代码托管于 https://github.com/chenmoand/thisme");
    }

}
