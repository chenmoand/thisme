package com.brageast.test.socket;

import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;

public class RunSocket {

    public static void main(String[] args) {
        try (final Socket socket = new Socket("localhost", 2048);
             final OutputStream outputStream = socket.getOutputStream()) {
            String str = "Hello World";
            outputStream.write(str.getBytes());
            outputStream.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
