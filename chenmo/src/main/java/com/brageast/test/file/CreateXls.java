package com.brageast.test.file;

import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

import java.io.FileOutputStream;
import java.io.IOException;

public class CreateXls {
    public static void main(String[] args) {
        HSSFWorkbook hssfWorkbook = new HSSFWorkbook();
        final HSSFSheet hssfsheet = hssfWorkbook.createSheet("测试SHEET");// 创建一个表名
        hssfsheet.createRow(0).createCell(0).setCellValue("第一次月考成绩");
        final HSSFRow row = hssfsheet.createRow(1);
        row.createCell(0).setCellValue("学号");
        row.createCell(1).setCellValue("姓名");
        row.createCell(2).setCellValue("成绩");
        for(int i = 2; i < 12; i++) {
            final HSSFRow row1 = hssfsheet.createRow(i);
            final int id = i - 1;
            row1.createCell(0).setCellValue(id);
            row1.createCell(1).setCellValue("a" + id);
            row1.createCell(2).setCellValue(90);
        }
        try (FileOutputStream fileOutputStream = new FileOutputStream("D:/java/first.xls")) { // 语法糖,可省去关闭
            hssfWorkbook.write(fileOutputStream); // 将内容写入本地
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
