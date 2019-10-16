package com.brageast.test.functioninterface;

import java.util.function.Consumer;
import java.util.function.Predicate;

public class Test2 {
    public static void main(String[] args) {
        Consumer<String> consumer = System.out::println;
        Consumer<String> cm = consumer.andThen(str -> System.out.println(str + " 欧拉"));
        cm.accept("测试");
        Predicate<Integer> predicate = i -> i > 0;
        Predicate<Integer> and = predicate.and(i -> i > 10);
        System.out.println(and.test(5));
    }
}
