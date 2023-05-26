import React, { useState } from 'react';
import styles from "./main.module.scss"
import { LoginForm } from 'components/LoginModal/LoginForm/LoginForm';
// import { LoginForm } from '';


const Main = () => {
    const [active,setActive] = useState(false)
    
    return (
        <div>
            <LoginForm activeLogin={active}/>
        
        </div>
    );
};

export default Main;