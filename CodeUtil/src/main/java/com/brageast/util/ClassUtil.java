package com.brageast.util;

import org.jetbrains.annotations.NotNull;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.util.Objects;

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

    @NotNull
    public static <T> T runConstructor(@NotNull Class<T> cls, Object... parameters) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        Objects.requireNonNull(cls, "cls Can not be null");
        final Class[] parametersClass = ParameterUtil.getParametersClass(parameters);
        final Constructor<T> declaredConstructor = cls.getDeclaredConstructor(parametersClass);
        return runConstructor(declaredConstructor, parameters);
    }
    @NotNull
    public static <T> T runConstructor(@NotNull Constructor<T> constructor, Object... parameters) throws IllegalAccessException, InvocationTargetException, InstantiationException {
        Objects.requireNonNull(constructor, "constructor Can not be null");
        return constructor.newInstance(parameters);
    }

//    public static Class[] get

}
