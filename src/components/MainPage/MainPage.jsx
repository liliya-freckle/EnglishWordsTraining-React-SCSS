import React from "react";
import Table from "../Table/Table";
import "./MainPage.css";
import Background from "../../assets/background.png";
import Carousel from "../Carusel/Carousel";
import MainInfo from "../MainInfo/MainInfo";

export const MainPage = () => {
  return (
    <div className="mainPage" style={{ backgroundImage: Background }}>
      <MainInfo />
      <Table />
      <Carousel />
    </div>
  );
};
