import React, {useState} from 'react';
import s from "../styles/InfoPanel.module.css";
import {MdDoubleArrow} from "react-icons/md";
import {TiArrowBackOutline} from "react-icons/ti";
import {Link} from "react-router-dom";

const InfoPostsPanel = ({sortDetails}) => {
    const info=['Blogs', 'Posts']
    return (
        <div className={s.info}>
            <div className={s.title_box}>
                <div className={s.title}>{info[1]}</div>
                <div className={s.arrow}>
                    <MdDoubleArrow />
                </div>
                <div className={s.title_text}>
                    {/*{sortDetails.title}*/}back-end blog
                </div>

            </div>
            <div className={s.container}>
                <Link to={'/posts'} className={s.link}>
                    <span className={s.span}></span>
                    <span className={s.span}></span>
                    <span className={s.span}></span>
                    <span className={s.span}></span>
                    <div className={s.back}>
                        <div className={s.back_icon}>
                            <TiArrowBackOutline/>
                        </div>
                        <div> Back to {info[1]}</div>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default InfoPostsPanel;
