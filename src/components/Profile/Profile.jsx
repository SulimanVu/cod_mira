import styles from "./profile.module.scss";
import ProfileNav from "./profileNav";
import Profile from "./Profile";

const ProfileCard = () => {
    return (
        <div className={styles.profile}>
            <ProfileNav/>
            <div className={styles.rightCard}>
                <div className={styles.title}>Личный кабинет</div>
                <div className={styles.userInfo}>
                    <span>Фамилия Имя:</span>
                    <div>Иван Трошев</div>
                </div>
                <div className={styles.userInfo}>
                    <span>Сумма заказов:</span>
                    <div>1000 руб</div>
                </div>
                <div className={styles.userInfo}>
                    <span>Контактный телефон:</span>
                    <div>+7 928 547 38 32</div>
                </div>
                <div className={styles.userInfo}>
                    <span>Контактный E-mail:</span>
                    <div>Bsdf@kil.ru</div>
                </div>
                <div className={styles.userInfo}>
                    <span>Изображения профиля:</span>
                    <img src="" alt="photo"/>
                </div>
                <button className={styles.profileBtn}>Изменить</button>
            </div>
        </div>
    );
}

export default ProfileCard;