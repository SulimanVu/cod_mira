import React, { useEffect } from "react";
import styles from "./Category.module.scss";
import { ProductCard } from "components/Product/ProductCard/ProductCard";

const CategoryCardsPage = ({products}) => {
    return (
        <div className={styles.cards}>
            {products?.map(item => <ProductCard img={item.image} title={item.name} />)}
        </div>
    );
}

export default CategoryCardsPage