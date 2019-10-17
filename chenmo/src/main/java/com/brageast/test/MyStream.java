package com.brageast.test;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class MyStream {
    private static final String FILE_URL = "D:\\java\\c.txt";
    public static void main(String[] args)  {
        try {
//            copyfile(); // 复制文件
//            saveStudent(); //保存并且遍历
            saveText(); // 写入文件
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public static void copyfile() throws Exception {

        FileInputStream fileInputStream = new FileInputStream(FILE_URL);
        FileOutputStream fileOutputStream = new FileOutputStream("D:\\java\\d.txt", true);

        /*// 第一种方法
        int i;
        while ((i =fileInputStream.read()) != -1){
            fileOutputStream.write(i);

        }*/

        /*byte[] bytes = new byte[fileInputStream.available()];  // 第二种方法
        fileInputStream.read(bytes);
        fileOutputStream.write(bytes);*/

        byte[] bytes = new byte[1024]; // 第三种方法
        int size;
        while ((size = fileInputStream.read(bytes)) != -1) {
            fileOutputStream.write(bytes, 0 , size);
        }
        fileInputStream.close();
        fileOutputStream.close();
        System.out.println("Copy运行成功");
    }
    public static void saveText() throws Exception {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(FILE_URL));
        bufferedWriter.write("哈哈哈哈哈哈");
        bufferedWriter.newLine(); // 换行
        bufferedWriter.write("呵呵呵呵呵呵");
        bufferedWriter.newLine();
        bufferedWriter.write("啦啦啦啦啦啦");
//        bufferedWriter.flush();
        bufferedWriter.close();
        BufferedReader bufferedReader = new BufferedReader(new FileReader(FILE_URL));
        for(String str = bufferedReader.readLine(); str != null; str = bufferedReader.readLine()) {
            System.out.println(str);
        }
        bufferedReader.close();
    }
    public static void saveStudent() throws Exception {
        ObjectOutputStream objectOutputStream = new ObjectOutputStream(new FileOutputStream(FILE_URL));
        List<Student> students = new ArrayList<>();
        students.add(new Student(1,"小红", 13));
        students.add(new Student(2,"小黑", 14));
        students.add(new Student(3,"小紫", 16));
        students.add(new Student(4,"小蓝", 18));
        objectOutputStream.writeObject(students);
        objectOutputStream.close();
        ObjectInputStream objectInputStream = new ObjectInputStream(new FileInputStream(FILE_URL));
        List<Student> stus = (List<Student>) objectInputStream.readObject();
        stus.forEach(System.out::println);
        objectInputStream.close();

    }
    public static class Student implements Serializable {
        private int id;
        private String name;
        private int age;
        public Student(){}
        public Student(int id, String name, int age) {
            this.id = id;
            this.name = name;
            this.age = age;
        }

        @Override
        public String toString() {
            return "Student{" +
                    "id=" + id +
                    ", name='" + name + '\'' +
                    ", age=" + age +
                    '}';
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
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
    }

}

