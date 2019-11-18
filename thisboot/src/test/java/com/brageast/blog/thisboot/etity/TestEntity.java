package com.brageast.blog.thisboot.etity;

import com.brageast.blog.thisboot.annotation.CreateTime;

import java.util.Date;


@lombok.Data
public class TestEntity {
    @CreateTime
    private Date time;
    @CreateTime
    private Date time2;
}
