import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Select,
  DatePicker,
  Card,
  Button,
  Modal,
  Typography,
  message,
} from "antd";
import MyBreadcrumb from "@/common/MyBreadcrumb";
import CreateMatchForm from "./CreateMatchForm";
import dummy_match from "@/assets/data/match.json";
import { http } from "@/utils";

import "./Courtmate.css";

const { Option } = Select;
const { Title } = Typography;

const defaultFilter = {
  date: null,
  time: "all",
  location: "all",
  participants: "all",
  closed: "all",
};

const Courtmate = () => {
  const [visible, setVisible] = useState(false);
  const [matches, setMatches] = useState(null);
  const [filteredMatches, setFilteredMatches] = useState(matches);
  const [filter, setFilter] = useState(defaultFilter);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [isCreate, setIsCreate] = useState(false);

  const matchTimes = [...new Set(matches?.map((match) => match.time))];
  const matchLocations = [...new Set(matches?.map((match) => match.location))];
  const matchParticipants = [
    ...new Set(matches?.map((match) => match.participants)),
  ];

  useEffect(() => {
    let currMatches = [];
    if (matches !== null) {
      currMatches = [...matches];
    }
    if (filter.date) {
      const formatted_date = filter.date.toISOString().slice(0, 10);
      currMatches = currMatches.filter(
        (match) => match.date === formatted_date
      );
    }
    if (filter.time && filter.time !== "all") {
      currMatches = currMatches.filter((match) => match.time === filter.time);
    }
    if (filter.location && filter.location !== "all") {
      currMatches = currMatches.filter(
        (match) => match.location === filter.location
      );
    }
    if (filter.participants && filter.participants !== "all") {
      currMatches = currMatches.filter(
        (match) => match.participants === filter.participants
      );
    }
    if (filter.closed && filter.closed !== "all") {
      currMatches = currMatches.filter(
        (match) => match.participants === match.maxParticipants
      );
    }
    setFilteredMatches(currMatches);
  }, [filter, matches]);

  // const getAllMatches = async () => {
  //   const res = await http.get("/api/matches");
  //   setMatches(res.data);
  // };

  useEffect(() => {
    // getAllMatches();
    setMatches(dummy_match);
  }, []);

  const handleBack = () => {
    setIsCreate(false);
  };

  const handleJoin = async (values) => {
    console.log(values);
    const newMatch = {
      ...selectedMatch,
      participants: selectedMatch.participants + 1,
    };

    const res = await http.put("/api/matches", newMatch);
    console.log(res);

    if (res.status === 200) {
      message.success("Joined successfully");
      setVisible(false);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <div className="courtmate-wrapper">
      <MyBreadcrumb paths={["Courtmate"]} />
      {!isCreate && (
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <Title level={2}>Filters</Title>
            <Form layout="vertical">
              <Form.Item label="Date">
                <DatePicker
                  style={{ width: "100%" }}
                  value={filter.date}
                  onChange={(value) => setFilter({ ...filter, date: value })}
                />
              </Form.Item>
              <Form.Item label="Time">
                <Select
                  value={filter.time}
                  onChange={(value) => setFilter({ ...filter, time: value })}
                >
                  <Option value="all">All</Option>
                  {matchTimes.map((e) => (
                    <Option key={e} value={e}>
                      {e}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label="Location">
                <Select
                  value={filter.location}
                  onChange={(value) =>
                    setFilter({ ...filter, location: value })
                  }
                >
                  <Option value="all">All</Option>
                  {matchLocations.map((e) => (
                    <Option key={e} value={e}>
                      {e}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label="Number of players">
                <Select
                  value={filter.participants}
                  onChange={(value) =>
                    setFilter({ ...filter, participants: value })
                  }
                >
                  <Option value="all">All</Option>
                  {matchParticipants.map((e) => (
                    <Option key={e} value={e}>
                      {e}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label="Status">
                <Select
                  value={filter.closed}
                  onChange={(value) => setFilter({ ...filter, closed: value })}
                >
                  <Option value="all">All</Option>
                  <Option value={false}>Open</Option>
                  <Option value={true}>Close</Option>
                </Select>
              </Form.Item>
            </Form>
            <Button
              style={{ width: "100%" }}
              onClick={() => setFilter(defaultFilter)}
            >
              Reset
            </Button>
            <div style={{ textAlign: "center", margin: "16px 0" }}>
              <p>Can't find a suitable match? Create one!</p>
            </div>
            <Button
              style={{ width: "100%" }}
              type="primary"
              onClick={() => {
                setIsCreate(true);
              }}
            >
              Create
            </Button>
          </div>
          <div style={{ flex: 2, marginLeft: "50px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                gap: "50px",
              }}
            >
              {filteredMatches &&
                filteredMatches.map((match) => (
                  <Card
                    key={match.id}
                    title={match.title}
                    extra={
                      <Button
                        type="primary"
                        disabled={match.participants === match.maxParticipants}
                        onClick={() => {
                          setVisible(true);
                          setSelectedMatch(match);
                        }}
                      >
                        Join
                      </Button>
                    }
                    hoverable
                  >
                    <p>Date: {match.date}</p>
                    <p>Time: {match.time}</p>
                    <p>Location: {match.location}</p>
                    <p>
                      Participants: {match.participants}/{match.maxParticipants}
                    </p>
                    <p>Note: {match.note}</p>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      )}
      {isCreate && <CreateMatchForm handleBack={handleBack} />}
      <Modal
        title="Join Match"
        open={visible}
        footer={[
          <Button key="cancel" onClick={() => setVisible(false)}>
            Cancel
          </Button>,
          <Button key="join" type="primary" htmlType="submit" form="join-form">
            Join
          </Button>,
        ]}
      >
        <Form id="join-form" layout="vertical" onFinish={handleJoin}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Courtmate;
