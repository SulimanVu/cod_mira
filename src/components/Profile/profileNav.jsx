import { useEffect } from "react";
import styles from "./profile.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "features/applicationSlice";

const ProfileNav = () => {
  const myId = localStorage.getItem("id");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.application.users);

  const handleExit = () => {
    navigate("/");
    localStorage.clear();
    window.reload();
  };
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className={styles.leftCard}>
      <ul>
        <li>
          <Link to="/profile" className={styles.activeLink}>
            Личные данные
          </Link>
        </li>
        <li>
          <Link to="/profile/bookmarks">Закладки</Link>
        </li>
        <li>
          <Link to="/profile/orders">Заказы</Link>
        </li>
        <li>
          <Link to="/profile/credit">Моя карта</Link>
        </li>
        <li>
          <Link to="/profile/address">Адреса</Link>
        </li>
        <li>
          <Link to="/profile/contacts">Контакты</Link>
        </li>

        {user?.map((item) => {
          if (item.role == "Фермер" && item._id == myId) {
            return (
              <li>
                <Link to="/profile/addProd">Добавить товар</Link>
              </li>
            );
          }
        })}
        <hr />
        <li>
          <Link to="/" onClick={handleExit}>
            Exit
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileNav;
