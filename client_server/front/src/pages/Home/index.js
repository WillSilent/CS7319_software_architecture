import React from "react";
import { Carousel, Card, Avatar, Divider } from "antd";

import "./Home.css";
import dummy_tornament from "@/assets/data/tornament.json";
import dummy_equipment from "@/assets/data/equipment.json";
import dummy_match from "@/assets/data/match.json";
import { useState, useEffect } from "react";
import { useStore } from "@/store";

const { Meta } = Card;

const HomePage = () => {
  const { homeStore } = useStore();
  const [carouselImages, setCarouselImages] = useState([]);
  const [Equipments, setEquipments] = useState([]);
  const [courtmates, setCourtmates] = useState([]);

  useEffect(() => {
    // async function getCarouselImages() {
    //   const result = await homeStore.carouselImages();
    //   setCarouselImages(result.data);
    // }
    // getCarouselImages();
    setCarouselImages(dummy_tornament);
  }, []);
  useEffect(() => {
    // async function getEquipments() {
    //   const result = await homeStore.equipments();
    //   setEquipments(result.data);
    // }
    // getEquipments();
    setEquipments(dummy_equipment);
  }, []);
  useEffect(() => {
    // async function getCourtmates() {
    //   const result = await homeStore.courmates();
    //   setCourtmates(result.data);
    // }
    // getCourtmates();
    setCourtmates(dummy_match);
  }, []);

  const CourtmateList = ({ courtmates }) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {courtmates?.map((courtmate) => (
        <Card
          hoverable
          style={{ width: "30%", margin: "0 1rem 1rem" }}
          key={courtmate.id}
        >
          <a href="/courtmate">
            <Meta
              avatar={
                <Avatar
                  src={"https://picsum.photos/400?random=" + courtmate.id}
                />
              }
              title={courtmate.title}
              description={
                <div>
                  <p>Location: {courtmate.location}</p>
                  <p>Date: {courtmate.date}</p>
                  <p>Time: {courtmate.time}</p>
                  <p>
                    Participants: {courtmate.participants}/
                    {courtmate.maxParticipants}
                  </p>
                </div>
              }
            />
          </a>
        </Card>
      ))}
    </div>
  );

  const EquipmentList = ({ Equipments }) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {Equipments?.map((Equipment) => (
        <Card
          hoverable
          style={{ width: "30%", margin: "0 1rem 1rem" }}
          key={Equipment.id}
        >
          <a href={`/post/${Equipment.id}`}>
            <Meta
              avatar={
                <Avatar
                  src={
                    Equipment.avatarUrl ? (
                      <Avatar src={Equipment.avatarUrl} />
                    ) : (
                      <Avatar
                        src={"https://picsum.photos/50?random=" + Equipment.id}
                      />
                    )
                  }
                />
              }
              title={Equipment.title}
              description={
                Equipment.content.slice(0, 50) +
                (Equipment.content.length > 50 ? "..." : "")
              }
            />
          </a>
        </Card>
      ))}
    </div>
  );

  //const author = dummy_author
  // const posts = dummy_posts.slice(0, 6)
  // const matches = dummy_matches

  return (
    <div className="home-wrapper">
      <Divider style={{ borderColor: "black" }}>
        <h2>Smash your way to greatness - Play Badminton!</h2>
      </Divider>
      <Carousel autoplay>
        {carouselImages?.map((image) => (
          <div key={image.id}>
            <img
              src={image.carouseImageUrl}
              alt={`Slide ${image.id}`}
              style={{
                height: "420px",
                margin: "auto",
              }}
            />
          </div>
        ))}
      </Carousel>

      <Divider orientation="left" style={{ borderColor: "black" }}>
        <h2>
          <a href="/equip" style={{ color: "black" }}>
            Post
          </a>
        </h2>
      </Divider>
      <EquipmentList Equipments={Equipments} />

      <Divider orientation="left" style={{ borderColor: "black" }}>
        <h2>
          <a href="/courtmate" style={{ color: "black" }}>
            Courtmate
          </a>
        </h2>
      </Divider>
      <CourtmateList courtmates={courtmates} />
    </div>
  );
};

export default HomePage;
