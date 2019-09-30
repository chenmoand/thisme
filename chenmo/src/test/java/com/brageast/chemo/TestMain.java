package com.brageast.chemo;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class TestMain {

    public static void main(String[] args) {
        final ExecutorService executorService = Executors.newWorkStealingPool();

    }

}
