import React from 'react';
import s from "../../../styles/SuperMessageModal.module.css";
import CircleTimerCount from "../../CircleTimerCount";
import SuperButton from "../SuperButton/SuperButton";

const SuperMessageModal = ({children, valueTerm, onClick}) => {
    return (
        <div className={s.form_modal}>
            <div className={s.circle}>
                <CircleTimerCount/>
            </div>
            <div className={s.message}>The {valueTerm} will be {children}</div>
            <div onClick={onClick} className={s.cancel_btn}>
                <SuperButton >cancel</SuperButton>
            </div>
        </div>
    );
};

export default SuperMessageModal;
