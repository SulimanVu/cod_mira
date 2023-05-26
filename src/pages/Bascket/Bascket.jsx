import React, { useEffect } from "react";
import styles from "./bascket.module.scss";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "../../components/CardItem/CardItem";

const Bascket = () => {

  const dispatch = useDispatch();
  useEffect(() => {
  }, [dispatch]);
  return (
    <div className={styles.bascketBlock}>
      
    </div>
  );
};

export default Bascket;
