import React, { useEffect, useState } from "react";
import { Tabs, List, Button, Modal, Typography, Avatar } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import MyBreadcrumb from "@/common/MyBreadcrumb";
import { http } from "@/utils";

import "./Admin.css";

import dummy_equipment from "@/assets/data/equipment.json";
import dummy_match from "@/assets/data/match.json";

const { Title, Paragraph, Text, Link } = Typography;
const { TabPane } = Tabs;

function Admin() {
  const [posts, setPosts] = useState();
  const [matches, setMatches] = useState();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const [matchToDelete, setMatchToDelete] = useState(null);
  const [currentTab, setCurrentTab] = useState("posts");

  // const getAllPosts = async () => {
  //   const result = await http.get("/equipments/getAll");
  //   setPosts(result.data.data);
  // };

  // const getAllMatches = async () => {
  //   const res = await http.get("/api/matches");
  //   setMatches(res.data);
  // };

  useEffect(() => {
    // getAllPosts();
    // getAllMatches();
    setPosts(dummy_equipment);
    setMatches(dummy_match);
  }, []);

  const handlePostDeleteClick = (post) => {
    setPostToDelete(post);
    setDeleteModalVisible(true);
  };

  const handleMatchDeleteClick = (match) => {
    setMatchToDelete(match);
    setDeleteModalVisible(true);
  };

  const handleDeleteConfirm = () => {
    if (postToDelete !== null) {
      setPosts(posts.filter((p) => p.id !== postToDelete.id));
      setPostToDelete(null);
    } else {
      setMatches(matches.filter((m) => m.id !== matchToDelete.id));
      setMatchToDelete(null);
    }
    setDeleteModalVisible(false);
  };

  const handleDeleteCancel = () => {
    setPostToDelete(null);
    setMatchToDelete(null);
    setDeleteModalVisible(false);
  };

  return (
    <div className="admin-wrapper">
      <MyBreadcrumb paths={["Admin"]} />
      <Title>Admin Page</Title>
      <Tabs activeKey={currentTab} onChange={(key) => setCurrentTab(key)}>
        <TabPane tab="Posts" key="posts">
          {posts && (
            <List
              style={{ marginTop: "20px" }}
              itemLayout="horizontal"
              dataSource={posts}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Button
                      type="text"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => handlePostDeleteClick(item)}
                    >
                      Delete
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={
                          item.avatarUrl ? (
                            <Avatar src={item.avatarUrl} />
                          ) : (
                            <Avatar
                              src={"https://picsum.photos/50?random=" + item.id}
                            />
                          )
                        }
                      />
                    }
                    title={item.title}
                    description={item.content}
                  />
                </List.Item>
              )}
            />
          )}
        </TabPane>
        <TabPane tab="Matches" key="matches">
          {matches && (
            <List
              style={{ marginTop: "20px" }}
              itemLayout="horizontal"
              dataSource={matches}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Button
                      type="text"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => handleMatchDeleteClick(item)}
                    >
                      Delete
                    </Button>,
                  ]}
                >
                  <List.Item.Meta title={item.title} description={item.note} />
                </List.Item>
              )}
            />
          )}
        </TabPane>
      </Tabs>
      <Modal
        title="Confirm Delete"
        open={deleteModalVisible}
        onOk={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      >
        <p>Are you sure you want to delete ?</p>
      </Modal>
    </div>
  );
}

export default Admin;
