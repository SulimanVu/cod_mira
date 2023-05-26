import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../CardItem/CardItem";
import { fetchProd } from "../../features/productSlice";
import styles from "./cardsMapper.module.scss";

const CardsMapper = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productSlice.products);

  useEffect(() => {
    dispatch(fetchProd());
  }, [dispatch]);

  return (
    <div className={styles.cardsMapper}>
      {products.map((item) => (
        <CardItem {...item} />
      ))}
    </div>
  );
};

export default CardsMapper;
