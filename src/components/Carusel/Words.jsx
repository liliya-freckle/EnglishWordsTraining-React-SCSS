import React, { useState, useEffect, useRef } from "react";
import styles from "./Carusel.module.css";
import Button from "../Button/Button";

const Words = ({ item, onTranslate }) => {
  const { englishWord, transcription, translate } = item;
  const [pressed, setPressed] = useState(false);
  const buttonRef = useRef(null);

  const handlePressedState = () => {
    setPressed(true);
    onTranslate();
  };

  useEffect(() => {
    setPressed(false); // Сброс состояния при смене карточки
    if (buttonRef.current) {
      buttonRef.current.focus(); // Фокус на кнопке
    }
  }, [item]);

  return (
    <div className={styles.containerCard}>
      <div>{item.englishWord}</div>
      <div>{item.transcription}</div>
      {pressed ? (
        <div className="translate" onBlur={() => setPressed(false)}>
          {translate}
        </div>
      ) : (
        <Button
          type="secondary"
          text="Проверить"
          onClick={handlePressedState}
        />
      )}
    </div>
  );
};

export default Words;
