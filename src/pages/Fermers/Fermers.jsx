import React, { useState } from 'react';
import styles from './Fermer.module.scss'
import cow from './img/brands-welcome__image.svg'
import { useSelector } from 'react-redux';

const Fermers = () => {

    const [value, setValue] = useState()

    const fermers = useSelector(state => state.applicationSlice.fermers)

    return (
        <>
            <div className={styles.mainBlock}>
                <div className={styles.disc1}><h1>Наши поставщики — ответственные трудолюбивые фермеры</h1></div>
                <div className={styles.disc2}>
                    Среди них основатели небольших артелей, производств и сельских хозяйств. В наш ассортимент попадают только самые лучшие продукты от 239 производителей прошедших отбор
                    .
                </div>
                <div className={styles.cow}>
                    <img alt='a' width={758} height={172} src={cow} />
                </div>
            </div>
            <div className={styles.find}>
                <h1>Поищи поставщика</h1>
                <input value={value} onChange={(e) => { setValue(e.target.value) }} className={styles.finner} />
            </div>
            <div className={styles.ferMain}>
                <div className={styles.fermers}>
                    {fermers.map((fermer) => {
                        return (
                            <div className={styles.fermerBlock}>
                                <div className={styles.fermImg}>
                                    <img className={styles.fermImg} alt='b' src='https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/13123/8954c9-270x270.jpg?v=3' />
                                </div>
                                <div className={styles.fermDesc}>{fermer.name}</div>
                            </div>)
                    })}
                    <div className={styles.fermerBlock}>
                        <div className={styles.fermImg}>
                            <img className={styles.fermImg} alt='b' src='https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/13123/8954c9-270x270.jpg?v=3' />
                        </div>
                        <div className={styles.fermDesc}>Леонид Якубович</div>
                    </div>
                    <div className={styles.fermerBlock}>
                        <div className={styles.fermImg}>
                            <img className={styles.fermImg} alt='b' src='https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/13123/8954c9-270x270.jpg?v=3' />
                        </div>
                        <div className={styles.fermDesc}>Леонид Якубович</div>
                    </div>
                    <div className={styles.fermerBlock}>
                        <div className={styles.fermImg}>
                            <img className={styles.fermImg} alt='b' src='https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/13123/8954c9-270x270.jpg?v=3' />
                        </div>
                        <div className={styles.fermDesc}>Леонид Якубович</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Fermers;