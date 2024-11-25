package org.example.service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;

@Service
public class AuthService {

    private final RestTemplate restTemplate;

    public AuthService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public ResponseResult login(@RequestParam("username") String username, @RequestParam("password")String password, @RequestParam("isRemembered")int isRemembered) {
        return null;
    }

    public ResponseResult register(@RequestBody UserFormData userFormData) {
        return null;
    }

    public ResponseResult getUserInfo(HttpServletRequest request) {
        return null;
    }

}
