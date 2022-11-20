import React from 'react';
import s from "../styles/InfoPanel.module.css";
import {MdDoubleArrow} from "react-icons/md";
import {TiArrowBackOutline} from "react-icons/ti";
import {Link} from "react-router-dom";

const InfoPanel = () => {
    return (
        <div className={s.info}>
            <div className={s.title_box}>
                <div className={s.title}>Blogs</div>
                <div className={s.arrow}>
                    <MdDoubleArrow />
                </div>
                <div className={s.title_text}>The best blog in our village</div>

            </div>
            <div className={s.container}>
                <Link to={'/blogger'} className={s.link}>
                    <span className={s.span}></span>
                    <span className={s.span}></span>
                    <span className={s.span}></span>
                    <span className={s.span}></span>
                    <div className={s.back}>
                        <div className={s.back_icon}>
                            <TiArrowBackOutline/>
                        </div>
                        <div> Back</div>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default InfoPanel;
