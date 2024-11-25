package com.heybadminton.controller;

import com.heybadminton.entity.User;
import com.heybadminton.pojo.ResponseResult;
import com.heybadminton.pojo.UserFormData;
import com.heybadminton.pojo.UserVO;
import com.heybadminton.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;


    @PostMapping("/login")
    public ResponseResult login(@RequestParam("username") String username, @RequestParam("password")String password, @RequestParam("isRemembered")int isRemembered) {
        //todo：可能还需要判断token是否过期了，没过期直接从redis中获取，过期了再说。


        //1.判断用户名是否存在
        User user = userService.findUserExist(username);
        if(user == null) {
            return ResponseResult.fail(40001, "User don't exist!");
        }

        System.out.println(user);
        //2.判断用户名跟密码是否匹配
        if(!password.equals(user.getPassword())) {
            return ResponseResult.fail(40002, "Password don't match.");
        }

        //3. 根据用户生成token
        // 如果isRemembered == 1, token过期时间为14天；isRemembered == 0的话，token过期时间为30分钟
        String token = userService.generateToken(user, isRemembered);
        System.out.println(token);
        return ResponseResult.success(token);
    }

    @PostMapping("/register")
    public ResponseResult register(@RequestBody UserFormData userFormData) {
        //todo： 1. 先查找用户是否存在了

        int res = userService.register(userFormData);

        if(res > 0) {
            return ResponseResult.success("OK!");
        }

        return ResponseResult.fail(400003, "Unknown Error");
    }

    @GetMapping("/getUserInfo")
    public ResponseResult getUserInfo(HttpServletRequest request) {
        String token = request.getHeader("Authorization");

        //todo：检验一下token是否过期
        return userService.findUserInfoByToken(token);
    }

}
