package com.heybadminton.utils;

import com.heybadminton.pojo.UserVO;

public class UserThreadLocal {
    private UserThreadLocal() {
    }

    /**
     * 线程变量隔离
     */
    private static final ThreadLocal<UserVO> LOCAL = new ThreadLocal<>();

    public static void put(UserVO user) {
        LOCAL.set(user);
    }

    public static UserVO get() {
        return LOCAL.get();
    }

    public static void remove() {
        LOCAL.remove();
    }
}
