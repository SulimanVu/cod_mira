import { ReactNode } from 'react';
import { createPortal } from 'react-dom';



export const Portal = (props) => {
    const {
        children,
        element = document.body,
    } = props;

    return createPortal(children, element);
};
