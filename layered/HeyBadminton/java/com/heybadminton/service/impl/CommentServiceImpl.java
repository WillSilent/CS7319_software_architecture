package com.heybadminton.service.impl;

import com.heybadminton.dao.CommentMapper;
import com.heybadminton.entity.Comment;
import com.heybadminton.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentMapper commentMapper;

    @Override
    public Comment getById(Long id) {
        return commentMapper.getById(id);
    }

    @Override
    public List<Comment> getByPostId(Long postId) {
        return commentMapper.getByPostId(postId);
    }

    @Override
    public List<Comment> getByCommentUserId(Long commentUserId) {
        return commentMapper.getByCommentUserId(commentUserId);
    }

    @Override
    public List<Comment> getAll() {
        return commentMapper.getAll();
    }

    @Override
    public int addComment(Comment comment) {
        return commentMapper.insert(comment);
    }

    @Override
    public int updateComment(Comment comment) {
        return commentMapper.update(comment);
    }

    @Override
    public int deleteComment(Long id) {
        return commentMapper.delete(id);
    }
}
