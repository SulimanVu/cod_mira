import { useEffect } from "react";
import styles from "./profile.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "features/applicationSlice";


const ProfileNav = () => {

    const myId = localStorage.getItem("id");
    const dispatch = useDispatch();
    const user = useSelector((state) =>
        state.application.users
    );
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch])


    return (
        <div className={styles.leftCard}>
            <ul>
                <li><Link to="/profile" className={styles.activeLink}>Личные данные</Link></li>
                <li><Link to="/profile/bookmarks">Закладки</Link></li>
                <li><Link to="/profile/orders">Заказы</Link></li>
                <li><Link to="/profile/credit">Моя карта</Link></li>
                <li><Link to="/profile/address">Адреса</Link></li>
                <li><Link to="/profile/contacts">Контакты</Link></li>
                {
                    user?.map(item => {
                        if (item.role == 'Фермер' && item._id == myId) {
                            return <li><Link to="/profile/addProd">Добавить товар</Link></li>
                        }
                    })
                }
                <hr />
                <li><a href="">Exit</a></li>
                <hr/>
                {/* TODO: сделать выход из аккаунта, удаление токена не помагает, нужно удалить REPLAIN_ */}
                <li><Link to="/" onClick={()=> localStorage.removeItem("token")}>Exit</Link></li>

            </ul>
        </div>
    );
}

export default ProfileNav;