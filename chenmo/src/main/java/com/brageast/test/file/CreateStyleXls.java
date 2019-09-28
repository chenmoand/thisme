package com.brageast.test.file;

import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.util.CellRangeAddress;

import java.io.FileOutputStream;
import java.io.IOException;


public class CreateStyleXls {
    public static void main(String[] args) {
        HSSFWorkbook hssfWorkbook = new HSSFWorkbook();
        final HSSFSheet sheet = hssfWorkbook.createSheet("Java04花名册");
        final HSSFRow row = sheet.createRow(0);
        final HSSFCell cell = row.createCell(0);
        cell.setCellValue("java04花名册");
        final HSSFCellStyle cellStyle = hssfWorkbook.createCellStyle();
        final HSSFFont font = hssfWorkbook.createFont();
        font.setBold(true);
        font.setColor(Font.COLOR_RED);
        font.setFontHeightInPoints((short) 14);
        font.setFontName("宋体");
        cellStyle.setFont(font);
        cellStyle.setAlignment(HorizontalAlignment.CENTER);
        cell.setCellStyle(cellStyle);
        sheet.addMergedRegion(new CellRangeAddress(0,0,0,3));

        final HSSFRow row1 = sheet.createRow(1);
        row1.createCell(0).setCellValue("学号");
        row1.createCell(1).setCellValue("姓名");
        row1.createCell(2).setCellValue("性别");
        row1.createCell(3).setCellValue("年龄");

        final HSSFRow row2 = sheet.createRow(2);
        row2.createCell(0).setCellValue(1001);
        row2.createCell(1).setCellValue("张三丰");
        row2.createCell(2).setCellValue("男");
        row2.createCell(3).setCellValue(100);

        final HSSFRow row3 = sheet.createRow(3);
        row3.createCell(0).setCellValue(1002);
        row3.createCell(1).setCellValue("张翠山");
        row3.createCell(2).setCellValue("男");
        row3.createCell(3).setCellValue(30);

        final HSSFRow row4 = sheet.createRow(4);
        row4.createCell(0).setCellValue(1003);
        row4.createCell(1).setCellValue("殷素素");
        row4.createCell(2).setCellValue("女");
        row4.createCell(3).setCellValue(26);

        try (FileOutputStream fileOutputStream = new FileOutputStream("D:/java/hi.xls")){
            hssfWorkbook.write(fileOutputStream);
            System.out.println("写入成功");
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("写入失败");
        }

    }
}
