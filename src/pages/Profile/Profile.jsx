import React, { useEffect } from "react";
import styles from "./profile.module.scss";
import { fetchAllUsers } from "features/applicationSlice";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const myId = localStorage.getItem("id");
  const user = useSelector((state) =>
    state.application.users.find((item) => item._id === myId)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className={styles.profile}>
      <img
        className={styles.mainImg}
        src={require("../../icons/fermer.jpg")}
        alt="#"
      />
      <div>
        <h3>Мои подписки</h3>
        <div className={styles.subscribers}>
          {user?.mySubscribers.map((item) => (
            <span>{item.name}</span>
          ))}
          <span>{user?.mySubscribers.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
