import styles from "./profile.module.scss";


const ProfileNav = () => {
    return (
        <div className={styles.leftCard}>
            <ul>
                <li><a className={styles.activeLink} href="">Личные данные</a></li>
                <li><a href="">Закладки</a></li>
                <li><a href="">Заказы</a></li>
                <li><a href="">Моя карта</a></li>
                <li><a href="">Адреса</a></li>
                <li><a href="">Контакты</a></li>
                <hr/>
                <li><a href="">Exit</a></li>
            </ul>
        </div>
    );
}

export default ProfileNav;