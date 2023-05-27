import React from "react";
import styles from "./slide.module.scss";

const Slide = ({ image }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={styles.slide}
    ></div>
  );
};

export default Slide;
