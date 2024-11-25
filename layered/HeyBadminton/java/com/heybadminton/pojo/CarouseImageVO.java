package com.heybadminton.pojo;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class CarouseImageVO {

    private int id;
    private String carouseImageUrl;
    private String altInfo;

}
