package com.brageast.test.functioninterface;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

public class TestStream {

    public static void main(String[] args) {
        List<String> strs1 = new ArrayList<String>(){{
            add("java"); add("php"); add("node"); add("mysql");
        }};
        List<String> strs2 = new ArrayList<String>() {{
            add("redux"); add("router"); add("Springboot"); add("react");
        }};
        // 合并
        strs1.addAll(strs2);
        strs1.forEach(System.out::println);

        List<Person> people = new ArrayList<>();
        people.add(new Person("小红", 3));
        people.add(new Person("小绿", 5));
        people.add(new Person("小名", 23));
        people.add(new Person("凑数的", 23));
        people.stream().
                filter(person -> person.getName().contains("小")).
                forEach(System.out::print);

    }
    @Data
    @ToString
    @AllArgsConstructor
    static class Person {
        private String name;
        private int age;
    }
}
