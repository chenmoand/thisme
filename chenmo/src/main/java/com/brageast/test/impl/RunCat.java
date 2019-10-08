package com.brageast.test.impl;

import com.brageast.test.entity.Cat;

public class RunCat {
    public static void main(String[] args) {
        Cat cat = new Cat();
        System.out.println(cat);
        cat.setBrand("贱马");
        cat.setColor("绿色");
        cat.setQuantity(3);
        System.out.println(cat);
        System.out.println(sum(100));

    }
    public static int sum(final int num) {
        int value = 0;
        for(int i = 1; i <= num; i++) {
            value += i ;
        }
        return value;
    }
}
