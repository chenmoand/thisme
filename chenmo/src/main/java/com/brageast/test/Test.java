package com.brageast.test;

import java.util.Arrays;

public class Test {
    public static void main(String[] args) {
        int[] arr = {34 ,23 ,3143,3, 24,3243, 5425 ,3432324,423 };
        paixu(arr);
        System.out.println(Arrays.toString(arr));
    }
    public static void paixu(int[] arr) {
        for(int i = 0; i < arr.length; i ++) {
            for(int j = 0; j < arr.length - 1; j++) {
                if(arr[i] < arr[j]) {
                    int k = arr[i];
                    arr[i] = arr[j];
                    arr[j] = k;
                }
            }
        }
    }
}