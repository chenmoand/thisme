package com.brageast.test.functioninterface;

public class Test3 {
    public static void main(String[] args) {
        //静态方法
        Hook<String> hook = System.out::println;
        ValHook<String> useHook = UseHook::new;
        hook.use("java and php");
        useHook.use("php and java");
    }
    @FunctionalInterface
    interface Hook<T> {
        void use(T t);
    }
    @FunctionalInterface
    interface ValHook<T> {
        UseHook<T> use(T t);
    }
    static class UseHook<T> {

        public UseHook(T t) {
            System.out.println(t);
        }
    }
}
