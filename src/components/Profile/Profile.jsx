import styles from "./profile.module.scss";
import ProfileNav from "./profileNav";
import Profile from "./Profile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "features/applicationSlice";

const ProfileCard = () => {
    const dispatch = useDispatch()
    const id = localStorage.getItem('id')
    console.log(id)

    const authData = useSelector((state)=> state.application?.authData)
    console.log(authData)
    const price = ()=>{
        if(authData?.bascket){
            return authData?.bascket.reduce((sum,item)=>{
                return sum+= item.price
        },0)
    }else{
        return 0
    }
}
    
    useEffect(()=>{
        dispatch(fetchAuthUser(id))

    },[])
    return (
        <div className={styles.profile}>
            <ProfileNav/>
            <div className={styles.rightCard}>
                <div className={styles.title}>Личный кабинет</div>
                <div className={styles.userInfo}>
                    <span>Фамилия Имя:</span>
                    <div>{authData?.name}</div>
                </div>
                <div className={styles.userInfo}>
                    <span>Сумма заказов:</span>
                    <div>{price()}</div>
                </div>
                <div className={styles.userInfo}>
                    <span>Контактный телефон:</span>
                    <div>{authData?.phone}</div>
                </div>
                <div className={styles.userInfo}>
                    <span>Контактный E-mail:</span>
                    <div>{authData?.mail}</div>
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