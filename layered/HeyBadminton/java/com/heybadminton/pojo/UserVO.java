package com.heybadminton.pojo;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class UserVO {

    private long userId;
    private String profile;
    private String username;
    private String isAdmin;
}
