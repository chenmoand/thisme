package com.brageast.test.impl;

import java.util.Arrays;

/**
 * 冒泡排序
 * @author chenmo
 */
public class PaiXu {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(maopao(3, 324, 234, 234, 6, 34, 43643)));
    }
    public static int[] maopao(int... arr) {
        if(arr.length < 2) { return arr;}
        for(int i = 0; i < arr.length; i ++) {
            for (int j = 0;j < arr.length; j ++ ) {
                if( i == j ) {continue;}
                if(arr[i] < arr[j]) {
                    int k = arr[i];
                    arr[i] = arr[j];
                    arr[j] = k;
                }
            }
        }
        return arr;

    }
}
