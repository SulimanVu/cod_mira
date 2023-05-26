import React, { useEffect } from "react";
import styles from "./bascket.module.scss";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "../../components/CardItem/CardItem";
import { fetchAuthUser } from "features/applicationSlice";

const Bascket = () => {
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");
  const bascket = useSelector((state) => state.application.bascket);

  useEffect(() => {
    dispatch(fetchAuthUser(id));
  }, [dispatch]);

  return (
    <div className={styles.bascketBlock}>
      {bascket?.map((item) => (
        <CardItem {...item} />
      ))}
    </div>
  );
};

export default Bascket;
