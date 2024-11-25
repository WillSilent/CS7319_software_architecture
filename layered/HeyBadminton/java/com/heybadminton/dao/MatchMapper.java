package com.heybadminton.dao;

import com.heybadminton.entity.Match;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MatchMapper {
    int insert(Match match);

    Match findById(long id);

    List<Match> findAll();
    List<Match> getNewestMatchPost();

    int update(Match match);

    int deleteById(long id);
}
