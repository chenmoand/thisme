package com.brageast.chemo;

import javassist.ClassPool;
import javassist.CtClass;
import javassist.CtField;
import javassist.CtMethod;

import java.lang.reflect.Method;


public class C {

    public static void main(String[] args) {
        ClassPool classPool = ClassPool.getDefault();
        try {
            final CtClass ctClass = classPool.getCtClass("com.brageast.chemo.Player");
//            ctClass.toClass()
            final CtMethod getName = ctClass.getDeclaredMethod("getName");
            final CtField name = CtField.make("private String name;", ctClass);
            CtMethod setName = CtMethod.make("public String setName(String name){return null;}", ctClass);
            ctClass.addField(name);
            setName.setBody("return this.name = $1;");
            ctClass.addMethod(setName);
            getName.setBody("return this.name;");
            ctClass.writeFile("d:/java/test");
            final Class<?> aClass = ctClass.toClass();
            final Method getName1 = aClass.getMethod("getName");
            final Method setName1 = aClass.getDeclaredMethod("setName", String.class);
            final Object obj = aClass.newInstance();
            Player player = new Player();
            player.setName("java");
            setName1.invoke(player,"珍妮");
            System.out.println(getName1.invoke(player));
            System.out.println(player.getClass());


        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static int findValue(int[] arr ,int key){
        int start = 0;
        int end = arr.length -1;

        while (start <= end){
            System.out.println("当前区间为: [" + start + "," + end + "]");
            int middle = (start + end) / 2;
            if(key < arr[middle] ){
                end = middle - 1;
            } else if( key > arr[middle] ){
                start = middle + 1;
            } else{
                return middle;
            }
        }
        return -1;
    }
}
