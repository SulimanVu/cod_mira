import styles from "./profile.module.scss";
import ProfileNav from "./profileNav";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "features/applicationSlice";

const ProfileCard = () => {
  const myId = localStorage.getItem("id");
  const dispatch = useDispatch();

  const user = useSelector((state) =>
    state.application.users.find((item) => item._id === myId)
  );
  console.log(user);
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const price = () => {
    if (user?.bascket) {
      return user?.bascket.reduce((sum, item) => {
        return (sum += item.price);
      }, 0);
    } else {
      return 0;
    }
  };

  return (
    <div className={styles.profile}>
      <ProfileNav />
      <div className={styles.rightCard}>
        <div className={styles.title}>Личный кабинет</div>
        <div className={styles.userInfo}>
          <span>Фамилия Имя:</span>
          <div>{user?.name}</div>
        </div>
        <div className={styles.userInfo}>
          <span>Сделано заказов на сумму:</span>
          <div>{price()} ₽</div>
        </div>
        <div className={styles.userInfo}>
          <span>Контактный телефон:</span>
          <div>{user?.phone}</div>
        </div>
        <div className={styles.userInfo}>
          <span>Контактный E-mail:</span>
          <div>{user?.mail}</div>
        </div>
        <div className={styles.userInfo}>
          <span>Изображения профиля:</span>
          <img src="" alt="photo" />
        </div>
        <button className={styles.profileBtn}>Изменить</button>
      </div>
    </div>
  );
};

export default ProfileCard;
