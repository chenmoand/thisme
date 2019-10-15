package com.brageast.test.impl;


/**
 * 这是个失败类
 */
public class Two {
    public static void main(String[] args) {
        final int[] ints = {1, 2, 3, 4, 5, 6, 7, 8, 9};
//        System.out.println(-3 /2);
        // TODO 莫得感情的二分法
        System.out.println(
                "位于数组的arr[" +
                TwoImpl.find(ints, 2)
                + "]"
        );
    }
   public static class TwoImpl {
        public static int find(int[] arr, int val) {
            return find(arr, val, 0, true);
        }
       private static int find0(int[] arr, int val, int index, boolean flag) {
            // 长度
            int len = arr.length - 1;
            // 中间值
            int cen;
            for(;;) {
//                cen = flag ? len - (len - index) /2 : ;
                cen = 0;
                // 左移
                if(arr[cen] > val) {
                    flag = false;
                } else if(arr[cen] < val) {
                flag = true;
                }
            }
       }
       /**
        *
        * @param arr 有序数组
        * @param val 值
        * @param index 位置
        * @param flag 左移还是右移
        * @return 值所在的位置无返回-1
        */
        private static int find(int[] arr, int val, int index, boolean flag) {
            int len = arr.length;
//            int cen = (flag? (len - index) : - (index-len))/ 2 + (!flag ? -(index - len) : len - index );
            int cen = flag ? index + (len - index) / 2 : index - (index - len ) / 2;
//            System.out.println("len " + len);
            System.out.println("cen" +cen);
            if(cen <= 0 && arr[cen] != val) {return -1;}
            System.out.println("arr" + arr[cen]);

//            System.out.println(cen);
            if(arr[cen] == val){
                System.out.println("等于");
                return cen ;
            }
            if(arr[cen] > val) {
                System.out.println("大于");
                return find(arr, val, cen, false);
            }
            System.out.println("小于");
            return find(arr, val, cen, true);
        }
   }
}
