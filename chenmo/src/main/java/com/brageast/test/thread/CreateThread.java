package com.brageast.test.thread;

import java.util.concurrent.*;

/**
 * 创建线程的四种方式
 */
public class CreateThread {

    public static void main(String[] args) {
        new IThread().start(); // 第一种
        System.out.println("---------------------------");
        new Thread(new IRunnable()).start(); //第二种
        System.out.println("---------------------------");
        final FutureTask<String> target = new FutureTask<>(new ICallable());
        new Thread(target).start(); // 第三种
        System.out.println("---------------------------");
        try {
            System.out.println(target.get());
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
        System.out.println("---------------------------");
        final ExecutorService executorService = Executors.newFixedThreadPool(3); //第四种方法
        executorService.submit(new IThread());
        executorService.submit(new IRunnable());
        executorService.submit(target);
        executorService.shutdown();



    }

    public static class IThread extends Thread {
        @Override
        public void run() {
            System.out.println("创建成功Thread");
        }
    }
    public static class IRunnable implements Runnable {


        @Override
        public void run() {
            System.out.println("创建成功Runnable");
        }
    }}
    class ICallable implements Callable<String> {

        @Override
        public String call() throws Exception {
            return "创建成功Callable";
        }
    }
