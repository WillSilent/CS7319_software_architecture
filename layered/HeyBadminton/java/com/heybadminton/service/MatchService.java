package com.heybadminton.service;

import com.heybadminton.entity.Match;

import java.util.List;

public interface MatchService {
    int addMatch(Match match);

    Match getMatchById(long id);

    List<Match> getAllMatches();

    int updateMatch(Match match);

    int deleteMatch(long id);
}
