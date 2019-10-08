package com.brageast.test.thread;

/**
 * 多线程没有接触过,, 这个可能写的不好
 * @author chenmo
 */
public class WindosThread {

    public static void main(String[] args) {
        new Thread(new IThread("A")).start();
        new Thread(new IThread("B")).start();
        new Thread(new IThread("C")).start();

    }
}
class IThread implements Runnable {
    private String name;
    private static Boolean b = true;
    public IThread(String name) {
        this.name = name;
    }
    private static Integer i = 100;
    @Override
    public void run() {
        synchronized (this) {
            while (i > 0) {
                i--;
                System.out.println(i);
                if(i == 0 && b) {
                    b = false;
                    System.out.println(name + "ok");
                }
            }
        }
    }

}