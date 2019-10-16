package com.brageast.test.functioninterface;

import java.util.Comparator;

public class Test {
    public static void main(String[] args) {
        // 多线成
        new Thread(() -> {
            System.out.println("正在运行");
        }).start();
        //比较整数
        Comparator<Integer> comparable = Integer::compare;
        System.out.println(comparable.compare(15, 3));
    }
}
