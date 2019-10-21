package com.brageast.chemo.work;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;

public class SThreads {

    public static void main(String[] args) {
        // 创建一个3个的线程池
        final ScheduledExecutorService scheduledExecutorService = Executors.newScheduledThreadPool(3);
        // 循环创建 线程并加入到线程池
        for(int i = 1; i < 4 ; i ++) {
            Thread thread = new Thread(new MyselfThread());
            //设置名字
            thread.setName("线程" + i);
            scheduledExecutorService.submit(thread);
        }
        // 结束
        scheduledExecutorService.shutdown();
    }
    // 声明一个静态内部类
    public static class MyselfThread implements Runnable {
        // 声明一个票为100的静态int
        private transient static int PIAO = 100;
        @Override
        public void run() {
            // 防止
             synchronized (this) {
                 //无限循环
                while (true) {
                    if (PIAO > 0) {
                        // 每次减去一个
                        System.out.println(
                                // 获取线程名字
                                Thread.currentThread().getName() +
                                // 在输出数量的同时还会减去,
                                ":\t 当前票数量还剩下" + --PIAO
                        );
                    } else {
                        System.out.println(
                                Thread.currentThread().getName() +
                                ":\t 当前票售空"
                        );
                        break;
                    }
                }
            }
        }
    }
}
