import ProfileNav from "./profileNav";
import styles from "./profile.module.scss"

const Contacts = () => {
    return (
        <div className={styles.profile}>
            <ProfileNav/>
            <div className={styles.rightCard}>
                <div className={styles.title}>Учетная запись</div>
                <form action="" className={styles.contactFrom}>
                    <div className={styles.formRow}>
                        <label htmlFor="name">Имя и Фамилия:</label>
                        <input type="text" id="name" name="name"></input>
                    </div>
                    <div className={styles.formRow}>
                        <label htmlFor="email">E-Mail:</label>
                        <input type="email" id="email" name="email"></input>
                    </div>
                    <div className={styles.formRow}>
                        <label htmlFor="phone">Телефон:</label>
                        <input type="tel" id="phone" name="phone"></input>
                    </div>
                    <div className={styles.formRow}>
                        <label htmlFor="birthday">День рождения:</label>
                        <input type="date" id="birthday" name="birthday"></input>
                    </div>
                    <button className={styles.profileBtn}>Сохранить</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;