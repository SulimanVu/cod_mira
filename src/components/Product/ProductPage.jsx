import React, { useEffect } from 'react';
import { ProductCard } from "./ProductCard/ProductCard"
import styles from "./ProductPage.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from 'features/categorySlice';
import { Link } from 'react-router-dom';

const FEATURES = [
    { "img": "https://krasunia.ru/wp-content/uploads/0/c/9/0c94bc88525db1c7659f3ca09a7abf15.jpeg", "title": "Новый урожай" },
    { "img": "https://krasunia.ru/wp-content/uploads/0/c/9/0c94bc88525db1c7659f3ca09a7abf15.jpeg", "title": "Шашлыки" },
    { "img": "https://krasunia.ru/wp-content/uploads/0/c/9/0c94bc88525db1c7659f3ca09a7abf15.jpeg", "title": "Новинки" },
    { "img": "https://krasunia.ru/wp-content/uploads/0/c/9/0c94bc88525db1c7659f3ca09a7abf15.jpeg", "title": "Хиты" },
    { "img": "https://krasunia.ru/wp-content/uploads/0/c/9/0c94bc88525db1c7659f3ca09a7abf15.jpeg", "title": "Ешь уникальное" },
    { "img": "https://krasunia.ru/wp-content/uploads/0/c/9/0c94bc88525db1c7659f3ca09a7abf15.jpeg", "title": "Сыры" },
]

export const ProductPage = () => {
    let categories = useSelector((state) => state.categorySlice.categories)
    console.log(categories);
    
    // if(categories.length >=3 ) categories = categories.slice(2)

    return (
        <div style={{width: "80%", margin: 'auto'}}>
            <h2 className={styles.productTitle}>НАШ АССОРТИМЕНТ</h2>
            <div >
                {categories.map((obj, i) =>
                    <>
                        <div className={styles.categoryName}>{obj.name} <br/><i style={{ marginTop: 50, cursor: 'pointer'}}>перейти ➔</i></div>
                        <div className={styles.cards}>
                            {obj.products.map(item => <ProductCard img={item.image} title={item.name} />)}
                        </div>
                    </>
                )}
            </div>
            <Link to="/categories"><p style={{cursor: 'pointer'}}>перейти к каталогу товаров</p></Link>
        </div>
    );
};