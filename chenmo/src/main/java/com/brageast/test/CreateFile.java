package com.brageast.test;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;

public class CreateFile {

    public static void main(String[] args) {
        File file = new File("D:/java/c.txt");
        try {
            if(!file.exists()) {
                file.createNewFile();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        System.out.println(
                "文件名 : " + file.getName() + "\n"
                + "文件大小 : " + (file.length() / 1024d)  + "KB \n"
                + "文件修改时间 : " + simpleDateFormat.format(file.lastModified())
        );
    }
}
