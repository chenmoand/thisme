package com.brageast.test;


import java.util.ArrayList;
import java.util.List;

public class Test {

    public static void main(String[] args) {
//        String str = "javav";
//        System.out.println(str.intern());
        say(str -> str + "hello");
//        final Integer integer = new Integer();
        List<String> list = new ArrayList<>();
        for (String s : list) {
            
        }
        System.out.println("java");

    }

    @FunctionalInterface
    public interface Ite{
        String test(String str);
    }

    public static void say(Ite ite) {
        System.out.println(ite.test("java"));
    }
}