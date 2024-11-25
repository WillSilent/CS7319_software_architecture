package org.example.service;

import org.example.pojo.ResponseResult;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class TournamentService {

    private final RestTemplate restTemplate;

    public TournamentService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public ResponseResult getAllTournament() {
        return null;
    }

}
