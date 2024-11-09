package com.heybadminton.pojo;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class UserFormData {
    private String profile;
    private String username;
    private String email;
    private String password;
    private String introduction;
}
