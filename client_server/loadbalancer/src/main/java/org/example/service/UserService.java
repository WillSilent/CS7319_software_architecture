package org.example.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class UserService {
    private final RestTemplate restTemplate;

    public UserService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String callProvider() {
        String url = "http://service-provider/login/....."; // 使用服务名称调用
        return restTemplate.getForObject(url, String.class);
    }

    public ResponseResult findUserInfoByToken(String token){
        return null;
    }

    public String getTokenByUsername(String username, String password, int isRemembered) {
        return "";
    }

    public User findUserExist(String username){
        return null;
    }

    public String generateToken(User user, int isRemembered) {
        return null;
    }

    public int register(UserFormData userFormData) {
        return 0;
    }

}
