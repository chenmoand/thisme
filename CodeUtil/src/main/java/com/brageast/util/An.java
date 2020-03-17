package com.brageast.util;

public final class An<T> {

    Class<? extends T> cls;
    T instance;

    private An(Class<T> cls, T instance) {
        this.cls = cls;
        this.instance = instance;
    }
    public static An<Integer> as(int i) {
        return new An<>(Integer.class, i);
    }
    public static An<Short> as(short s) {
        return new An<>(Short.class, s);
    }
    public static An<Long> as(long l) {
        return new An<>(Long.class, l);
    }
    public static An<Double> as(double l) {
        return new An<>(Double.class, l);
    }
    public static An<Boolean> as(boolean b) {
        return new An<>(Boolean.class, b);
    }
    public static An<Byte> as(byte b) {
        return new An<>(Byte.class, b);
    }
    public static An<Character> as(char c) {
        return new An<>(Character.class, c);
    }

    public static An<Float> as(float f) {
        return new An<>(Float.class, f);
    }

    public static <E> An<E> as(E e) {
        return new An<E>((Class<E>) e.getClass(), e);
    }

}
