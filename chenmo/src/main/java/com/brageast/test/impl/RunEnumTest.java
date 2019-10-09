package com.brageast.test.impl;

/**
 * @author chenmo
 */
public class RunEnumTest {
    public static void main(String[] args) {
        System.out.println(Payment.ALIPAY);
        System.out.println(OrderStatus.RETURN);

    }
}
enum Payment {
    /**
     * 现金
     */
    CASH {
        @Override
        public void buy() {

        }
    },
    /**
     * 微信
     */
    WECHATPAY {
        @Override
        public void buy() {

        }
    },
    /**
     * 支付宝
     */
    ALIPAY {
        @Override
        public void buy() {

        }
    },
    /**
     * 银行卡
     */
    BANKCARD {
        @Override
        public void buy() {

        }
    };

    public abstract void buy();

}
enum OrderStatus {
    /**
     * 未支付
     */
    NONPAYMENT,
    /**
     * 已付款
     */
    PAID,
    /**
     * 以配货
     */
    FULFILLED,
    /**
     * 已发货
     */
    DELIVERED,
    /**
     * 退货
     */
    RETURN,
    /**
     * 已确认
     */
    CHECKED;
}