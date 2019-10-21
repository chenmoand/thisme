package com.brageast.test.entity;

import com.brageast.test.reflection.Val;
import lombok.Builder;

@Builder
public class Cat {
    /**
     * 品牌
     */
    @Val("五菱宏光")
    private String brand;
    /**
     * 颜色
     */
    @Val("紫色")
    private String color;
    /**
     * 轮胎数量
     */
    private int quantity;

    public Cat() {
    }

    public Cat(String brand, String color, int quantity) {
        this.brand = brand;
        this.color = color;
        this.quantity = quantity;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "Cat{" +
                "brand='" + brand + '\'' +
                ", color='" + color + '\'' +
                ", quantity=" + quantity +
                '}';
    }
}
