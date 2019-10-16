package com.brageast.chemo;

import java.util.Arrays;

public class QuickSort {
    public static void main(String[] args) {
        final int[] ints = {87, 3, 7, 13, 87, 5, 4};
        sort(ints);
        System.out.println(Arrays.toString(ints));
    }
    public static void sort(int[] arr) {
        sort(arr, 0);
    }
    private static void sort(int[] arr, int index) {
        int length = arr.length - 1;
        int right = index;
        //TODO 排序
        for(int i = 0; i <= length; i++) {

            if(arr[index] >= arr[i]) {
                if(getAbsolute(index - i) == 1) {
                    int j = arr[i];
                    arr[i] =  arr[index];
                    arr[index] = j;
                    index = i;
                } else if(arr[i] - arr[index] == 0) {
                    index = i;
                } else {
                    int j = arr[index + 1];
                    arr[index + 1] =  arr[index];
                    arr[index] = j;
                    int k = arr[i];
                    arr[index + 1] = arr[i];
                    arr[i] = k;
                    index += 1;
                }
            } else {
                right = i;
            }
        }
    }
    public static int getAbsolute(int i) {
        if(i > 0) {
            return i;
        }
        return - i;
    }
}
