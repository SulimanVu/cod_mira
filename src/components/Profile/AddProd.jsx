import React, { useEffect, useState } from 'react';
import styles from './profile.module.scss'
import ProfileNav from './profileNav';
import { useDispatch, useSelector } from 'react-redux';
import { addProd } from 'features/productSlice';
import { fetchAllUsers } from 'features/applicationSlice';

const AddProd = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch])

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const users = useSelector(state => state.application.users);
    const myId = localStorage.getItem("id")

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleImage = (e) => {
        setImage(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleAdd = ({ name, image, description, price, myId }) => {
        dispatch(addProd({ name, image, description, price, myId }))
        setName('');
        setImage('');
        setDescription('');
        setPrice('');
    }

    return (
        <div className={styles.profile}>
            <ProfileNav />
            <div className={styles.rightCard}>
                {
                    users?.map(user => {
                        if (user.role == 'Фермер' && user._id == myId) {
                            return <div className={styles.profInp}>
                                <input type="text" value={name} placeholder='Название товара' onChange={handleName} />
                                <input type="text" value={image} placeholder='Картинка товара' onChange={handleImage} />
                                <input type="text" value={description} placeholder='Описание товара' onChange={handleDescription} />
                                <input type="text" value={price} placeholder='Цена товара' onChange={handlePrice} />
                                <button onClick={() => { handleAdd({ name, image, description, price, myId }) }}>Добавить товар</button>
                            </div>
                        }
                    })
                }

            </div>
        </div>
    );
};

export default AddProd;