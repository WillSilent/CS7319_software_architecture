package com.heybadminton.entity;
import lombok.Data;
import lombok.ToString;

import java.sql.Timestamp;

@Data
@ToString
public class Comment {
    private Long id;
    private Long postId;
    private Long commentUserId;
    private String content;
    private Timestamp createTime;
    private boolean isDelete;
    private String postUserProfile;
}
