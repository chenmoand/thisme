package com.brageast.chemo;

/**
 * 百度获取的
 */
public class C {

    public static void main(String[] args) {
        final int[] ints = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        System.out.println(
                "位于数组的arr[" +
                        findValue(ints, 9)
                        + "]"
        );
    }

    public static int findValue(int[] arr ,int key){
        int start = 0;
        int end = arr.length -1;

        while (start <= end){
            System.out.println("当前区间为: [" + start + "," + end + "]");
            int middle = (start + end) / 2;
            if(key < arr[middle] ){
                end = middle - 1;
            } else if( key > arr[middle] ){
                start = middle + 1;
            } else{
                return middle;
            }
        }
        return -1;
    }
}
