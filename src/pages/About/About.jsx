import React, { useState } from 'react';
import styles from "./about.module.scss"
import { Portal } from 'components/Modal/Portal/Portal';
import { LoginForm } from 'components/LoginModal/LoginForm/LoginForm';
import SignUp from 'components/SignUp/SignUp';

const About = () => {
    const [activeLogin,setActiveLogin] = useState(false)
    return (
        <div>
          <div onClick={() => setActiveLogin(true)}>Вход</div>
         
           <LoginForm activeLogin={activeLogin} setActiveLogin={setActiveLogin}/>
       
        </div>
    );
};

export default About;