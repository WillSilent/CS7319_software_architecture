import React, { useState, useEffect } from "react";
import { Card, List } from "antd";
import MyBreadcrumb from "@/common/MyBreadcrumb";
import "./Tournament.css";
import { http } from "@/utils";
import dummy_tornament from "@/assets/data/tornament.json";

const Tournament = () => {
  const [tounaments, setAllTournaments] = useState([]);

  useEffect(() => {
    // async function getAll () {
    //   const result = await http.get("/tournament/getAll")
    //   setAllTournaments(result.data.data)
    // }
    // getAll()
    setAllTournaments(dummy_tornament);
  }, []);

  // console.log(tounaments)

  return (
    <div className="tournament-wrapper">
      <MyBreadcrumb paths={["Tournament"]} />
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={tounaments}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              className="tournament-card"
              cover={
                <img
                  alt="Tournament Logo"
                  src={item.headerUrl}
                  className="tournament-pic"
                />
              }
            >
              <Card
                title={item.title}
                extra={
                  <a
                    href={item.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                }
              >
                <p>{item.detail}</p>
                <p>Date: {item.date}</p>
                <p>Location: {item.location}</p>
              </Card>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Tournament;
