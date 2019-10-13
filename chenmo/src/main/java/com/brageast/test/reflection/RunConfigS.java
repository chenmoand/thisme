package com.brageast.test.reflection;

import java.util.Properties;

public class RunConfigS {
    public static void main(String[] args) {
        Properties properties = new Properties();
        try {
            properties.load(
                    RunConfigS.class.getClassLoader().
                            getResourceAsStream("config.properties")
                    );
            final String classname = properties.getProperty("classname");
            Class<?> aClass = Class.forName(classname);
            Object object = aClass.newInstance();
            final String[] methods = properties.getProperty("methods").split(",");
            final String[] values = properties.getProperty("values").split(",");
            for(int i = 0; i < methods.length; i++) {
                aClass.getDeclaredMethod(methods[i], String.class).invoke(object, values[i]);
            }
            System.out.println(object);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
