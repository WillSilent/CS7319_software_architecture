package org.example.service;

import org.example.pojo.ResponseResult;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class HomeService {

    private final RestTemplate restTemplate;

    public HomeService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public ResponseResult getCarouselImages() {
        return null;
    }

    public ResponseResult getNewestEquipmentPost() {
        return null;
    }

    public ResponseResult getNewestCourmatePost() {
        return null;
    }

}
