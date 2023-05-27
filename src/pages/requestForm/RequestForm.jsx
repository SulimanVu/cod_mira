import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../../features/requestSlice";
import "./reques.css";
import Headerform from "./Headerform";
import Map from "../../components/Map/Map";

import { ToastContainer, toast } from "react-toastify";
import { fetchAllUsers } from "features/applicationSlice";
import CardsMapper from "components/CardsMapper/CardsMapper";

const RequestForm = ({ setAlert }) => {
  const dispatch = useDispatch();
  const likedCards = useSelector((state) => state.request.likedProd);
  const route = useSelector((state) => state.request.mapRoute);
  const theUser = useSelector((state) =>
    state.application.users.find(
      (item) => item._id === localStorage.getItem("id")
    )
  );
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [kg, setKg] = useState("");
  const [price, setPrice] = useState("");
  const [step, setStep] = useState(1);

  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleKg = (e) => {
    setKg(e.target.value);
    setPrice(e.target.value * 100);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };
  const offStepChange = () => {
    setStep(step - 1);
  };

  const handleAddRequest = () => {
    toast.success("Ваша заявка отправлена на рассмотрение...", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      setAlert(true);
    }, 3000);

    const km = (route.summary.totalDistance / 1000).toFixed(1);

    const waypoint1 = JSON.parse(route.waypoint1);
    const waypoint2 = JSON.parse(route.waypoint2);

    const latLngFrom = waypoint1.latLng;
    const from = waypoint1.name;
    const latLngTo = waypoint2.latLng;
    const to = waypoint2.name;

    dispatch(
      addRequest({
        user: theUser._id,
        kg,
        price,
        latLngFrom,
        latLngTo,
        from,
        to,
        km,
        product: likedCards,
      })
    );
  };

  return (
    <>
      <ToastContainer limit={1} />
      <div className="requestbody">
        <Headerform step={step} onStepChange={onStepChange} />
        <div className="form-stepper">
          <div className="form-stepper__body">
            {step === 1 && (
              <div className="form-stepper__step1">
                <h2>Заявка на перевозку</h2>
                <div className="input-group">
                  <label htmlFor="fullname">Ваше имя</label>
                  <input
                    disabled={true}
                    value={user}
                    type="text"
                    placeholder={theUser?.name}
                    name="fullname"
                    onChange={handleUser}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    disabled={true}
                    value={email}
                    type="email"
                    required
                    name="email"
                    placeholder={theUser?.mail}
                    onChange={handleEmail}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Телефон</label>
                  <input
                    disabled={true}
                    value={phone}
                    type="password"
                    required
                    name="password"
                    placeholder={theUser?.phone}
                    onChange={handlePhone}
                  />
                </div>
              </div>
            )}
            {/* Background form i.e step 2 */}
            {step === 2 && (
              <div className="form-stepper__step2">
                <div className="txt">Введите маршрут и массу груза</div>
                <Map />
                <div className="input-group">
                  <h3>Масса груза :</h3>
                  <input
                    value={kg}
                    type="text"
                    name="jobtitle"
                    className="weightInput"
                    onChange={handleKg}
                  />
                </div>
              </div>
            )}

            {/* Final  form i.e step 3 */}
            {step === 3 && (
              <div className="form-stepper__step3">
                <h2>Выберите товар</h2>
                <div className="form-products">
                  <CardsMapper />
                </div>
              </div>
            )}
            {step === 4 && (
              <div className="form-stepper__step3">
                <h2>Подтверждение заявки</h2>
              </div>
            )}
          </div>
          <div className="form-stepper__action">
            {step >= 0 && (
              <button
                className={`btn btn-secondary ${step === 0 && "close"}`}
                onClick={() => offStepChange()}
              >
                Назад
              </button>
            )}

            {step < 4 ? (
              <button
                className="btn btn-primary"
                onClick={() => onStepChange()}
              >
                Далее
              </button>
            ) : step === 4 ? (
              <button
                className="btn btn-primary sign"
                onClick={() => handleAddRequest()}
              >
                Отправить
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default RequestForm;
