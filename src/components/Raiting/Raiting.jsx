import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { rateMovie, userActions } from "features/applicationSlice";


const Rating = ({ id }) => {
  const myId = localStorage.getItem("id")
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const handleClick = () => {
    dispatch(userActions.showRating());
    dispatch(rateMovie({ rating, fermer: id, myId }));
  };
  const handleFocus = (num) => {
    setRating(num);
    console.log(rating);
  };
  return (
    <div className="modal1">
      <h1 className="modalTitile">Ваша оценка</h1>
      <div className="modalH">
        <button
          onMouseOver={() => handleFocus(1)}
          onClick={() => handleClick()}
          className="modalButton"
        >
          1
        </button>
        <button
          onMouseOver={() => handleFocus(2)}
          onClick={() => handleClick()}
          className="modalButton"
        >
          2
        </button>
        <button
          onMouseOver={() => handleFocus(3)}
          onClick={() => handleClick()}
          className="modalButton"
        >
          3
        </button>
        <button
          onMouseOver={() => handleFocus(4)}
          onClick={() => handleClick()}
          className="modalButton"
        >
          4
        </button>
        <button
          onMouseOver={() => handleFocus(5)}
          onClick={() => handleClick()}
          className="modalButton"
        >
          5
        </button>
        <button
          onMouseOver={() => handleFocus(6)}
          onClick={() => handleClick()}
          className="modalButton"
        >
          6
        </button>
        <button
          onMouseOver={() => handleFocus(7)}
          onClick={() => handleClick()}
          className="modalButton"
        >
          7
        </button>
        <button
          onMouseOver={() => handleFocus(8)}
          onClick={() => handleClick()}
          className="modalButton"
        >
          8
        </button>
        <button
          onMouseOver={() => handleFocus(9)}
          onClick={() => handleClick()}
          className="modalButton"
        >
          9
        </button>
        <button
          onMouseOver={() => handleFocus(10)}
          onClick={() => handleClick()}
          className="modalButton"
        >
          10
        </button>
      </div>
      <div className="modalP">
        <p>очень плохо</p>
        <p>отлично</p>
      </div>
    </div>
  );
};

export default Rating;