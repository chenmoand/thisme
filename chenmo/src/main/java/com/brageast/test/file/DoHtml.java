package com.brageast.test.file;

import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.io.FileOutputStream;
import java.io.IOException;

public class DoHtml {
    private static int i = 0;

    public static void main(String[] args)  {
        try {
            init();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("你程序扑街了");
        }


    }

    public static void getHtmlText() throws IOException {


    }
    public static void init() throws IOException, InterruptedException {
        final HSSFWorkbook hssfWorkbook = new HSSFWorkbook();
        final HSSFSheet sheet = hssfWorkbook.createSheet("爬虫小实验");
        final HSSFRow row = sheet.createRow(0);
        frist(row);
        final HSSFRow row1 = sheet.createRow(1);
        for(int j = 1; j < 144; j++) {
            forval(i, sheet);
            System.out.println("爬取第"+j+"页完成");
//            Thread.sleep(5000);
        }

        try(FileOutputStream fileOutputStream = new FileOutputStream("D:/java/爬虫.xls")) {
            hssfWorkbook.write(fileOutputStream); //写入文件
            System.out.println("爬取成功");
        }

    }
    public static void frist(HSSFRow row) throws IOException {
        final Connection connect = Jsoup.connect("https://search.51job.com/list/010000,000000,0000,00,9,99,java,2,1.html");
        connect.request().header("User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36");
        final Document document = connect.get();

        final Elements info = document.select("div.el.title");
        for(int i = 1; i <= 5; i++) {
            row.createCell(i-1).setCellValue(info.select("span.t"+i).html()); // 获取标题内容
        }

    }
    public static void forval(int index, HSSFSheet sheet) throws IOException, InterruptedException {

        final Connection connect = Jsoup.connect("https://search.51job.com/list/010000,000000,0000,00,9,99,java,2," + index + ".html");
        connect.request().header("User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36");
        final Document document = connect.get();
        final Elements info = document.select("div[class=el]");
//        for (int)info.select(".t2").size());
//        System.out.println(info);
        info.forEach(element -> {
//            System.out.println(element);
//            if(!element.select(".t1 span a").html().replace(" ", "").equals("")){
                final HSSFRow row = sheet.createRow(i++);
                row.createCell(0).setCellValue(element.select(".t1 span a").text());
                row.createCell(1).setCellValue(element.select(".t2 a").text());
                row.createCell(2).setCellValue(element.select(".t3").text());
                row.createCell(3).setCellValue(element.select(".t4").text());
                row.createCell(4).setCellValue(element.select(".t5").text());
//            }


        });

//        System.out.println(info);
    }


    /*public static void saveHtml() throws IOException {
        final Document document = Jsoup.connect("https://search.51job.com/list/010000,000000,0000,00,9,99,java,2,1.html").get();
        FileUtils.write(new File("D:/java/index.html"), document.toString(), "gbk"); // *****gbk网站
        System.out.println("成功将网页保存");
    }
    public static void copyImg() throws IOException { //保存文件
        final URL url = new URL("http://p2.img.cctvpic.com/photoAlbum/templet/common/DEPA1457510958309619/ydw913_yd_0712.jpg");
        final String fileName = "D:/java/" +FilenameUtils.getName(url.toString());
        FileUtils.copyURLToFile(url, new File(fileName));
        System.out.println("成功复制图片");
    }*/
 }
/*@Data
@NoArgsConstructor
@AllArgsConstructor
 class AdvertisingInfo {
     private String positionName; //职位名字
     private String companyName; // 公司名称
     private String address; //地址
     private String money; //薪资
     private String data; //日期


 }*/
