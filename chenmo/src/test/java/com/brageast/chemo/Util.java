package com.brageast.chemo;

import lombok.Data;

@Data
public class Util<T> {



    public static void main(String[] args) {
        final Util<String> utl = Util.getT("String");
        System.out.println(utl.getT());
    }

    private T t;

    private Util(T t) {
        this.t = t;
    }

    public static <T> Util<T> getT(T t) {
        return new Util<>(t);
    }
}
