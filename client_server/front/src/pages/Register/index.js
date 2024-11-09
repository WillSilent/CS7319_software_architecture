import React, { useState } from "react";
import { Form, Input, Button, Upload, message, Card, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import logo from "@/assets/images/logo.png";

import "./register.less";
import { http } from "@/utils";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // 获取跳转实例对象
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const [profileUrl, setProfileUrl] = useState("");

  const imgTypeLimit = ["image/png", "image/jpeg"];
  // 图片列表
  const [fileList, setFileList] = useState([]);
  // 图片预览框
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewTitle, setPreviewTitle] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  // 上传button加个loading
  const [loading, setLoading] = useState(false);

  const beforeUpload = (file, fileList) => {
    // 判断文件格式
    if (imgTypeLimit.includes(file.type)) {
      setFileList(fileList);
    } else {
      message.error("上传的图片格式或尺寸不符合要求!");
      return Upload.LIST_IGNORE; // 不加入fileList
    }
    // 返回false表示不上传
    return false;
  };
  // 移除图片
  const handleRemove = (file) => {
    setFileList([]);
  };
  const handleChange = (info) => {
    setFileList(info.fileList);
  };
  // 图片预览
  const handlePreview = (file) => {
    setPreviewTitle(file.name);
    setPreviewUrl(file.url || file.thumbUrl);
    setPreviewVisible(true);
  };
  // 图片预览结束/取消
  const handlePreviewCancel = () => {
    setPreviewVisible(false);
  };
  // 点击上传
  const handleUpload = async () => {
    const formData = new FormData();
    if (!fileList || fileList.length === 0) return message.error("Please upload a picture!");
    formData.append("file", fileList[0].originFileObj);
    setLoading(true);
    // 发起请求...
    const res = await http.post("/upload/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setProfileUrl(res.data.data.url);
    setLoading(false);
    message.success("Image Upload Sucess!");
  };

  // 处理提交表单
  const handleSubmit = async (values) => {
    values.profile = profileUrl;
    const res = await http.post("/auth/register", values);
    if (res.data.code === 200) {
      message.success("Register Sucess!");
      navigate("/login");
    } else if (res.data.code === 400003) {
      message.error("Try again!");
    }
  };

  return (
    <div className="register">
      <Card className="register-container">
        <Form form={form} onFinish={handleSubmit}>
          <img className="logo" src={logo} alt="" />
          <Form.Item name="profile" label="Profile">
            <div>
              <Upload
                classNmae="avatar-uploader"
                listType="picture-circle"
                maxCount={1} // 限制最大上传
                fileList={fileList}
                showUploadList={true} // 列表缩略图
                accept=".jpg, .png" // 打开的文件框默认的文件类型
                beforeUpload={beforeUpload}
                onRemove={handleRemove}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList && fileList.length >= 1 ? null : (
                  <div>
                    <PlusOutlined />
                  </div>
                )}
              </Upload>
              <Modal
                open={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handlePreviewCancel}
              >
                <img src={previewUrl} alt="" />
              </Modal>
              <Button type="primary" onClick={handleUpload} loading={loading}>
                Upload
              </Button>
            </div>
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="username"
            label="username"
            rules={[{ required: true, message: "Username" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="password"
            rules={[{ required: true, message: "Password" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="confirm Password"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Conformed Password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Input the same password!"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="introduction" label="Intro">
            <Input.TextArea />
          </Form.Item>
          <div className="button-submit">
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
