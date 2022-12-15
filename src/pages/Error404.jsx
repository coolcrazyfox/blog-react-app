import React from 'react';
import {PATH} from "../routes/RouterRoot";
import s from '../styles/Error404.module.css'
import {Link} from "react-router-dom";

const Error404 = () => {
    let img404 = 'https://tabthemes.com/wp-content/uploads/2022/04/404-error-page-iconfinder.jpg'
    return (

        <div className={s.errorBlock}>
            <div className={s.nameContainer}>
                <img src={img404} alt="404"/>
                <h2 className={s.nameText}>
                    <span>P</span>
                    <span>a</span>
                    <span>g</span>
                    <span>e&nbsp;&nbsp;</span>
                    <span>N</span>
                    <span>o</span>
                    <span>t&nbsp;&nbsp;</span>
                    <span>F</span>
                    <span>o</span>
                    <span>u</span>
                    <span>n</span>
                    <span>d&nbsp;&nbsp;</span>
                    <span>4</span>
                    <span>0</span>
                    <span>4</span>
                </h2>
            </div>
            <div className={s.btnBox}>
                <Link to={PATH.HERO} className={s.link}>
                    <span className={s.span}></span>
                    <span className={s.span}></span>
                    <span className={s.span}></span>
                    <span className={s.span}></span>
                    Go to homepage
                </Link>
            </div>

        </div>
    );
};

export default Error404;
