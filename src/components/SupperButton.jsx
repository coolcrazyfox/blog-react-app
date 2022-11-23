import React from 'react';
import s from "../styles/SupperButton.module.css";
import {TiArrowBackOutline} from "react-icons/ti";

const SupperButton = ({label}) => {
    return (
        <div className={s.button_container}>
            <a href="/users" className={s.link_button}>
                <span className={s.span}></span>
                <span className={s.span}></span>
                <span className={s.span}></span>
                <span className={s.span}></span>
                <div className={s.button_label_box}>
                    <div className={s.button_icon}>
                        <TiArrowBackOutline/>
                    </div>
                    <div> Back to {label} </div>
                </div>

            </a>

        </div>
    );
};

export default SupperButton;
