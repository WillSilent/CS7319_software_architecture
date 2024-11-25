import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Space,
  message,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { http } from "@/utils";
import { useUser } from "@/pages/DashBoard";

const { Option } = Select;

const CreateMatchForm = ({ handleBack }) => {
  const { user } = useUser();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    console.log(values);
    setLoading(true);

    const newMatch = {
      id: new Date().getTime(),
      title: values.title,
      time: values.time,
      date: values.date.toISOString().slice(0, 10),
      location: values.location,
      postUserId: user.id,
      note: values.note,
      participants: 1,
      maxParticipants: values.maxParticipants,
    };

    const res = await http.post("/api/matches", newMatch);
    if (res.status === 200) {
      message.success("Match created successfully");

      setTimeout(() => {
        window.location.reload();
      }, 1000);

      setLoading(false);
    }
  };

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <h2>Create a New Match</h2>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Title"
          name="title"
          rules={[
            { required: true, message: "Please input a title for the match!" },
          ]}
        >
          <Input placeholder="Enter a title for the match" />
        </Form.Item>
        <Form.Item
          label="Scheduled Date"
          name="date"
          rules={[
            { required: true, message: "Please select a scheduled date!" },
          ]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Scheduled Time"
          name="time"
          rules={[
            { required: true, message: "Please select a scheduled time!" },
          ]}
        >
          <Select placeholder="Select a scheduled time" allowClear>
            <Option value="9:00am">9:00am</Option>
            <Option value="11:00am">11:00am</Option>
            <Option value="2:00pm">2:00pm</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Plan Location"
          name="location"
          rules={[{ required: true, message: "Please input a plan location!" }]}
        >
          <Input placeholder="Enter a plan location" />
        </Form.Item>
        <Form.Item
          label="Max Participants"
          name="maxParticipants"
          rules={[{ required: true, type: "number", min: 2 }]}
        >
          <InputNumber
            style={{ width: "100%" }}
            placeholder="Enter the maximum number of participants"
          />
        </Form.Item>
        <Form.Item label="Note" name="note">
          <Input.TextArea placeholder="Enter a note (optional)" />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button onClick={handleBack} icon={<ArrowLeftOutlined />}>
              Back
            </Button>
            <Button type="primary" htmlType="submit" loading={loading}>
              Create
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateMatchForm;
