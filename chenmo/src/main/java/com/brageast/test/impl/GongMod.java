package com.brageast.test.impl;

public class GongMod {
    public static void main(String[] args) {
        Color color = new ColorImpl();
        color.show();
    }
}
interface Color {
    void show();
}
class ColorImpl implements Color {

    @Override
    public void show() {
        System.out.println("绯色");
    }
}