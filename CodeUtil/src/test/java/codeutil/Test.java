package codeutil;

import com.brageast.util.ClassUtil;

public class Test {

    @org.junit.Test
    public void onTest() throws Exception {
        final Test test = ClassUtil.runConstructor(Test.class);
        System.out.println(test);
    }
}
