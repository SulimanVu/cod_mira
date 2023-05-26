import { classNames } from '../../lib/classNames/classNames';
import { memo } from 'react';
import cls from './Overlay.module.scss';



export const Overlay = memo((props) => {
    const { className, onClick } = props;

    return (
        <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])} />
    );
});
