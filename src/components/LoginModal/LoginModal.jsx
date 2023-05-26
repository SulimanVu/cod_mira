import { Portal } from "components/Modal/Portal/Portal";
import React, { useState } from "react";
import { LoginForm } from "./LoginForm/LoginForm";


const LoginModal = ({activeLogin,setActiveLogin}) => {

  return (
    <Portal>
        <LoginForm activeLogin={activeLogin} setActiveLogin={setActiveLogin}/>
    </Portal>
  
  
  )

};

export default LoginModal;
