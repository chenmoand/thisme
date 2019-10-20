package com.brageast.blog.thisboot.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Configuration
public class DateConfig {
    @Bean
    public Converter<Instant, LocalDateTime> localDateTimeConverter() {
        return source -> LocalDateTime.parse(source.toString(), DateTimeFormatter.ofPattern("yyyy-MM-dd"));
    }

}
