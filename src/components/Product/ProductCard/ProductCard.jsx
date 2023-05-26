import React, {FC} from 'react';
import styles from "./ProductCard.module.scss"
import { useSelector } from 'react-redux';


export const ProductCard = ({img, title}) => {
    // const categories = useSelector((state) => state.categorySlice.categories)

    return (
        <div className={styles.container}>
            <img className={styles.img} src={img} alt="" />
            <h2 className={styles.title}>{title}</h2>
        </div>
    );
};