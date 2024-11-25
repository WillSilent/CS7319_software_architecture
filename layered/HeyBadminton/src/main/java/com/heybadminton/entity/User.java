package com.heybadminton.entity;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class User {
    private Long id;
    private String profile;
    private String username;
    private String email;
    private String password;
    private String introduction;
    private Boolean isAdmin;
}
