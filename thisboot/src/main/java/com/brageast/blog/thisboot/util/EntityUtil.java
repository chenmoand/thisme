package com.brageast.blog.thisboot.util;

import com.brageast.blog.thisboot.annotation.CreateTime;
import org.springframework.data.mongodb.core.query.Update;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Date;
import java.util.Objects;

public abstract class EntityUtil {

    public static <T> T createTimeHook(T type) {
        Objects.requireNonNull(type, "type不能为空");
        final Class<?> cls = type.getClass();
        for (Field declaredField : cls.getDeclaredFields()) {
            final CreateTime annotation = declaredField.getAnnotation(CreateTime.class);
            try {
                if (annotation != null ) {
                    declaredField.setAccessible(true);
                    declaredField.set(type, new Date());
                }
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        }
        return type;
    }


    /**
     *
     *
     * @author chenmo
     * @param object 遍历的变量
     * @param values 寻找的方法名字
     * @return 一个Update
     */
    public static Update addUpdate(Object object, String... values) {
        Update update = new Update();
        final Class<?> aClass = object.getClass();
        for(String val : values) {
            String getVal = "get" + val.substring(0,1).toUpperCase() + val.substring(1);
            try {
                final Method declaredField = aClass.getDeclaredMethod(getVal);
                declaredField.setAccessible(true);
                final Object obj = declaredField.invoke(object);
                if(obj != null ) {
                    update.set(val, obj);
                }

            } catch (IllegalAccessException e) {
                e.printStackTrace();
            } catch (NoSuchMethodException e) {
                e.printStackTrace();
            } catch (InvocationTargetException e) {
                e.printStackTrace();
            }

        }

        return update;
    }

}
