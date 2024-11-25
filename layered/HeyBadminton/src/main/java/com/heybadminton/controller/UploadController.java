package com.heybadminton.controller;

import com.heybadminton.pojo.ResponseResult;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class UploadController {

    @Value("${upload_images.path}")
    private String uploadImageFolder;


    @PostMapping("/upload/image")
    public ResponseResult uploadImg(@RequestParam("file") MultipartFile file) throws IOException {
        System.out.println("Begin to upload");
        // 获取文件名
        String fileName = file.getOriginalFilename();

        String[] strs = fileName.split("\\.");
        long timestamp = System.currentTimeMillis();

        StringBuilder s = new StringBuilder();
        s.append(strs[0]);
        s.append("-" + String.valueOf(timestamp));
        s.append("." + strs[1]);

        file.transferTo(new File(uploadImageFolder, s.toString()));
        Map<String, String> map = new HashMap<>();
        map.put("status", "done");
        map.put("url", "/upload_images/" + s.toString());

        System.out.println("Upload Sucess:" + map.get("url"));
        return ResponseResult.success(map);
    }

}
