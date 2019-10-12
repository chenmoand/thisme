package com.brageast.test.socket;

import java.io.*;
import java.net.Socket;

public class RunSocket {

    public static void main(String[] args) {
        try (final Socket socket = new Socket("localhost", 2048);
             final OutputStream outputStream = socket.getOutputStream();
             InputStreamReader inputStreamReader = new InputStreamReader(
                     new FileInputStream(
                             new File("d:/java/index.html")),
                     "gbk"
             );
             BufferedReader bufferedReader = new BufferedReader(inputStreamReader)
        ) {
            String str;
            while ((str = bufferedReader.readLine()) != null) {
                outputStream.write((str+"\n").getBytes());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
