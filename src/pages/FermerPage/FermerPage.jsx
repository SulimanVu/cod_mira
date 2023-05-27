import React, { useEffect } from "react";
import { toast } from "react-toastify";
import styles from "./fermerPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchFermersThunk, following } from "features/applicationSlice";
import { useParams } from "react-router-dom";

const FermerPage = () => {
  const { id } = useParams();
  const myId = localStorage.getItem("id");
  const fermer = useSelector((state) =>
    state.application.fermers.find((item) => item._id === id)
  );
  const dispatch = useDispatch();

  const handleFollowing = () => {
    dispatch(following({ idUser: fermer._id, myId }));
    toast.success(`Вы подписались на фермера: ${fermer?.name}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  useEffect(() => {
    dispatch(fetchFermersThunk());
  }, [dispatch, fermer]);

  return (
    <div className={styles.fermerPage}>
      <img
        className={styles.mainImg}
        src={require("../../icons/fermer.jpg")}
        alt="#"
      />
      <div>
        <h3>{fermer?.name}</h3>
        <p>{fermer?.title}</p>
        
        <h3>Подписчики: {fermer?.followers.length}</h3>
        <h3>Подписки: {fermer?.mySubscribers.length}</h3>

        <div className={styles.contacts}>
          <div>
            <img src={require("../../icons/phone.png")} alt="#" />
            <span>{fermer?.phone}</span>
          </div>
          <div>
            <img src={require("../../icons/mail.png")} alt="#" />
            <span>{fermer?.mail}</span>
          </div>
        </div>
        <button onClick={handleFollowing}>Подписаться на фермера</button>
      </div>
    </div>
  );
};

export default FermerPage;
