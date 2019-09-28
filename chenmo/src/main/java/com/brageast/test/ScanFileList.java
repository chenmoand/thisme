package com.brageast.test;

import java.io.File;

public class ScanFileList {

    public static void main(String[] args) {
        onFile(new File("D:/java"));
    }
    public static void onFile(File file) {
        if(file.isDirectory()) {
            System.out.println("[" + file.getName() +"]");
            for(File f : file.listFiles()) {
                if(!f.isDirectory()) { // 如果不是个文件夹
                    System.out.println(f.getName()); // 输出名字
                }

                onFile(f); // 再次循环下去
            }
        }
    }
}