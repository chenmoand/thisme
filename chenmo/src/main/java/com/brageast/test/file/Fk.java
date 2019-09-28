package com.brageast.test.file;

import org.apache.poi.xwpf.usermodel.ParagraphAlignment;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.FileOutputStream;
import java.io.IOException;

public class Fk {
    private static final XWPFDocument xwpfDocument = new XWPFDocument();

    public static void main(String[] args) throws Exception {
        F("https://m.qirexiaoshuo.com/book/42057/11518711/");
        FileOutputStream fileOutputStream = new FileOutputStream("D:/java/13.doc");
        xwpfDocument.write(fileOutputStream);
        fileOutputStream.close();
        xwpfDocument.close();
    }

    private static void F(String str) throws IOException, InterruptedException {
        System.out.println("正在爬取 \t" + str);

        final Connection connect = Jsoup.connect(str);
        final Document document = connect.get();
        document.select(".chapter-recharge.read_lock_lay").remove();
        final XWPFParagraph paragraph = xwpfDocument.createParagraph();
        paragraph.setAlignment(ParagraphAlignment.CENTER);
        final XWPFRun xwpfRun = paragraph.createRun();
        xwpfRun.setText(document.select("div.h_header.d_header.gray_bg h2").text());
        final XWPFParagraph xParagraph = xwpfDocument.createParagraph();
        final XWPFRun runs = xParagraph.createRun();
        runs.setBold(true);
        runs.setText(document.select("h1[class=title]").text());
        document.select(".entry#read_conent_box p").forEach( element -> {
            final XWPFParagraph xwpfParagraph = xwpfDocument.createParagraph();
//            System.out.println(element.text());
            xwpfParagraph.createRun().setText("  "+ element.text());
        });
        final Elements select = document.select(".page ul li a[class=btn]");
        for(Element element : select) {
//            System.out.println(element);
            if(element.text().equals("下一章")) {
                String url = element.attr("abs:href");
//                System.out.println(url);
                if(url !=null ) F(url);
//                Thread.sleep(300);
            }
        }



    }
//    public static String N(String str) {
//        return str.replace("<p>", "").replace("</p>","");
//    }
}
