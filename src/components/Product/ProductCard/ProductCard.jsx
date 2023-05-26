import React, {FC} from 'react';
import styles from "./ProductCard.module.scss"


export const ProductCard = ({img, title}) => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={img} alt="" />
            <h2 className={styles.title}>{title}</h2>
        </div>
    );
};