package com.heybadminton;

import com.heybadminton.dao.CommentMapper;
import com.heybadminton.entity.Comment;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.sql.Timestamp;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = App.class)
public class CommentMapperTest {

    @Autowired
    private CommentMapper commentMapper;

    @Test
    public void testGetById() {
        Comment comment = commentMapper.getById(1L);
        assertNotNull(comment);
    }

    @Test
    public void testGetByPostId() {
        List<Comment> comments = commentMapper.getByPostId(1L);
        assertNotNull(comments);
    }

    @Test
    public void testGetByCommentUserId() {
        List<Comment> comments = commentMapper.getByCommentUserId(1L);
        assertNotNull(comments);
    }

    @Test
    public void testGetAll() {
        List<Comment> comments = commentMapper.getAll();
        assertNotNull(comments);
    }

    @Test
    public void testInsert() {
        Comment comment = new Comment();
        comment.setPostId(2L);
        comment.setCommentUserId(2L);
        comment.setContent("This is a new comment");
        comment.setCreateTime(new Timestamp(System.currentTimeMillis()));
        comment.setDelete(false);

        int result = commentMapper.insert(comment);
        assertEquals(1, result);
    }

    @Test
    public void testUpdate() {
        Comment comment = commentMapper.getById(3L);
        comment.setContent("Updated comment content");

        int result = commentMapper.update(comment);
        assertEquals(1, result);

        comment = commentMapper.getById(3L);
        assertEquals("Updated comment content", comment.getContent());
    }

    @Test
    public void testDelete() {
        Comment comment = commentMapper.getById(1L);
        comment.setDelete(false);

        int result = commentMapper.delete(1L);
        Assert.assertEquals(1, result);
        Comment deletedcomment = commentMapper.getById(1L);
        Assert.assertEquals(true, deletedcomment.isDelete());
    }
}
