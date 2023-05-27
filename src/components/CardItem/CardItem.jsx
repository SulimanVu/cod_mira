import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./cardItem.module.scss";
import { addToBascket, fetchFermersThunk } from "features/applicationSlice";
import { Link, useLocation, useParams } from "react-router-dom";
import { likeProd } from "features/requestSlice";

const CardItem = ({ image, description, price, fermer, _id }) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState();
  const authData = useSelector((state)=> state.application.authData)
  const backet =  useSelector((state)=> state.application.bascket)
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const path = useLocation()
  console.log(path)

  const currentFermer = useSelector((state) =>
    state.application.fermers.find((item) => item._id == fermer)
  );

  const handleLike = (e) => {
    e.preventDefault();
    setLike(!like);
    dispatch(likeProd(_id));
  };

  useEffect(() => {
    dispatch(fetchFermersThunk());
  }, [dispatch]);


  return (

    <div key={_id} className={`${styles.cardItem} ${like && styles.active}`}>
      <div
        onClick={handleLike}
        className={like ? styles.like : styles.dislike}
      ></div>
      <img src={`${image}`} alt="#" />
      <div className={styles.info}>
        <div className={styles.spanBlock}>
          <span className={styles.description}>
            {description && description.length > 26
              ? description.slice(0, 25) + "..."
              : description}
          </span>
          <span className={styles.fermer}>
            <Link to={`/fermer/${currentFermer?._id}`}>
              {currentFermer?.name}
            </Link>
          </span>
          <span className={styles.price}> Цена: {price} ₽</span>

        </div>
        { path?.pathname === "/bascket" ? null
        :( 
        <button
          disabled={!token && true}
          onClick={() => dispatch(addToBascket({ id, bascket: _id }))}
        >
          {backet?.find((item)=> item._id === _id) ? <span className={styles.succes}>В корзине</span> : "В корзину"}
        </button>

  )
        }

      </div>
    </div>
  );
};

export default CardItem;
