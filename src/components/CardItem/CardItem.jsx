import React from "react";
import styles from "./cardItem.module.scss";

const CardItem = ({ name }) => {
  return <div className={styles.cardItem}>{name}</div>;
};

export default CardItem;
