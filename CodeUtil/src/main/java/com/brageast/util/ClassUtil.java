package com.brageast.util;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

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

    public static <T> T runConstructor(Class<T> cls, Object... parameters) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        final Class[] parametersClass = ParameterUtil.getParametersClass(parameters);
        final Constructor<T> declaredConstructor = cls.getDeclaredConstructor(parametersClass);
        return runConstructor(declaredConstructor, parameters);
    }
    public static <T> T runConstructor(Constructor<T> constructor, Object... parameters) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        return constructor.newInstance(parameters);
    }

//    public static Class[] get

}
