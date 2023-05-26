import styles from "./profile.module.scss";
import profileNav from "./profileNav";
import ProfileNav from "./profileNav";

const Orders = () => {
    return (
        <div className={styles.profile}>
            <ProfileNav/>
            <div className={styles.rightCard}>
                <select className={styles.filterBookmarks}>
                    <option ></option>
                </select>
            {/*    TODO: добавить карточки*/}
            </div>
        </div>
    );
}

export default Orders;