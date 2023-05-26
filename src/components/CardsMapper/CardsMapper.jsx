import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "../CardItem/CardItem";
import { fetchProd } from "../../features/productSlice";

const CardsMapper = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productSlice.products);

  useEffect(() => {
    dispatch(fetchProd());
  }, [dispatch]);

  return (
    <div>
      {products.map((item) => (
        <CardItem {...item} />
      ))}
    </div>
  );
};

export default CardsMapper;
