package com.heybadminton.dao;

import com.heybadminton.entity.Equipment;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface EquipmentMapper {
    List<Equipment> getAllEquipment();

    Equipment getEquipmentById(Long id);

    int insertEquipment(Equipment equipment);

    int updateEquipment(Equipment equipment);

    int deleteEquipmentById(Long id);

    List<Equipment> getNewestEquipmentPost();

    List<Equipment> getAllEquipmentByPage(@Param("offset" )int offset, @Param("pageSize") int pageSize);
}
