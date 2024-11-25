package com.heybadminton.controller;

import com.heybadminton.entity.Equipment;
import com.heybadminton.pojo.ResponseResult;
import com.heybadminton.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/equipments")
public class EquipmentController {

    @Autowired
    private EquipmentService equipmentService;

    @GetMapping("/getAll")
    public ResponseResult getAllEquipmentByPage() {
        return ResponseResult.success(equipmentService.getAllEquipment());
    }

    @GetMapping("/getAllEquipmentPostByPage")
    public ResponseResult getAllEquipmentByPage(@RequestParam("pageNum") int pageNum, @RequestParam("pageSize") int pageSize) {
        return ResponseResult.success(equipmentService.getAllEquipmentByPage(pageNum, pageSize));
    }

    @GetMapping("/{id}")
    public Equipment getEquipmentById(@PathVariable("id") Long id) {
        return equipmentService.getEquipmentById(id);
    }

    @PostMapping("/add")
    public int addEquipment(@RequestBody Equipment equipment) {
        return equipmentService.addEquipment(equipment);
    }

    @PutMapping
    public int updateEquipment(@RequestBody Equipment equipment) {
        return equipmentService.updateEquipment(equipment);
    }

    @DeleteMapping("/{id}")
    public int deleteEquipmentById(@PathVariable Long id) {
        return equipmentService.deleteEquipmentById(id);
    }
}
