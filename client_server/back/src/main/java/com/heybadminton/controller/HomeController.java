package com.heybadminton.controller;

import com.heybadminton.dao.EquipmentMapper;
import com.heybadminton.dao.MatchMapper;
import com.heybadminton.dao.TournamentMapper;
import com.heybadminton.entity.Equipment;
import com.heybadminton.entity.Match;
import com.heybadminton.entity.Tournament;
import com.heybadminton.pojo.ResponseResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/home")
public class HomeController {

    @Autowired
    TournamentMapper tournamentMapper;

    @Autowired
    private EquipmentMapper equipmentMapper;

    @Autowired
    private MatchMapper matchMapper;

    @GetMapping("/getCarouselImages")
    public ResponseResult getCarouselImages() {
        List<Tournament> carouselImages = tournamentMapper.getCarouselImages();
        return ResponseResult.success(carouselImages);
    }

    @GetMapping("/getNewestEquipmentPost")
    public ResponseResult getNewestEquipmentPost() {
        List<Equipment> allEquipment = equipmentMapper.getNewestEquipmentPost();
        return ResponseResult.success(allEquipment);
    }


    @GetMapping("/getNewestCourmatePost")
    public ResponseResult getNewestCourmatePost() {
        List<Match> newestMatchPost = matchMapper.getNewestMatchPost();
        return ResponseResult.success(newestMatchPost);
    }






}
