package com.brageast.test.thread;

import java.util.concurrent.*;

/**
 * 创建线程的四种方式
 */
public class CreateThread {

    public static void main(String[] args) {
        // 第一种
        new IThread().start();
        System.out.println("---------------------------");
        //第二种
        new Thread(new IRunnable()).start();
        System.out.println("---------------------------");
        final FutureTask<String> target = new FutureTask<>(new ICallable());
        // 第三种
        new Thread(target).start();
        System.out.println("---------------------------");
        try {
            System.out.println(target.get());
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
        System.out.println("---------------------------");
        //第四种方法
        final ExecutorService executorService = Executors.newFixedThreadPool(3);
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
