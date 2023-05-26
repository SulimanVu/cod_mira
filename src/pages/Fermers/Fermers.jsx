import React, { useEffect, useState } from 'react';
import styles from './Fermer.module.scss'
import cow from './img/brands-welcome__image.svg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFermersThunk } from 'features/applicationSlice';

const Fermers = () => {

    const [value, setValue] = useState('')

    const fermers = useSelector(state => state.application.fermers)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFermersThunk())
    }, [dispatch])

    const filtered = fermers.filter(fermer => {
        return fermer.name.toLowerCase().includes(value.toLowerCase().toString())
    })

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
                    {filtered?.map((fermer) => {
                        return <>
                            <div className={styles.fermerBlock}>
                                <div className={styles.fermImg}>
                                    <img className={styles.fermImg} alt='b' src='data:image/png;base64,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' />
                                </div>
                                <div className={styles.fermDesc}>{fermer.name}</div>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </>
    );
};

export default Fermers;