import React, { useEffect } from "react";
import styles from "./Category.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from "features/categorySlice";
import { ProductCard } from "components/Product/ProductCard/ProductCard";
import CategoryCardsPage from "./CategoryCardsPage";

const Category = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.categorySlice.categories)
    let mainCatProducts = categories[0]?.products

    useEffect(() => {
        dispatch(fetchCategory())
    }, [dispatch, mainCatProducts])
    
    const handleSelectCategory = (index) => {
        mainCatProducts = categories[index]?.products
        return mainCatProducts
    }

    return (
        <div className={styles.container}>
            <section className={styles.categories}>
                <div className={styles.select}>
                    {categories.map((obj, i) =>
                        <div 
                            className={styles.selectItem}
                            onClick={(e) => handleSelectCategory(i)}
                        >{obj.name}</div>
                    )}
                </div>
            </section>
            <section className={styles.categoryItems}>
            <div>
                <div className={styles.cards}>
                    {mainCatProducts?.map(item => <ProductCard img={item.image} title={item.name} />)}
                </div>
            </div>
            </section>
        </div>
      );
};

export default Category;
