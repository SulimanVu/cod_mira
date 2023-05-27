import React, { useEffect } from "react";
import styles from "./request.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  deleteRequest,
  fetchRequest,
  updateRequest,
} from "../../features/requestSlice";
import { motion } from "framer-motion";
import Staticmap from "../Map/Staticmap";

import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import Card from "../Card/Card";

const Request = () => {
  const { id } = useParams();
  const [card, setCard] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequest());
  }, [dispatch]);

  const request = useSelector((state) =>
    state.request.request.filter((item) => {
      return item.user === id;
    })
  );

  const handleDelete = (id) => {
    toast.success("Ваша заявка отменена...", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    dispatch(deleteRequest(id));
  };

  const handlePay = (id) => {
    setCard(false);
    dispatch(updateRequest(id));
  };

  return (
    <>
      {card ? (
        <div>
          <ToastContainer limit={1} />
          {request.map((item, index) => {
            return (
              <div className={styles.request} key={index}>
                <motion.div
                  transition={{ duration: 1 }}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={styles.info}
                >
                  <div className={styles.text}>
                    <div>Заявка №&ensp;{index + 1}</div>
                    <div className={styles.delete}>
                      <button onClick={() => handleDelete(item._id)}>x</button>
                    </div>
                    <div>
                      <span>Водитель :</span>&ensp; {item.car.name}
                    </div>
                    <div>
                      <span>Номер для связи :</span>&ensp; {item.car.phone}
                    </div>
                    <div>
                      <span>Ваша машина :</span>&ensp; {item.car.model}
                    </div>
                    <div>
                      <span>Отправка от :</span>&ensp; {item.from}
                    </div>
                    <div>
                      <span>Прибытие товара в :</span>&ensp; {item.to}
                    </div>
                    <div>
                      <span>Общее растояние :</span>&ensp; {item.km} км
                    </div>
                    <div>
                      <span>Вес груза :</span>&ensp; {item.kg} кг
                    </div>
                    {item.payed ? (
                      <div>
                        {" "}
                        Товар оплачен :&ensp;
                        <span>
                          Ожидайте, водитель лично свяжется с вами, чтобы
                          обсудить детали.
                        </span>
                      </div>
                    ) : (
                      <div>
                        К оплате :&ensp; {item.price} <span>₽</span>
                      </div>
                    )}

                    <div className={styles.pay}>
                      {item.payed ? null : (
                        <button onClick={() => handlePay(item._id)}>
                          Оплатить
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.img}>
                    {/* Отрисовка Карты */}
                    <Staticmap request={item} />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      ) : (
        <Card setCard={setCard} />
      )}
    </>
  );
};

export default Request;
