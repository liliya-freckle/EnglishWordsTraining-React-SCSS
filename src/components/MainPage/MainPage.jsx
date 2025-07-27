import React from "react";
import Table from "../Table/Table";
import "./MainPage.css";
import Carousel from "../Carusel/Carousel";
import MainInfo from "../MainInfo/MainInfo";

export const MainPage = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: 'url("/background.png")' }}
    >
      <MainInfo />
      <Table />
      <Carousel />
    </div>
  );
};
