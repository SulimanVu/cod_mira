import React, { useEffect, useState } from "react";
import styles from "./Category.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from "features/categorySlice";
import CategoryCardsPage from "./CategoryCardsPage";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Category = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.categorySlice.categories)
    const currentProducts = useSelector((state) =>
    state.categorySlice.categories.find((item) => item._id == id));
    
    // const [click, setClick] = useState('')

    console.log(currentProducts.products);

    useEffect(() => {
        dispatch(fetchCategory())
    }, [dispatch, ])

    return (
        <>
        <div className={styles.container}>
            <section className={styles.categories}>
            <Link to="/" className={styles.goBack}>⇦ На главную</Link>
                <div className={styles.select}>
                    {categories?.map((obj, i) =>
                        <Link className={styles.link} to={"/categories/" + obj._id}>
                            <div 
                                key={i}
                                // onClick={() => setClick(i)}
                                // className={click === key ? styles.selectItem + ` ` + styles.backColor : styles.selectItem}
                                className={styles.selectItem}
                            >{obj.name}</div>
                        </Link>
                    )}
                </div>
            </section>
            <section className={styles.categoryItems}>
            <div>
                <CategoryCardsPage products={currentProducts?.products}/>
            </div>
            </section>
        </div>
       </>
  );
};

export default Category;
