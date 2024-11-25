package com.heybadminton.utils;

import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class JWTUtils {
    private static final String jwtToken = "123456Root@HeyBadminton!@#$$";

    public static String createToekn(Long userId, String username) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", userId);
        claims.put("username", username);
        JwtBuilder jwtBuilder = Jwts.builder()
                .signWith(SignatureAlgorithm.HS256, jwtToken) // 签发算法，密钥为 jwtToken
                .setClaims(claims) // body数据，唯一确认，自行设置
                .setIssuedAt(new Date()) // 设置签发时间
                .setExpiration(new Date(System.currentTimeMillis() + 24 * 60 * 60 * 1000)); // 一天内的有效时间
        String token = jwtBuilder.compact();
        return token;
    }


    // timespan: 通常表示方式如下：24 * 60 * 60 * 1000， hour * minutes * second * 1000
    public static String createToeknWithTimespan(Long userId, String username, long timespan) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", userId);
        claims.put("username", username);
        JwtBuilder jwtBuilder = Jwts.builder()
                .signWith(SignatureAlgorithm.HS256, jwtToken) // 签发算法，密钥为 jwtToken
                .setClaims(claims) // body数据，唯一确认，自行设置
                .setIssuedAt(new Date()) // 设置签发时间
                .setExpiration(new Date(System.currentTimeMillis() + timespan)); // 设定有效时间
        String token = jwtBuilder.compact();
        return token;
    }

    //
    //
    public static boolean validateToeknExpOrNot(String token) {
        try {
            Jwt parse = Jwts.parser().setSigningKey(jwtToken).parse(token);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }


    // TODO
    public static Map<String, Object> checkToken(String token) {
        try {
            Jwt parse = Jwts.parser().setSigningKey(jwtToken).parse(token);
            return (Map<String, Object>) parse.getBody();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }


    public static Long getUserIdByToken(String token) {
        try {
            Jwt parse = Jwts.parser().setSigningKey(jwtToken).parse(token);
            Map<String, Object> body = (Map<String, Object>) parse.getBody();
            return (Long) body.get("userId");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return -1L;
    }

    public static String getUsernameByToken(String token) {
        try {
            Jwt parse = Jwts.parser().setSigningKey(jwtToken).parse(token);
            Map<String, Object> body = (Map<String, Object>) parse.getBody();
            return (String) body.get("username");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }





}
