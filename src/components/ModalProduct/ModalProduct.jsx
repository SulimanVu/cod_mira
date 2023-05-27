import React from "react"
import styles from "./ModalProduct.module.scss"

export const ModalProduct = () => {

    return (
        <div style={{marginBottom: 100}}>
            <div className={styles.container1}>
                <section className={styles.section1}>
                    <img className={styles.fullMage} src="https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/4341/8e3a74-270x270.JPG?v=3" alt="" />
                </section>
                <section className={styles.section2}>
                    <ul className={styles.cardStr}>
                        <li>
                            <p>Молоко</p>
                        </li>
                        <li>
                            <p><strong>Цена: </strong>109</p>
                        </li>
                        <li>
                            <p><strong>Описание: </strong>Молоко 3,8-4,5%</p>
                        </li>
                    </ul>
                </section>
            </div>
            <div className={styles.container2}>
                <span className={styles.click}>Комменты</span>
                <span className={styles.click}>Отзывы</span>
            </div>
        </div>
    )
}

