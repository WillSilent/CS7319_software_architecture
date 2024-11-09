package com.heybadminton;

import org.junit.Test;

import java.util.Iterator;
import java.util.Map;

import com.heybadminton.utils.JWTUtils;

public class JwtTest {

    @Test
    public void test() {
        Long id = 1L;
        String tk = JWTUtils.createToekn(id, "will99");
        System.out.println(tk);
        String token = "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODE3MDg1MDAsInVzZXJJZCI6MiwiaWF0IjoxNjgxNzA2NzAwLCJ1c2VybmFtZSI6InVzZXIxIn0.4RY_S59uqgyLzQm5gL_PfXzLzns87bUdLMct5xATPnk";
        Map<String, Object> map = JWTUtils.checkToken(token);
        Iterator iter = map.entrySet().iterator();
        while (iter.hasNext()) {
            Map.Entry entry = (Map.Entry) iter.next();
            Object key = entry.getKey();
            Object value = entry.getValue();
            System.out.print(key);
            System.out.print("----");
            System.out.println(value);
        }

    }



}
