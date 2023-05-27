import styles from "./profile.module.scss";
import profileNav from "./profileNav";
import ProfileNav from "./profileNav";

const CreditCard = () => {
    return (
        <div className={styles.profile}>
            <ProfileNav/>
            <div className={styles.rightCard}>

            </div>
        </div>
    );
}

export default CreditCard;