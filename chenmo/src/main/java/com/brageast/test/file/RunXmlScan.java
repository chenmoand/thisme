package com.brageast.test.file;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import java.net.URL;

public class RunXmlScan {

    public static void main(String[] args) {

//        System.out.println(file.getAbsolutePath());
        SAXReader saxReader = new SAXReader();
        try {
            final Document read = saxReader.read(getPath("./myxsd.xml"));
            inif(read.getRootElement());

        } catch (DocumentException e) {
            e.printStackTrace();
        }
    }
    public static void inif(Element element) {
        element.elementIterator().forEachRemaining(ele -> {
            System.out.println("字段名 : " + ele.getName() + "\t" + "字段值 : " + ele.getText());
            inif(ele);
        });
    }
    public static URL getPath(final String name) {
        return ClassLoader.getSystemClassLoader().getResource(name);
    }
}
