import RequestForm from "pages/requestForm/RequestForm";
import styles from "./profile.module.scss";
import ProfileNav from "./profileNav";
import { useState } from "react";

const Orders = () => {
  const [alert, setAlert] = useState(false);

  return (
    <div className={styles.profile}>
      <ProfileNav />
      <RequestForm setAlert={setAlert} />
    </div>
  );
};

export default Orders;
