import React from "react";
import styles from "./slide.module.scss";

const Slide = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://cdn.esh-derevenskoe.ru/image/cache/catalog/ca3536-200x200.jpg?v=3)",
      }}
      className={styles.slide}
    >
      <span>qwertyu</span>
    </div>
  );
};

export default Slide;
