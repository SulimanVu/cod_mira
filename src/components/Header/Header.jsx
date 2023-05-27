import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import logo from "../../icons/logo.svg";
import lkicon from "../../icons/user_icon_150670.png";
import basketIcon from "../../icons/353439-basket-buy-cart-ecommerce-online-purse-shop-shopping_107515.png";
import { Portal } from "components/Modal/Portal/Portal";

import registerIcon from "icons/auth_sim_icon_180993.png"

import { LoginModal } from "components/LoginModal";
import SignUp from "components/SignUp/SignUp";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const [activeAuth, setActiveAuth] = useState(false);
  const [activeLogin, setActiveLogin] = useState(false);
  const authData = useSelector((state)=> state.application.authData)


  return (
    <div className={styles.header}>
      <div className={styles.nav_list}>
        <div className={styles.nav_list_item}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <ul className={styles.ul}>
            <li>Кто мы</li>
            <li onClick={() => navigate("/fermers")}>Поставщики</li>
            <li>Доставка</li>
            <li>О нас</li>
          </ul>
        </div>
        <div className={styles.btn}>
          {
          authData ?(
            <img className={styles.btn_item} src={lkicon} onClick={()=> navigate("/profile")}/>
          ):(
            <>
            <button
            onClick={() => setActiveAuth(!activeAuth)}
            className={styles.btn_item}>
            <img src={registerIcon} alt="" />
          </button>
              <button
                  onClick={() => setActiveLogin(!activeLogin)}
                  className={styles.btn_item}
              >
                <img src={lkicon} alt="" />
              </button>
          <button
            onClick={() => navigate("/bascket")}
            className={styles.btn_item}
          >
            <img src={basketIcon} alt="" />
          </button>
          </>
          )
}
        </div>
      </div>
      <LoginModal activeLogin={activeLogin} setActiveLogin={setActiveLogin} />
      <Portal>
        <SignUp activeAuth={activeAuth} setActiveAuth={setActiveAuth} />
      </Portal>
    </div>
  );
};

export default Header;
