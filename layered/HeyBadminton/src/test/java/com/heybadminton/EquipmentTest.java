package com.heybadminton;

import com.heybadminton.dao.EquipmentMapper;
import com.heybadminton.entity.Equipment;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.sql.Timestamp;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = App.class)
public class EquipmentTest {

    @Autowired
    private EquipmentMapper equipmentMapper;

//    @Test
//    public void testGetAllEquipment() {
//
//        List<Equipment> users = equipmentMapper.getAllEquipment();
//        users.forEach(System.out::println);
//    }
//
//    @Test
//    public void testGetEquipmentById() {
//        Long id = 12L;
//        Equipment expectedEquipment = equipmentMapper.getEquipmentById(id);
//        System.out.println(expectedEquipment.toString());
//
//    }
//
//    @Test
//    public void testInsertEquipment() {
//        Equipment equipment = new Equipment();
//        equipment.setTitle("Test Equipment");
//        equipment.setContent("This is a test equipment");
//        equipment.setPictures_urls("http://example.com/test-equipment.jpg");
//        equipment.setPost_user_id(1L);
//        equipment.setCreate_time(new Timestamp(System.currentTimeMillis()));
//        equipment.setUpdate_time(new Timestamp(System.currentTimeMillis()));
//
//        int result = equipmentMapper.insertEquipment(equipment);
//
//        System.out.println(result);
//    }
//
//    @Test
//    public void testUpdateEquipment() {
//        // create a new equipment object with updated information
//        Equipment equipment = new Equipment();
//        equipment.setId(1L); // set the ID of the equipment to be updated
//        equipment.setTitle("Updated Title");
//        equipment.setContent("Updated Content");
//        equipment.setPictures_urls("Updated Picture URLs");
//        equipment.setIs_delete(false); // set any other fields as needed
//        equipment.setUpdate_time(new Timestamp(System.currentTimeMillis()));
//
//        // call the updateEquipment method
//        int result = equipmentMapper.updateEquipment(equipment);
//
//        // assert that the update was successful
//        assertEquals(1, result);
//
//        // retrieve the updated equipment from the database
//        Equipment updatedEquipment = equipmentMapper.getEquipmentById(1L);
//
//        // assert that the updated fields are as expected
//        assertEquals("Updated Title", updatedEquipment.getTitle());
//        assertEquals("Updated Content", updatedEquipment.getContent());
//        assertEquals("Updated Picture URLs", updatedEquipment.getPictures_urls());
//        // assert any other updated fields as needed
//    }
//
//    @Test
//    public void testDeleteEquipmentById() {
//        // Insert an equipment object into the database
//        Equipment equipment = new Equipment();
////        equipment.setId(12L);
//        equipment.setPost_user_id(1L);
//        equipment.setTitle("Test Equipment");
//        equipment.setContent("Test Equipment Content");
//        equipment.setPictures_urls("test.jpg");
//        equipment.setCreate_time(new Timestamp(System.currentTimeMillis()));
//        equipment.setUpdate_time(new Timestamp(System.currentTimeMillis()));
//        equipment.setIs_delete(false);
//        equipmentMapper.insertEquipment(equipment);
//
//        // Retrieve the equipment object by its ID and confirm its is_delete attribute is false
//        equipmentMapper.getEquipmentById(4L).setIs_delete(false);
//
//        // Call the deleteEquipmentById method to "soft delete" the equipment object
//        equipmentMapper.deleteEquipmentById(4L);
//
//        // Retrieve the same equipment object by its ID again and confirm its is_delete attribute is true
//        Equipment deletedEquipment = equipmentMapper.getEquipmentById(4L);
//        assertTrue(deletedEquipment.getIs_delete());
//
//    }



}
