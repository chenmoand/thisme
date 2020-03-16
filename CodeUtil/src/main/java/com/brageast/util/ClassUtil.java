package com.brageast.util;

public final class ClassUtil {

    public static Class[] BASE_CLASS;

    static {
        BASE_CLASS = new Class[]{
                Boolean.TYPE, Short.TYPE, Integer.TYPE,
                Byte.TYPE, Long.TYPE, Double.TYPE,
                Float.TYPE, Character.TYPE
        };
    }

    private ClassUtil() {
    }

    public static Object runConstructor(Class<?> cls, Object... parameters) {

        return null;
    }

}
