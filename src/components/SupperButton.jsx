import React from 'react';
import s from "../styles/SupperButton.module.css";

const SupperButton = () => {
    return (
        <div className={s.footer_container}>
            <a href="btn" className={s.link}>
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
