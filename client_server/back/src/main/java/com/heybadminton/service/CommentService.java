package com.heybadminton.service;

import com.heybadminton.entity.Comment;

import java.util.List;

public interface CommentService {

    Comment getById(Long id);

    List<Comment> getByPostId(Long postId);

    List<Comment> getByCommentUserId(Long commentUserId);

    List<Comment> getAll();

    int addComment(Comment comment);

    int updateComment(Comment comment);

    int deleteComment(Long id);

}
