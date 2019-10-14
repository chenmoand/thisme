package com.brageast.test.impl;

public class RuMod {
    public static void main(String[] args) {
        Money money = new RmbMoney();
        System.out.println(money.show());
    }
}
interface Money {
    double show();
    void add(double value);
}
abstract class AbstractRmbMoney implements Money {
    protected double money = 0;
    protected abstract void delete(double value);
}
class RmbMoney extends AbstractRmbMoney {

    @Override
    public double show() {
        return money;
    }

    @Override
    public void add(double value) {
        this.money += value;
    }

    @Override
    protected void delete(double value) {
        this.money -= value;
    }
}