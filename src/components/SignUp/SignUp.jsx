import React, { useState } from "react";
import { useDispatch } from "react-redux";
import  {authThunk}  from "../../features/applicationSlice";
import styles from "./SignUp.module.scss";
import { ToastContainer, toast } from "react-toastify";



const SignUp = ({ activeAuth, setActiveAuth }) => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [selectValue,setSelectValue] = useState("Фермер")
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  const Toaster = (text) => {
    toast.error(text);
  };

  const handleValidation = ({
    login,
    password,
    name,
    surname,
    phone,
    mail,
  }) => {
    if (password === "") {
      Toaster("Пароль - обьязательное поле!");
      return false;
    } else if (password.length < 8) {
      Toaster("Пароль не должен быть меньше 8 символов!");
      return false;
    } else if (login === "") {
      Toaster("Логин - обьязательное поле!");
      return false;
    } else if (login.length < 5) {
      Toaster("Пароль не должен быть меньше 8 символов!");
      return false;
    } else if (name === "") {
      Toaster("Имя - обьязательное поле!");
      return false;
    } else if (surname === "") {
      Toaster("Фамилия - обьязательное поле!");
      return false;
    } else if (phone === "") {
      Toaster("Телефон - обьязательное поле!");
      return false;
    } else if (typeof phone === "number") {
      Toaster("Номер должен содержать только цифры");
      return false;
    } else if (phone.length < 11) {
      Toaster("Номер телефона не должен быть меньше 11 символов!");
      return false;
    } else if (mail === "") {
      Toaster("Почта - обьязательное поле!");
      return false;
    } else if (login === password) {
      Toaster("Слишком легкий пароль!");
      return false;
    }
    return true;
  };

  const handleSignUp = (e, { login, password, name, surname, phone, mail }) => {
    e.preventDefault();

    if (handleValidation({ login, password, name, surname, phone, mail })) {
      dispatch(authThunk({ login, password, name, surname, phone, mail,selectValue }));
      setName("");
      setSurname("");
      setPhone("");
      setMail("");
      setLogin("");
      setPassword("");
    }
  };

  const [step, setStep] = useState(0);

  return (
    <>
      <ToastContainer />
      <div
        className={activeAuth ? styles.nomodal : styles.modal}
        onClick={() => setActiveAuth(false)}
      >
        <form className={styles.content} onClick={(e) => e.stopPropagation()}>
          <h2>Регистрация</h2>
          <div></div>
          {step === 0 ? (
            <>
              <label>Имя:</label>
              <input
                type="text"
                placeholder="Введите имя:"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Фамилия:</label>
              <input
                type="text"
                placeholder="Введите фамилию:"
                className={styles.input}
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              <label>Номер:</label>
              <input
                type="number"
                maxLength={16}
                className={styles.input}
                placeholder="Введите номер телефона:"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label>Почта:</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Введите почту:"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <label>Вы:</label>
              <select value={selectValue} onChange={(e)=> setSelectValue(e.target.value)} className={styles.select}>
                <option value={"Фермер"}>Фермер</option>
                <option value={"Клиент"}>Клиент</option>
              </select>

              <button
                className={styles.btnAfter}
                onClick={() => setStep(step + 1)}
              >
                Далее
              </button>
            </>
          ) : (
            <>
              <label>Логин:</label>
              <input
                type="text"
                placeholder="Введите логин:"
                className={styles.input}
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <label>Пароль:</label>
              <input
                type="password"
                minLength={8}
                placeholder="Введите пароль:"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className={styles.btn} onClick={() => setStep(step - 1)}>
                Назад
              </button>
              <button
                onClick={(e) =>
                  handleSignUp(e, {
                    login,
                    password,
                    name,
                    surname,
                    phone,
                    mail,
                    selectValue
                  })
                }
                className={styles.btn}
              >
                Зарегистрироваться
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default SignUp;