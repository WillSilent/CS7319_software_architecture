package com.heybadminton;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication // Same as @SpringBootConfiguration @EnableAutoConfiguration @ComponentScan
//@EnableOpenApi
public class App {
  public static void main(String[] args) {
    SpringApplication.run(App.class, args);
  }

}
