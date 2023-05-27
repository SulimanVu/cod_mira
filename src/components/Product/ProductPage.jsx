import React from 'react';
import { ProductCard } from "./ProductCard/ProductCard"
import styles from "./ProductPage.module.scss"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const ProductPage = () => {
    let categories = useSelector((state) => state.categorySlice.categories)

  if (categories.length >= 3) categories = categories.slice(0, 2);

  return (
    <div className={styles.productPageContainer}>
      <h2 className={styles.productTitle}>НАШ АССОРТИМЕНТ</h2>
      <div>
        {categories.map((obj, i) => (
          <>
            <div className={styles.categoryName}>
              {obj.name} <br />
              <i style={{ marginTop: 50, cursor: "pointer" }}>
                <Link to={"/categories/" + obj._id}>перейти ➔</Link>
              </i>
            </div>
            <div className={styles.cards}>
              {obj.products.map((item) => (
                <ProductCard img={item.image} title={item.name} />
              ))}
            </div>
          </>
        ))}
      </div>
      <Link to="/categories">
        <p style={{ cursor: "pointer" }}>перейти к каталогу товаров</p>
      </Link>
    </div>
  );
};
