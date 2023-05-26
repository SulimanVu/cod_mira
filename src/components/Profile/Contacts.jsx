import ProfileNav from "./profileNav";
import styles from "./profile.module.scss"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "features/applicationSlice";

const Contacts = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
const dispatch = useDispatch()
    const handleData = ()=>{
        dispatch(updateUser({
            name,
            surname,
            phone,
            mail
        }))

    }
    return (
        <div className={styles.profile}>
            <ProfileNav/>
            <div className={styles.rightCard}>
                <div className={styles.title}>Учетная запись</div>
                <form action="" className={styles.contactFrom}>
                    <div className={styles.formRow}>
                        <label htmlFor="name">Имя</label>
                        <input onChange={(e)=> setName(e.target.value)} value={name} type="text" id="name" name="name"></input>
                    </div>
                    <div className={styles.formRow}>
                        <label htmlFor="name">Фамилия</label>
                        <input onChange={(e)=> setSurname(e.target.value)} value={surname} type="text" id="name" name="name"></input>
                    </div>
                    <div className={styles.formRow}>
                        <label htmlFor="email">E-Mail:</label>
                        <input onChange={(e)=> setMail(e.target.value)} value={mail} type="email" id="email" name="email"></input>
                    </div>
                    <div className={styles.formRow}>
                        <label htmlFor="phone">Телефон:</label>
                        <input value={phone} onChange={(e)=> setPhone(Number(e.target.value))} type="tel" id="phone" name="phone"></input>
                    </div>
                    <button onClick={handleData} className={styles.profileBtn}>Сохранить</button>
                </form>

            </div>
        </div>
    );
}

export default Contacts;