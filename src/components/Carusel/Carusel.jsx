import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Carusel.module.css";
import Words from "./Words";
import { data } from "../../data/cardsData";

function Carusel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [learnedCount, setLearnedCount] = useState(0);
  const navigate = useNavigate();

  function next() {
    if (activeIndex >= data.length - 1) {
      setActiveIndex(0);
    }
    setActiveIndex((prev) => prev + 1);
  }
  function prev() {
    if (activeIndex <= 0) {
      setActiveIndex();
    }
    setActiveIndex((prev) => prev - 1);
  }
  function close() {
    navigate("/");
  }

  function handleTranslate() {
    setLearnedCount((prev) => prev + 1);
  }

  return (
    <div className={styles.containerCarusel}>
      <div className={styles.containerSlide}>
        <button onClick={prev} className={styles.caruselButton}>
          {"<"}
        </button>
        <Words item={data[activeIndex]} onTranslate={handleTranslate} />
        <button onClick={next} className={styles.caruselButton}>
          {">"}
        </button>
        <button onClick={close} className={styles.caruselButtonClose}>
          {"X"}
        </button>
      </div>
      <p className={styles.counter}>Изучено слов: {learnedCount}</p>
    </div>
  );
}

export default Carusel;
