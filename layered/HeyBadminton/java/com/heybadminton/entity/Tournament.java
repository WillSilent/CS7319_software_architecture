package com.heybadminton.entity;

import lombok.Data;
import lombok.ToString;

import java.time.LocalDateTime;

@Data
@ToString
public class Tournament {

    private int id;
    private String headerUrl;
    private String title;
    private String detail;
    private String location;
    private String date;
    private String registerLink;
    private String carouseImageUrl;
    private LocalDateTime createTime;
}
