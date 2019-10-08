package com.brageast.test.impl;

import java.util.HashMap;

public class RunTest {
    public static void main(String[] args) {
        final HashMap<String, Integer> hashMap = new HashMap<>(16);
        String line = "169,589,798,723,589,169,169,723";
        final String[] strings = line.split(",");
        for(String str : strings){
            if(hashMap.get(str) != null) {
                hashMap.replace(str, hashMap.get(str) + 1);
            } else {
                hashMap.put(str, 1);
            }
        }
        System.out.println(hashMap);
    }
}
