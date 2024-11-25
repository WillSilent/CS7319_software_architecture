package com.heybadminton.dao;

import com.heybadminton.entity.Comment;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommentMapper {

    Comment getById(Long id);

    List<Comment> getByPostId(Long postId);

    List<Comment> getByCommentUserId(Long commentUserId);

    List<Comment> getAll();

    int insert(Comment comment);

    int update(Comment comment);

    int delete(Long id);

}
