package com.brageast.chemo;

public class Calculator {
    private float value;
    public void add(final float val) {
        setValue(value + val);

    }
    public void reduce(final float val) {
        setValue(value - val);
    }
    public void ride(final float val) {
        setValue(value * val);
    }
    public void dividedBy(final float val) throws DenominatorEqualZeroException {
        if(val == 0) {
            throw new DenominatorEqualZeroException("分母不能等于0");
        }
        setValue(value / val);
    }
    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }
    public static class DenominatorEqualZeroException extends Exception {

        public DenominatorEqualZeroException(String str) {
            super(str);
        }
    }
}
