import { fetchFermersThunk } from "features/applicationSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "requestCard.module.scss";

const RequesrtCard = () => {
  const dispatch = useDispatch();
  const request = useSelector((state) =>
    state.request.request.filter(
      (item) => item.user === "6470e3cd64c8962de7cf327f"
    )
  );

  useEffect(() => {
    dispatch(fetchFermersThunk());
  }, [dispatch]);
  return (
    <div className={styles.request}>
      <div></div>
    </div>
  );
};

export default RequesrtCard;
