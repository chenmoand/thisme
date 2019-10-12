package com.brageast.test.reflection;

import java.lang.reflect.Constructor;
import java.lang.reflect.Method;

public class Demo {

    public static void main(String[] args) {
        try {
            Class<?> cls = Class.forName("com.brageast.test.entity.Cat");
            final Constructor<?> declaredConstructor = cls.getDeclaredConstructor();
            final Object obj = declaredConstructor.newInstance();
            System.out.println(obj);
            final Method declaredMethod = cls.getDeclaredMethod("setBrand", String.class);
            declaredMethod.invoke(obj, "javaCat");
            System.out.println(obj);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}

