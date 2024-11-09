package com.heybadminton.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class HelloController {

    @RequestMapping("/hello")
    public String helloWorld() {
        return "hello world";
    }

}
