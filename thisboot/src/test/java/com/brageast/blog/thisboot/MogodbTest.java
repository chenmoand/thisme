package com.brageast.blog.thisboot;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;

public class MogodbTest {
    public static void main(String[] args) {

        System.out.println(Update.update("java", "java").set("java2", "java3"));


    }
}
