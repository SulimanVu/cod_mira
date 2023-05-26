import React, { useEffect } from "react";
import styles from "./bascket.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchBascket } from "../../features/bascketSlice";
import CardItem from "../../components/CardItem/CardItem";

const Bascket = () => {
  const products = useSelector((state) => state.bascketSlice.bascket);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBascket());
  }, [dispatch]);
  return (
    <div className={styles.bascketBlock}>
      {products.map((item) =>
        item.products.map((prod) => <CardItem {...prod} />)
      )}
    </div>
  );
};

export default Bascket;
