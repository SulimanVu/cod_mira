import React, {FC} from 'react';
import {ProductCard} from "./ProductCard/ProductCard"
import styles from "./ProductPage.module.scss"


const FEATURES = [
    {"img": "https://krasunia.ru/wp-content/uploads/0/c/9/0c94bc88525db1c7659f3ca09a7abf15.jpeg", "title": "Новый урожай"},
    {"img": "https://krasunia.ru/wp-content/uploads/0/c/9/0c94bc88525db1c7659f3ca09a7abf15.jpeg", "title": "Шашлыки"},
    {"img": "https://krasunia.ru/wp-content/uploads/0/c/9/0c94bc88525db1c7659f3ca09a7abf15.jpeg", "title": "Новинки"},
    {"img": "https://krasunia.ru/wp-content/uploads/0/c/9/0c94bc88525db1c7659f3ca09a7abf15.jpeg", "title": "Хиты"},
    {"img": "https://krasunia.ru/wp-content/uploads/0/c/9/0c94bc88525db1c7659f3ca09a7abf15.jpeg", "title": "Ешь уникальное"},
    {"img": "https://krasunia.ru/wp-content/uploads/0/c/9/0c94bc88525db1c7659f3ca09a7abf15.jpeg", "title": "Сыры"},
    // {"img": "https://krasunia.ru/wp-content/uploads/0/c/9/0c94bc88525db1c7659f3ca09a7abf15.jpeg", "title": "Сыры"},
    // {"img": "https://krasunia.ru/wp-content/uploads/0/c/9/0c94bc88525db1c7659f3ca09a7abf15.jpeg", "title": "Сыры"},
]


export const ProductPage = () => {
    return (
        <div className={styles.productTitle}>
            <h2>НАШ АССОРТИМЕНТ</h2>
            <div className={styles.cards}>
                {FEATURES.map(({img, title}) => <ProductCard img={img} title={title} />)}
            </div>
        </div>
    );
};