import React from 'react';
import s from "../styles/SupperButton.module.css";

const SupperButton = () => {
    return (
        <div className={s.button_container}>
            <a href="btn" className={s.link_button}>
                <span className={s.span}></span>
                <span className={s.span}></span>
                <span className={s.span}></span>
                <span className={s.span}></span>
                Text
            </a>

        </div>
    );
};

export default SupperButton;
