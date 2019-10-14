package com.brageast.test.reflection;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

public class Demo2 {

    public static void main(String[] args) {
        try {
            Class<?> aClass = Class.forName("com.brageast.test.entity.Cat");
            final Constructor<?> declaredConstructor = aClass.getDeclaredConstructor(String.class, String.class, int.class);
            declaredConstructor.setAccessible(true);
            Object obj = declaredConstructor.newInstance("java", "red", 3);
            System.out.println(obj);
            final Method setColor = aClass.getMethod("setColor", String.class);
            setColor.invoke(obj, "php");
            System.out.println(obj);
            final Field color = aClass.getDeclaredField("color");
            color.setAccessible(true);
            color.set(obj, "绿色");
            System.out.println(obj);
            final Field[] declaredFields = aClass.getDeclaredFields();
            for(Field field : declaredFields) {
                field.setAccessible(true);
                final Val annotation = field.getAnnotation(Val.class);
                if(annotation == null) {
                    continue;
                }
                final String value = annotation.value();
                field.set(obj, value);
            }
            System.out.println(obj);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
