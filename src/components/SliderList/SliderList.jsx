import React from "react";
import styles from "./sliderList.module.scss";
import Slide from "../Slide/Slide";
const SliderList = () => {
  return (
    <div className={styles.SliderList}>
      <Slide image="https://cdn.esh-derevenskoe.ru/image/cache/catalog/ca3536-200x200.jpg?v=3" />
      <Slide image="https://cdn.esh-derevenskoe.ru/image/cache/catalog/5bb1e4-200x200.jpg?v=3" />
      <Slide image="https://cdn.esh-derevenskoe.ru/image/cache/catalog/587e85-200x200.jpg?v=3" />
      <Slide image="https://cdn.esh-derevenskoe.ru/image/cache/catalog/13a700-200x200.jpg?v=3" />
      <Slide image="https://cdn.esh-derevenskoe.ru/image/cache/catalog/f51d6f-200x200.jpg?v=3" />
      <Slide image="https://cdn.esh-derevenskoe.ru/image/cache/catalog/aec48c-200x200.jpg?v=3" />
      <Slide image="https://cdn.esh-derevenskoe.ru/image/cache/catalog/f24a3d-200x200.jpg?v=3" />
      <Slide image="https://cdn.esh-derevenskoe.ru/image/cache/catalog/1c2c41-200x200.jpg?v=3" />
    </div>
  );
};

export default SliderList;
