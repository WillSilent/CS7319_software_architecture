package com.heybadminton.service;

import com.heybadminton.entity.Equipment;

import java.util.List;

public interface EquipmentService {

    List<Equipment> getAllEquipment();

    Equipment getEquipmentById(Long id);

    int addEquipment(Equipment equipment);

    int updateEquipment(Equipment equipment);

    int deleteEquipmentById(Long id);

    List<Equipment> getAllEquipmentByPage(int pageNum, int pageSize);
}
