import React from 'react';
import s from "../../../styles/UsersPage.module.css";
import CircleTimerCount from "../../CircleTimerCount";
import SuperButton from "../SuperButton/SuperButton";

const SuperMessageModal = ({valueTerm, onClick}) => {
    return (
        <div className={s.form_modal}>
            <div className={s.circle}>
                <CircleTimerCount/>
            </div>
            <div className={s.message}>The {valueTerm} will be delete</div>
            <div onClick={onClick} className={s.cancel_btn}>
                <SuperButton >cancel</SuperButton>
            </div>
        </div>
    );
};

export default SuperMessageModal;
