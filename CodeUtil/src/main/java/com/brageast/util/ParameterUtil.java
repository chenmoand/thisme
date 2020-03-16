package com.brageast.util;

public final class ParameterUtil {


    /**
     * 得到参数数组的所有类
     *
     * @param parameters 参数
     * @param basicClass 是否解析成基础类, 例: Byte.class -> byte.class
     * @return
     */
    public static Class<?>[] getParametersClass(Object[] parameters, boolean basicClass) {
        final int length = parameters.length;
        Class<?>[] classes = new Class[length];

        for (int i = 0; i < length; ++i) {
            final Object parameter = parameters[i];
            final Class<?> aClass = parameter instanceof Class ? (Class<?>) parameter : parameter.getClass();
            if (basicClass) {
                for (Class baseClass : ClassUtil.BASE_CLASS) {
                    if (baseClass == aClass) {
                        classes[i] = baseClass;
                        break;
                    }
                }
            }

            if (classes[i] == null) {
                classes[i] = aClass;
            }

        }


        return classes;
    }


}
