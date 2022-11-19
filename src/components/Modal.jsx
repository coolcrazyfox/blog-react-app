import React from 'react';
import s from '../styles/Modal.module.css'


const Modal = ({active, setActive}) => {
    return (
        <div className={active? `${s.modal}${s.active}`: s.modal} onClick={()=>setActive(false)}>
            <div className={!active? `${s.modal_content}${s.active}`:s.modal_content} onClick={e=>e.stopPropagation()}>Play music</div>

        </div>
    );
};

export default Modal;
