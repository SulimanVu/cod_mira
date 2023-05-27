import styles from "./profile.module.scss";
import {Link, Outlet} from "react-router-dom";
import contacts from "./Contacts";


const ProfileNav = () => {
    return (
        <div className={styles.leftCard}>
            <ul>
                <li><Link to="/profile" className={styles.activeLink}>Личные данные</Link></li>
                <li><Link to="/profile/bookmarks">Закладки</Link></li>
                <li><Link to="/profile/orders">Заказы</Link></li>
                <li><Link to="/profile/credit">Моя карта</Link></li>
                <li><Link to="/profile/address">Адреса</Link></li>
                <li><Link to="/profile/contacts">Контакты</Link></li>
                <hr/>
                {/* TODO сделать выход из аккаунта, удаление токена не помагает, нужно удалить REPLAIN_ */}
                <li><Link to="/" onClick={()=> localStorage.clear()}>Exit</Link></li>
            </ul>
        </div>
    );
}

export default ProfileNav;