package com.brageast.chemo;

import java.util.Comparator;

public class QuickSort {
    public static void main(String[] args) {
       /* Demo3.sort(123,12414,3525435,4656324,3241412,5325);*/
        Comparator<Integer> comparator = Integer::compareTo;
    }
}
/*
class Demo3 {

    public static int[] sort(int... arr) {
        if(arr.length <= 1 ) {
            return arr;
        }
        int len = arr.length - 1;
        int cen = len / 2;
        int index = cen;
        int val = arr[cen];
        for(int i = 0; i <= len; i ++) {
            if (i == index) continue;
            if (val > arr[i]) {
                int nval = val;
                int nindex = i + 1;
                if(nindex == len + 1 || nindex == 1) {continue;}
                arr[index] = arr[nindex];
                arr[nindex] = nval;
                index = nindex;
            }
        }
        return arr;
    }
}*/
