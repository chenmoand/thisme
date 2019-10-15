package com.brageast.test.impl;

public class ZhuangMod {
    public static void main(String[] args) {

    }
}
interface Car {
    void money();
}
class BaoCar implements Car {

    @Override
    public void money() {
        System.out.print("3000");
    }
}
class BaoMaCar extends BaoCar {
    private Car car;
    public BaoMaCar(Car car) {
        this.car = car;
    }

    @Override
    public void money() {
        car.money();
    }
}