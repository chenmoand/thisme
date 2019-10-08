package com.brageast.test.entity;

public class TestSingleton {

    public Singleton newSingleton() {
        return new Singleton();
    }

    private class Singleton{

    }
}
