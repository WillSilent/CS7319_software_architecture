package com.heybadminton.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseResult {

    private boolean success;

    private Integer code;

    private String msg;

    private Object data;

    public static ResponseResult success(Object data) {
        return new ResponseResult(true, 200, "success", data);
    }

    public static ResponseResult fail(Integer code, String msg) {
        return new ResponseResult(false, code, msg, null);
    }

}
