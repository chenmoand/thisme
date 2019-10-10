package com.brageast.test.socket;

import java.io.IOException;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class RunServerSocket {
    public static void main(String[] args) {
        try (final ServerSocket serverSocket = new ServerSocket(2048);
             final Socket accept = serverSocket.accept()) {
            serverSocket.setReuseAddress(true);

            final InputStream inputStream = accept.getInputStream();
            final StringBuilder stringBuilder = new StringBuilder();
            byte[] bytes = new byte[1024];
            while (inputStream.read(bytes) != -1) {
                stringBuilder.append(new String(bytes));
            }
            System.out.println(stringBuilder);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
