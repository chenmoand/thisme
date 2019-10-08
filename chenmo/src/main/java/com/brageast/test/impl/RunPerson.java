package com.brageast.test.impl;

import com.brageast.test.entity.Person;

public class RunPerson {
    public static void main(String[] args) {
        Person person = new Person();
        System.out.println(person);
        person.setAge(12);
        person.setName("chenmo");
        System.out.println(person);
    }

}
