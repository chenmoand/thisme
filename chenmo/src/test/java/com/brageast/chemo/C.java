package com.brageast.chemo;

import javassist.ClassPool;
import javassist.CtClass;
import javassist.CtField;
import javassist.CtMethod;


public class C {

    public static void main(String[] args) {
        Player player1 = new Player();
        ClassPool classPool = ClassPool.getDefault();

        try {
            final CtClass ctClass = classPool.getCtClass("com.brageast.chemo.Player");
//            ctClass.stopPruning(true);
//            ctClass.toClass()
            final CtMethod getName = ctClass.getDeclaredMethod("getName");
            final CtField name = CtField.make("private String name;", ctClass);
            CtMethod setName = ctClass.getDeclaredMethod("setName");
            ctClass.addField(name);
            setName.setBody("this.name = $1;");
//            ctClass.addMethod(setName);
            getName.setBody("return this.name;");
//            ctClass.detach();
//            ctClass.defrost();
//            ctClass.writeFile("d:/java/test");
            ctClass.toClass();
//            ctClass.defrost();
//            final Method getName1 = aClass.getMethod("getName");
//            final Method setName1 = aClass.getDeclaredMethod("setName", String.class);
//            final Object obj = aClass.newInstance();
            Player player = new Player();
//            setName1.invoke(player,"珍妮");
            player.setName("java");
//            System.out.println(getName1.invoke(player));
            System.out.println(player.getClass());
            System.out.println(player.getName());


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
