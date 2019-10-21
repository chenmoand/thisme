package com.brageast.chemo.work;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class StreamWork {

    public static void main(String[] args) {
        List<String> global = new ArrayList<String>(){{
            add("《教父》"); add("《肖申克的救赎》"); add("《希特勒名单》");
            add("《公民凯恩》"); add("《卡塞布兰卡》");
        }};
        List<String> chinese = new ArrayList<String>(){{
            add("《霸王别姬》");add("《大闹天宫》");add("《鬼子来了》");
            add("《大话西游》");add("《活着》");
        }};
        System.out.println("1) 打印前三个名字");
        global.stream().limit(3).forEach(System.out::println);
        System.out.println("2）将两个排行榜中的前5名挑出来共同存入新的集合，然后遍历该新集合。");
        final List<String> collect = Stream.concat(global.stream(), chinese.stream())
                .collect(Collectors.toList());
        collect.forEach(System.out::println);


    }
}
