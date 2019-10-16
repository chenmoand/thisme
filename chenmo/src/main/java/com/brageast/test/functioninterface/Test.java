package com.brageast.test.functioninterface;

import java.util.Arrays;

public class Test {
    public static void main(String[] args) {

    }
    public static void sayName(God god) {
        System.out.println(god.name(1));
//        Arrays.sort();

    }
    @FunctionalInterface
    interface God {
        String name(int id);
    }
}
