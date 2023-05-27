import React from "react";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Cards from "react-credit-cards-2";
import { useState } from "react";
import styles from "./card.module.scss";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./utils";

const Card = ({ setCard }) => {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("4455 **** **** ****");

  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (
      name &&
      cvc.length === 3 &&
      number.length === 19 &&
      expiry.length === 5
    ) {
      setCard(true);
      setCvc("");
      setExpiry("");
      setFocus("");
      setName("");
      setNumber("");
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
      setNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
      setExpiry(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
      setCvc(target.value);
    } else if (target.name === "name") {
      setName(target.value);
    }
  };

  return (
    <div className={styles.main}>
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
      />
      <form>
        <div className={styles.first}>
          <input
            type="tel"
            name="number"
            placeholder="4455 0000 0000 0000"
            value={number}
            maxLength={20}
            onChange={handleInputChange}
            onFocus={(e) => setFocus(e.target.name)}
            onClick={() => setNumber("")}
          />
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name Here"
            value={name}
            maxLength={25}
            onChange={handleInputChange}
            onFocus={(e) => setFocus(e.target.name)}
          />{" "}
        </div>
        <div className={styles.second}>
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            maxLength={5}
            pattern="\d\d/\d\d"
            value={expiry}
            required
            onChange={handleInputChange}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="tel"
            name="cvc"
            pattern="\d{3,4}"
            placeholder="CVC"
            value={cvc}
            required={true}
            maxLength={3}
            onChange={handleInputChange}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </div>
      </form>
      {error ? <div> Заполните все поля! </div> : null}
      <button onClick={() => handleSubmit()}>Pay</button>
    </div>
  );
};

export default Card;

// TODO  {error ? <div> Заполните все поля! </div> : null}
