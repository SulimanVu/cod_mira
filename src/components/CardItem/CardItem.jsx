import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./cardItem.module.scss";
import { addToBascket } from "features/applicationSlice";

const CardItem = ({ image, description, price, _id }) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState();

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const handleLike = (e) => {
    e.preventDefault();
    setLike(!like);
    dispatch(addToBascket({ id, bascket: _id }));
  };

  return (
    <div key={_id} className={`${styles.cardItem} ${like && styles.active}`}>
      <div
        onClick={handleLike}
        className={like ? styles.like : styles.dislike}
      ></div>
      <img src={`${image}`} alt="#" />
      <div className={styles.info}>
        <span className={styles.description}>{description}</span>
        <span className={styles.fermer}>От Дмитрия Вадуева</span>
        <span className={styles.price}> Цена: {price} ₽</span>
      </div>
    </div>
  );
};

export default CardItem;
