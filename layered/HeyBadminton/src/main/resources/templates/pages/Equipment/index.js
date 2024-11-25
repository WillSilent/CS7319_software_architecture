import {
  List,
  Avatar,
  Pagination,
  Collapse,
  Input,
  Button,
  Upload,
  Space,
  message,
} from "antd";
import React, { useState, useEffect } from "react";
import MyBreadcrumb from "@/common/MyBreadcrumb";
import { PictureOutlined } from "@ant-design/icons";
import dummy_equipment from "@/assets/data/equipment.json";

import { useUser } from "@/pages/DashBoard";
import { http } from "@/utils";

import "./Equipment.css";

const { Panel } = Collapse;
const { TextArea } = Input;

function Equipment() {
  const { user } = useUser();
  const [fileList, setFileList] = useState([]);
  const handleChange = (info) => {
    setFileList(info.fileList);
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]); // store all posts
  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState([]);

  useEffect(() => {
    // async function getAll() {
    //   const result = await http.get("/equipments/getAll");
    //   //console.log(result.data.data)
    //   setData(result.data.data);
    // }
    // getAll();
    setData(dummy_equipment);
  }, []);

  const pageSize = 10;
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const currentData = data.slice(start, end); // display only the current page of posts

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handlePost = async () => {
    setLoading(true);

    const pictureUrls = fileList.map((item) => item.response.data.url);
    const newPost = {
      id: new Date().getTime(),
      postUserId: user.id,
      title: title,
      content: content,
      avatarUrl: user.profile,
      picturesUrls: pictureUrls.join(";"),
    };
    // 提交请求
    const res = await http.post("/equipments/add", newPost);
    if (res.status === 200) {
      message.success("Post created successfully");
      // Reset the form
      setTitle("");
      setContent("");
      setFileList([]);
      setLoading(false);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <div className="equipment-wrapper">
      <MyBreadcrumb paths={["Post"]} />
      <List
        itemLayout="horizontal"
        dataSource={currentData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                item.avatarUrl ? (
                  <Avatar src={item.avatarUrl} />
                ) : (
                  <Avatar src={"https://picsum.photos/50?random=" + item.id} />
                )
              }
              title={<a href={`/post/${item.id}`}>{item.title}</a>}
              description={item.content}
            />
          </List.Item>
        )}
      />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={data.length}
        onChange={handleChangePage}
      />

      <div style={{ paddingTop: "1rem" }}> {/* Add padding top */} </div>

      <Collapse size="large" collapsible={user.id === 0 ? "disabled" : ""}>
        <Panel header="Create a post" key="1">
          <Input
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          />
          <TextArea
            id="comment-area"
            showCount
            maxLength={100}
            style={{
              height: 120,
              marginBottom: 24,
              marginTop: 12,
            }}
            onChange={handleContentChange}
            placeholder="Content"
            value={content}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Upload
                action="/v1_0/upload/image"
                maxCount={5}
                listType="picture"
                FileList={fileList}
                onChange={handleChange}
              >
                <Button icon={<PictureOutlined />}>Upload</Button>
              </Upload>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Space>
              <Button
                type="primary"
                onClick={handlePost}
                htmlType="submit"
                loading={loading}
              >
                Post
              </Button>
            </Space>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}

export default Equipment;
