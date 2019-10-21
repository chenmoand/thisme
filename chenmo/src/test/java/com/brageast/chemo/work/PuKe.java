package com.brageast.chemo.work;

public class PuKe {

    public static void main(String[] args) {
        // 原题声明
        String[] hs = {"黑桃", "红桃", "梅花", "方片"};
        String[] ds = {"A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"};
        prindCard(hs, ds);
    }
    private static void prindCard(String[] hs, String[] ds) {
        // 从hs遍历每一个元素
        for(String h : hs ) {
            //从dss遍历每一个元素
            for (String d : ds) {
                // 打印h 加上 d 再加上 两个空格
                System.out.print(h + d + "  ");
            }
            // 每一次大循环换一次行
            System.out.println();
        }
    }

}
