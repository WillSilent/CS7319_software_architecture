package com.heybadminton;

import com.heybadminton.utils.RedisUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = App.class)
public class RedisTest {

    @Autowired
    private RedisUtils redisUtils;


    @Test
    public void contextLoad() {
        System.out.println(redisUtils.hashKeys("Will"));
    }
}
