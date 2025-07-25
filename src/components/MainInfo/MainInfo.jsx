import React from "react";
import styles from "./MainInfo.module.css";
import image from "../../assets/img2.png";
import { Link } from "react-router-dom";

const MainInfo = () => {
  return (
    <div className={styles.container}>
      <Link to="/dictionary" className={styles.button}>
        <p className={styles.text}>Твой словарь английского языка</p>
      </Link>
      <Link to="/checkyourself" className={styles.button}>
        <p className={styles.text}>Проверь свои знания</p>
      </Link>
    </div>
  );
};

export default MainInfo;
