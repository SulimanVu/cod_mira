import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./cardItem.module.scss";
import { addProductInBascket } from "../../features/bascketSlice";

const CardItem = ({ image, description, price, _id }) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState();
  const { id } = useParams();

  const handleLike = (e) => {
    e.preventDefault();
    setLike(!like);
    dispatch(
      addProductInBascket({
        user: id,
        products: _id,
        price,
      })
    );
  };

  return (
    <div className={`${styles.cardItem} ${like && styles.active}`}>
      <div
        onClick={handleLike}
        className={like ? styles.like : styles.dislike}
      ></div>
      <img src={`${image}`} alt="#" />
      <div className={styles.info}>
        <span>{description}</span>
        <span> Цена: {price} ₽</span>
      </div>
    </div>
  );
};

export default CardItem;
