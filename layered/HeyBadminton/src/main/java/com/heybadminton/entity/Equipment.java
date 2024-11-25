package com.heybadminton.entity;

import lombok.Data;
import lombok.ToString;
import java.sql.Timestamp;


@Data
@ToString
public class Equipment {
    private Long id;
    private Long postUserId;
    private String avatarUrl;
    private String title;
    private String content;
    private String picturesUrls;
    private Boolean isDelete;
    private Timestamp createTime;
    private Timestamp updateTime;
}
