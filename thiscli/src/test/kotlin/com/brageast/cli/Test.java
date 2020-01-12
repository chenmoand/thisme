package com.brageast.cli;

import com.brageast.cli.util.AjaxUtilKt;
import okhttp3.Request;

import java.io.IOException;

public class Test {
    public static void main(String[] args) throws IOException {
        final Request build = AjaxUtilKt.toRequest("https://www.zhihu.com").build();
        System.out.println(AjaxUtilKt.send(build));
    }
}
