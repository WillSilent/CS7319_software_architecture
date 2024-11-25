package com.heybadminton.controller;

import com.heybadminton.entity.Comment;
import com.heybadminton.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @GetMapping("/{id}")
    public Comment getCommentById(@PathVariable("id") Long id) {
        return commentService.getById(id);
    }

    @GetMapping("/post/{postId}")
    public List<Comment> getCommentsByPostId(@PathVariable("postId") Long postId) {
        return commentService.getByPostId(postId);
    }

    @GetMapping("/user/{userId}")
    public List<Comment> getCommentsByCommentUserId(@PathVariable("userId") Long commentUserId) {
        return commentService.getByCommentUserId(commentUserId);
    }

    @GetMapping
    public List<Comment> getAllComments() {
        return commentService.getAll();
    }

    @PostMapping
    public int addComment(@RequestBody Comment comment) {
        return commentService.addComment(comment);
    }

    @PutMapping
    public int updateComment(@RequestBody Comment comment) {
        return commentService.updateComment(comment);
    }

    @DeleteMapping("/{id}")
    public int deleteComment(@PathVariable("id") Long id) {
        return commentService.deleteComment(id);
    }
}
