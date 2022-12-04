import React from 'react';
import s from "../styles/SupperButton.module.css";
import {TiArrowBackOutline} from "react-icons/ti";
import {Link} from "react-router-dom";

const SupperButton = ({children, link, label}) => {
    return (
        <div className={s.button_container}>
            <Link to={link} className={s.link_button}>
                <span className={s.span}></span>
                <span className={s.span}></span>
                <span className={s.span}></span>
                <span className={s.span}></span>
                <div className={s.button_label_box}>
                    <div className={s.button_icon}>
                        {label}
                    </div>
                    <div>
                        {children}
                    </div>


                    {/*<div> Back to {label} </div>*/}
                </div>

            </Link>

        </div>
    );
};

export default SupperButton;
