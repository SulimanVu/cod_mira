import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./cardItem.module.scss";
import {
  addProductInBascket,
  fetchBascket,
  updateProductInBascket,
} from "../../features/bascketSlice";

const CardItem = ({ image, description, price, _id }) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState();

  const bascket = useSelector((state) => state.bascketSlice.bascket);

  const handleLike = (e) => {
    e.preventDefault();
    setLike(!like);
    dispatch(fetchBascket());
    if (bascket.length > 0) {
      dispatch(updateProductInBascket({ products: _id, price }));
    } else {
      dispatch(
        addProductInBascket({
          user: localStorage.getItem("id"),
          products: _id,
          price,
        })
      );
    }
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
