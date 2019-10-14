package com.brageast.test.impl;

public class RunMod {
    public static void main(String[] args) {
        Mod mod = new Mod();
        final BadMod badMod = mod.newBadMod();

    }
}
class Mod {
    private BadMod badMod = null;
    public synchronized BadMod newBadMod() {
        if(badMod != null) {
            return badMod;
        }
        return new BadMod();
    }
}
class BadMod {

}
