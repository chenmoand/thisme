package com.brageast.cli;

import java.io.IOException;
import java.io.InputStream;

public class Test {
    public static void main(String[] args) throws IOException {
        final InputStream systemResourceAsStream =ClassLoader.getSystemResourceAsStream("application.yml");
        byte[] bts = new byte[1024];
        StringBuilder stringBuilder = new StringBuilder();
        while (systemResourceAsStream.read(bts) != -1) {
            stringBuilder.append(bts);
        }
        System.out.println(stringBuilder.toString());
    }
    
}
