import React from "react";
import styles from "./header.module.scss";
import logo from "../../icons/logo.svg"
import lkicon from "../../icons/user_icon_150670.png"
import basketIcon from "../../icons/353439-basket-buy-cart-ecommerce-online-purse-shop-shopping_107515.png"

const Header = () => {
  return (
  <div className={styles.header} >
    <div className="container" >
    <div className={styles.nav_list}>
  <div className={styles.nav_list_item}>
    <div className={styles.logo}><img src={logo} alt="" /></div>
      <ul className={styles.ul}>
        <li>Кто мы</li>
        <li>Поставщики</li>
        <li>Доставка</li>
        <li>О нас</li>
      </ul>
      </div>

      <div className={styles.btn}>
        <button className={styles.btn_item}><img src={lkicon} alt="" /></button>
        <button className={styles.btn_item}><img src={basketIcon} alt="" /></button>
      </div>
    </div>
    </div>
    
  </div>
  )

};

export default Header;
