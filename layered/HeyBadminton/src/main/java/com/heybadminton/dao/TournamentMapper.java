package com.heybadminton.dao;

import com.heybadminton.entity.Tournament;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TournamentMapper {

    List<Tournament> getAllTournament();

    List<Tournament> getCarouselImages();

}
