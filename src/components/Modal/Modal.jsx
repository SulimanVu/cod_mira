import { classNames} from '../lib/classNames/classNames';
import React, {

} from 'react';

import { useModal } from '.././lib/useModal/useModal';
import { Overlay } from './Overlay/Overlay';
import { Portal } from '../Modal/Portal/Portal';
import cls from './Modal.module.scss';


const ANIMATION_DELAY = 300;

export const Modal = (props) => {
    const {

        children,
        isOpen,
        onClose,
    
    } = props;


    const { isMounted, isClosing, close } = useModal({
        animationDelay: ANIMATION_DELAY,
        isOpen,
        onClose,
    });

    const mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (!isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
