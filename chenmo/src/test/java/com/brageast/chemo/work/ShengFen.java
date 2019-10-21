package com.brageast.chemo.work;

import java.util.HashMap;
import java.util.Map;

public class ShengFen {

    public static void main(String[] args) {
        // 省份
        String[] sf = {"黑龙江省", "浙江省", "江西省", "广东省", "福建省"};
        // 地区
        String[] dq = {"哈尔滨", "杭州", "南昌", "广州", "福建"};

        // 创建Map的个数
        int len = sf.length;
        // 声明一个Map存储数据
        Map<String, String> jh = new HashMap<>();
        // 对 jh 存入数据
        for(int i = 0; i < len; i++ ) {
            jh.put(sf[i], dq[i]);
        }
        //输出运行结果
        System.out.println(jh);
    }

}
