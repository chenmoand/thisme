package com.brageast.test.reflection;

import java.lang.reflect.Method;
import java.util.Properties;

public class RunConfigS {
    public static void main(String[] args) {
        Properties properties = new Properties();
        try {
            properties.load(
                    RunConfigS.class.getClassLoader().
                            getResourceAsStream("config.properties")
                    );
            final String classname = (String) properties.get("classname");
            final Class<?> aClass = Class.forName(classname);
            final Object object = aClass.newInstance();
            final Method method = aClass.getDeclaredMethod((String) properties.get("method"), String.class);
            method.invoke(object, (String)properties.get("value"));
            System.out.println(object);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
