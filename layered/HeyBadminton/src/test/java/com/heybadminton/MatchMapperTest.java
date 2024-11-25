package com.heybadminton;

import com.heybadminton.dao.MatchMapper;
import com.heybadminton.entity.Match;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = App.class)
public class MatchMapperTest {
    @Autowired
    private MatchMapper matchMapper;

    @Test
    public void testInsert() {
        Match match = new Match();
        match.setTitle("Test match");
        match.setDate(LocalDate.now().toString());
        match.setTime(LocalTime.now().toString());
        match.setLocation("Test location");
        match.setPostUserId(1L);
        match.setNote("Test note");
        match.setMaxParticipants(8);
        match.setClosed(false);
        match.setCreateTime(new Timestamp(System.currentTimeMillis()));
        match.setDelete(false);

        int rows = matchMapper.insert(match);
        Assert.assertEquals(1, rows);
    }

    @Test
    public void testFindById() {
        Match match = matchMapper.findById(1L);
        Assert.assertNotNull(match);
    }

    @Test
    public void testFindAll() {
        List<Match> results = matchMapper.findAll();
        Assert.assertNotNull(results);
        Assert.assertTrue(results.size() >= 0);
    }

    @Test
    public void testUpdate() {
        Match match = matchMapper.findById(1L);
        match.setTitle("Updated test match");

        int res = matchMapper.update(match);
        Assert.assertEquals(1, res);

        Match updateMatch = matchMapper.findById(1L);
        Assert.assertEquals("Updated test match", updateMatch.getTitle());
    }

    @Test
    public void testDeleteById() {
        Match match = matchMapper.findById(1L);
        match.setClosed(false);
        Assert.assertEquals(false, match.isClosed());

        int res = matchMapper.deleteById(1L);
        Assert.assertEquals(1, res);

        Match deletedMatch = matchMapper.findById(1L);
        Assert.assertEquals(true, deletedMatch.isDelete());
    }

}
