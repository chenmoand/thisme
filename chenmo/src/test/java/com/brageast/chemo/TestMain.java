package com.brageast.chemo;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class TestMain {
    public static void main(String[] args) {
        final ExecutorService executorService = Executors.newWorkStealingPool();
    }


    @BeforeAll
    public static void doBefore() {
        System.out.println(">-----  程序Start  -----<");
    }

    @Test
    public void doTest(){
        final Calculator calculator = new Calculator();
        Assertions.assertEquals(0, calculator.getValue());
        calculator.add(12.33f);
        System.out.println(calculator.getValue());
    }
    @AfterAll
    public static void doAfter() {
        System.out.println(">-----  程序END  -----<");
    }
}
