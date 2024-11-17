package com.heybadminton.service.impl;

import com.heybadminton.dao.MatchMapper;
import com.heybadminton.entity.Match;
import com.heybadminton.service.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MatchServiceImpl implements MatchService {

    @Autowired
    private MatchMapper matchMapper;

    @Override
    @Transactional
    public int addMatch(Match match) {
        return matchMapper.insert(match);
    }

    @Override
    public Match getMatchById(long id) {
        return matchMapper.findById(id);
    }

    @Override
    public List<Match> getAllMatches() {
        return matchMapper.findAll();
    }

    @Override
    @Transactional
    public int updateMatch(Match match) {
        return matchMapper.update(match);
    }

    @Override
    @Transactional
    public int deleteMatch(long id) {
        return matchMapper.deleteById(id);
    }
}
