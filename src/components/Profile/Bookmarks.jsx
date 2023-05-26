import styles from "./profile.module.scss";
import profileNav from "./profileNav";
import ProfileNav from "./profileNav";

const Bookmarks = () => {
    return (
        <div className={styles.profile}>
            <ProfileNav/>
            <div className={styles.rightCard}>
                <select className={styles.filterBookmarks}>
                    <option value="">filter 1</option>
                    <option value="">filter 2</option>
                </select>
                {/*    TODO: добавить карточки*/}
            </div>
        </div>
    );
}

export default Bookmarks;