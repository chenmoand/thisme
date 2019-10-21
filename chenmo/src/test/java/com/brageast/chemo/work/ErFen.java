package com.brageast.chemo.work;

/**
 * 二分查找
 */
public class ErFen {
    public static void main(String[] args) {
        int[] arr = {10, 21, 32, 40, 53, 61, 78, 94};
        final int index = findIndex(arr, 78);
        System.out.println(index);
    }

    /**
     *
     * @param arr 一个有序的数组
     * @param key 一个要查询的值
     */
    public static int findIndex(int[] arr, int key) {
        // 起点
        int start = 0;
        // 终点 长度减一防止空指针异常
        int end = arr.length - 1;
        //不断的判断 起点和终点是否重合
        while (start <= end) {
            // 取中间值
            int cen = (start + end) / 2;
            // 判断key 是否大于 数值中间值
            if(key > arr[cen]) {
                //大于 重新定义起点
                start = cen + 1;
            // 判断是否小于
            } else  if (key < arr[cen]) {
                // 重新定义重点
                end = cen - 1;
            } else {
                // 得到的位置
                return cen;
            }
        }
        // 如果没有合适的就返回-1
        return  -1;
    }
}
