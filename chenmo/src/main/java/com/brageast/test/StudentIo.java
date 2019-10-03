package com.brageast.test;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Scanner;

public class StudentIo {
    private final static String FILE_URL = "D:\\java\\Player_"; // 信息存储地址
    private static Scanner scanner = new Scanner(System.in);
    public static void main(String[] args)  {
        writerPlayer(new Player(1,"沉默",20,"男"));
        writerPlayer(new Player(3,"哈哈",20,"女"));
        System.out.println("======[学生管理系统IO版]======");
        sayInfo();
        loop:while (true) {
            switch (scanner.nextInt()) {
                case 1: // 查看所有人的信息
                    getAllPlayer().forEach(System.out::println);
                    sayInfo();
                    break;
                case 2:
                    modifyPlayer();
                    sayInfo();
                    break;
                case 3:
                    writerPlayer(Objects.requireNonNull(addPlayer())); // 添加一个玩家
                    sayInfo();
                    break;
                case 4:
                    dropPlayer();
                    sayInfo();
                    break;
                case 5:
                    scanner.close();
                    break loop;
                default:
                    sayInfo();
            }
        }

    }

    private static void dropPlayer() { //删除一个玩家
//        List<Player> players = new ArrayList<>();
        File[] listFiles = new File("D:\\java").listFiles();
        System.out.println("> 请输入要删除的玩家id");
        final int nid = scanner.nextInt();
        for(File file : listFiles) {
            String name = file.getName();
            if(name.endsWith(".gay")) {
                final int id = Integer.valueOf(name.replace(".gay","").replace("Player_", ""));
                if(nid == id) {
                    System.out.println(file.getName());
                    file.delete();
                    break;
                }
            }
        }

    }

    private static void modifyPlayer() { //修改一个玩家
        Player player = addPlayer();
        try {
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(new FileOutputStream(FILE_URL + player.getId() + ".gay"));
            objectOutputStream.writeObject(player);
//            objectOutputStream.flush();
            System.out.println("id: " + player.getId()  + " 用户信息修改成功");
            objectOutputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static Player addPlayer() { //添加一个用户

        System.out.println("> 请输入ID");
        final int id = scanner.nextInt();
        if(id < 0) try {
            throw new InputUserInfoException("学号不合法");
        } catch (InputUserInfoException e) {
            e.printStackTrace();
            return null;
        }
        System.out.println("> 请输入名字");
        final String name =  scanner.next();
        System.out.println("> 请输入年龄");
        final int age = scanner.nextInt();
        if(age < 0 || age > 100) try {
            throw new InputUserInfoException("年龄不合法");
        } catch (InputUserInfoException e) {
            e.printStackTrace();
            return null;
        }
        System.out.println("> 请输入性别");
        final String sex =  scanner.next();
        return new Player(id, name, age , sex);
    }

    public static List<Player> getAllPlayer() {
        List<Player> players = new ArrayList<>();
        File[] listFiles = new File("D:\\java").listFiles();
        for(File file : listFiles) {
            String name = file.getName();
            if(name.endsWith(".gay")) {
                final int id = Integer.valueOf(name.replace(".gay","").replace("Player_", ""));
                final Player p = readPlayer(id);
                if(p != null ) players.add(p);
            }
        }
        return players;
    }
    public static void sayInfo() {
        System.out.println(
                "1.查看所有信息\n"
                + "2.修改莫人信息\n"
                + "3.增加一个信息\n"
                + "4.删除一个信息\n"
                + "5.退出信息系统"
        );
    }
    public static void writerPlayer(Player player) { // 写入一个玩家
        if(readPlayer(player.getId()) != null) {
            //试图读取一下文件 如果为null 那马说明这个玩家还没有创建
            System.out.println("id: " + player.getId()  + " 用户已经存在");
            return;
        }
        try {
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(new FileOutputStream(FILE_URL + player.getId() + ".gay"));
            objectOutputStream.writeObject(player);
            System.out.println("id: " + player.getId()  + " 用户信息写入成功");
            objectOutputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public static Player readPlayer(int id) { //读取一个玩家
        try {
            ObjectInputStream objectInputStream = new ObjectInputStream(new FileInputStream(FILE_URL + id + ".gay"));
            final Player player = (Player) objectInputStream.readObject();
            objectInputStream.close();
            return player;
        } catch (IOException | ClassNotFoundException e) {
            /*e.printStackTrace();*/
        }
        return null;
    }
}
class Player implements Serializable {
    private int id;
    private String name;
    private int age;
    private String sex;

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

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }


    public Player(int id, String name, int age, String sex) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    @Override
    public String toString() {
        return "用户信息为{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", sex='" + sex + '\'' +
                '}';
    }
}
