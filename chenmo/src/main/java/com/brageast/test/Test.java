package com.brageast.test;


import java.util.ArrayList;
import java.util.List;

public class Test {

    public static void main(String[] args) {

    }
    static class TestIt
    {
        public static void main ( String[] args )
        {
            int[] myArray = {1, 2, 3, 4, 5};
            ChangeIt.doIt( myArray );
            for(int j=0; j<myArray.length; j++)
                System.out.print( myArray[j] + " " );
        }
    }
    static class ChangeIt
    {
        static void doIt( int[] z )
        {
            z = null ;
        }
    }
}