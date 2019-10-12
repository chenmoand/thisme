package com.brageast.test;

public class InputUserInfoException extends Exception {
    public InputUserInfoException(){
        super("用户信息输入错误");
    }
    public InputUserInfoException(String message) {
        super(message);
    }
}
