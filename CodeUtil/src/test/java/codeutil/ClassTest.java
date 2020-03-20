package codeutil;

import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;

public class ClassTest {

    @Test
    public void onClass() throws Exception {
        // 已知Demo 构造器是私有的
        // 不能通过正常方式实例化
        // 但是我可以直接获得他的类
        final Class<Demo> demoClass = Demo.class;
        // 对应的是构造器参数的class
        // 注意int.class 和 Integer.class 不一样
        // 写错了可能匹配的构造器也不一样
        final Constructor<Demo> constructor = demoClass.getDeclaredConstructor(String.class, int.class, char.class);
        // 因为构造器是私有的, 所有传入true 无视私有化
        constructor.setAccessible(true);
        // 根据上面的参数填入对应的参数 反射实例化
        // 成功获得实例
        final Demo demo = constructor.newInstance("张三", 18, '男');
        System.out.println(demo);
        // 因为属性是私有的
        final Field field = demoClass.getDeclaredField("sex");
        // 跟构造器的差不多, 无视私有
        field.setAccessible(true);
        //传入刚才反射出来的实例, 并且修改成女
        field.set(demo, '女');
        System.out.println(demo);



    }
}

class Demo {
    private String name;
    private int age;
    private char sex;

    private Demo(String name, int age, char sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public char getSex() {
        return sex;
    }

    public void setSex(char sex) {
        this.sex = sex;
    }

    @Override
    public String toString() {
        return "Demo{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", sex=" + sex +
                '}';
    }
}
