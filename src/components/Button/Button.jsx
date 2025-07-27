import React, { forwardRef } from "react";
import styles from "./Button.module.css";

const Button = forwardRef(({ text, type, onClick }, ref) => {
  return (
    <button
      ref={ref}
      className={type === "primary" ? styles.button : styles.secondary}
      onClick={onClick}
    >
      {" "}
      {text}
    </button>
  );
});

export default Button;
