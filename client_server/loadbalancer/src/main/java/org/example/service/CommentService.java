package org.example.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class CommentService {

    private final RestTemplate restTemplate;

    public CommentService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public Comment getById(Long id){
        return null;
    }

    public List<Comment> getByPostId(Long postId){
        return null;
    }

    public List<Comment> getByCommentUserId(Long commentUserId) {
        return null;
    }

    public List<Comment> getAll(){
        return null;
    }

    public int insert(Comment comment){
        return 0;
    }

    public int update(Comment comment) {
        return 0;
    }

    public int delete(Long id) {
        return 0;
    }

}
