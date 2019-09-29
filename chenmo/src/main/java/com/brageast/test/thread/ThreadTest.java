package com.brageast.test.thread;

public class ThreadTest {
    public static void main(String[] args) {
        thread(new EclipseThread());
        thread(new IdeaThread());
    }
    public static void thread(Runnable runnable) {
        new Thread(runnable).start();
    }


}

/**
 * 兔子
 */
class IdeaThread implements Runnable {
    @Override
    public void run() {
        try {
            for(int i = 1; i <= 30; i ++) {
                System.out.println("兔子走了" + i + "米" );
                if(i % 10 == 0 ) Thread.sleep(11000); // 1秒跑10秒休息
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

}

/**
 * 乌龟
 */
class EclipseThread implements Runnable {

    @Override
    public void run() {
        for(int i = 1; i <= 30; i ++) {
            System.out.println("乌龟走了" + i + "米" );

            if(i % 20 == 0 ) {
                try {
                    Thread.sleep(2000); // 1秒跑1秒休息
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

