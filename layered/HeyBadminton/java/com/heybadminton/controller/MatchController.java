package com.heybadminton.controller;

import com.heybadminton.entity.Match;
import com.heybadminton.service.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/matches")
public class MatchController {

    @Autowired
    private MatchService matchService;

    @PostMapping
    public int addMatch(@RequestBody Match match) {
        return matchService.addMatch(match);
    }

    @GetMapping("/{id}")
    public Match getMatchById(@PathVariable long id) {
        return matchService.getMatchById(id);
    }

    @GetMapping
    public List<Match> getAllMatches() {
        return matchService.getAllMatches();
    }

    @PutMapping
    public int updateMatch(@RequestBody Match match) {
        return matchService.updateMatch(match);
    }

    @DeleteMapping("/{id}")
    public int deleteMatch(@PathVariable long id) {
        return matchService.deleteMatch(id);
    }
    
}
