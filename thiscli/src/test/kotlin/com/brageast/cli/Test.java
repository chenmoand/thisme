package com.brageast.cli;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class Test {
    public static void main(String[] args) throws IOException {
        long start1 = System.currentTimeMillis();
        List<Integer> stringList = new ArrayList<>();

        for (int i = 0 ; i < 100000; ++i) {
            stringList.add(i * i);
        }

        for (Integer integer : stringList) {
            System.out.println(integer);
        }


        long end1 = System.currentTimeMillis();
        System.out.println("耗时："+(end1-start1) +"  ms");

        long start = System.currentTimeMillis();
        List<Integer> stringList1 = new ArrayList<>();
        for (int i = 0 ; i < 100000; ++i) {
            stringList1.add(i * i);
        }

//        stringList1.stream().forEach();


        long end = System.currentTimeMillis();
        System.out.println("耗时："+(end-start) +"  ms");

    }
}
