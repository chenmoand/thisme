package com.brageast.test.socket;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;

public class RunServerSocket {
    public static void main(String[] args) {
        try (final ServerSocket serverSocket = new ServerSocket(2048);
             final Socket accept = serverSocket.accept();
             final InputStream inputStream = accept.getInputStream();
             BufferedReader bufferedReader = new BufferedReader(
                     new InputStreamReader(inputStream)
             )) {
            serverSocket.setReuseAddress(true);

            String str;
            while ((str = bufferedReader.readLine()) != null) {
                System.out.println(str);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
