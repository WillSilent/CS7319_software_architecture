package org.example.service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class MatchService {

    private final RestTemplate restTemplate;

    public MatchService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @PostMapping
    public int addMatch(@RequestBody Match match) {
        return 0;
    }

    @GetMapping("/{id}")
    public Match getMatchById(@PathVariable long id) {
        return null;
    }

    @GetMapping
    public List<Match> getAllMatches() {
        return null;
    }

    @PutMapping
    public int updateMatch(@RequestBody Match match) {
        return 0;
    }

    @DeleteMapping("/{id}")
    public int deleteMatch(@PathVariable long id) {
        return 0;
    }

}
