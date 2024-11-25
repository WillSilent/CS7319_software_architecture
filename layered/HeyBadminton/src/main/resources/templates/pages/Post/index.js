import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Avatar, Form, Input, Button, List, message } from "antd";
import MyBreadcrumb from "@/common/MyBreadcrumb";
import { http } from "@/utils";
import { useUser } from "@/pages/DashBoard";
import "./Post.css";
import dummy_equipment from "@/assets/data/equipment.json";
import dummy_comment from "@/assets/data/comment.json";

const { Meta } = Card;
const { TextArea } = Input;

const names = ["David", "Steve", "Mike", "Mary"];

const Post = () => {
  const { id } = useParams();
  const { user } = useUser();
  console.log(user);
  const [post, setPost] = useState();
  const [comments, setComments] = useState();
  const [commentText, setCommentText] = useState("");

  // const getPostDetail = async () => {
  //   const res = await http.get(`/equipments/${id}`);
  //   setPost(res.data);
  // };

  // const getAllComments = async () => {
  //   const res = await http.get(`/api/comments/post/${id}`);
  //   setComments(res.data);
  // };

  useEffect(() => {
    // // Fetch the post data from backend API
    // getPostDetail();

    // // Fetch the comments for this post from backend API
    // getAllComments();

    setPost(dummy_equipment[id]);
    dummy_comment = dummy_comment.filter((a) => a.postId == id);
    setComments(dummy_comment);
  }, [id]);

  const handleCommentSubmit = async () => {
    // Submit the new comment to backend API
    const newComment = {
      id: new Date().getTime(),
      postId: id,
      commentUserId: 1,
      content: commentText,
      postUserProfile: user.profile,
    };
    // send POST
    const res = await http.post("/api/comments", newComment);
    console.log(res);
    if (res.status === 200) {
      message.success("Comment created successfully");
      setCommentText("");
      setTimeout(() => {
        setComments([...comments, newComment]);
      }, 1000);
    }
  };

  return (
    <div className="post-wrapper">
      <MyBreadcrumb paths={["Post"]} />
      {post && (
        <Card style={{ marginBottom: "20px" }}>
          <Meta
            avatar={
              post.avatarUrl ? (
                <Avatar src={post.avatarUrl} />
              ) : (
                <Avatar src={"https://picsum.photos/50?random=" + post.id} />
              )
            }
            title={post.title}
          />
          <p style={{ marginTop: "20px" }}>{post.content}</p>
          {post.picturesUrls && (
            <div key={post.id} style={{ marginTop: "20px" }}>
              <img
                style={{ maxWidth: "100%" }}
                src={post.picturesUrls}
                alt="post_picture"
              />
            </div>
          )}
        </Card>
      )}
      {comments && (
        <List
          header={`${comments.length} replies`}
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  item.postUserProfile ? (
                    <Avatar src={item.postUserProfile} />
                  ) : (
                    <Avatar
                      src={"https://picsum.photos/50?random=" + post.id}
                    />
                  )
                }
                title={names[comments.id]}
                description={item.content}
              />
            </List.Item>
          )}
        />
      )}
      <Form>
        <Form.Item>
          <TextArea
            rows={4}
            onChange={(e) => setCommentText(e.target.value)}
            value={commentText}
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            onClick={handleCommentSubmit}
            type="primary"
          >
            Add Comment
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Post;
