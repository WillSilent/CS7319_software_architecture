package com.heybadminton.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


/**
 * 首页控制器
 */
@Controller
public class IndexController {
    
/**
 * equip
 */
@GetMapping({"/game", "/equip", "/courtmate", "/locations", "/post/{path:[^\\.]*}", "/profile", "/admin.", "/login", "/register"})
public String getMethodName() {
    return "forward:/index.html";
}
}
