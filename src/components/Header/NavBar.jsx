import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const NavBar = () => {
  return (
    <div>
      <Link to="/" className={styles.link}>
        Main page
      </Link>
      <Link to="/dictionary" className={styles.link}>
        Dictionary
      </Link>
      <Link to="/checkyourself" className={styles.link}>
        Check yourself
      </Link>
    </div>
  );
};

export default NavBar;
