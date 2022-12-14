import React, {useState} from 'react';
import s from "../styles/InfoPanel.module.css";
import {MdDoubleArrow} from "react-icons/md";
import {TiArrowBackOutline} from "react-icons/ti";
import {Link} from "react-router-dom";
import SuperButton from "./UI/SuperButton/SuperButton";

const InfoPanel = ({details}) => {
    const info=['Blogs', 'Posts']
    return (
        <div className={s.info}>
            <div className={s.title_box}>
                <div className={s.title}>{info[0]}</div>
                <div className={s.arrow}>
                    <MdDoubleArrow />
                </div>
                <div className={s.title_text}>{details.title}</div>

            </div>
            <div className={s.container}>
                <SuperButton
                    link={'/blogger'}
                    label={<TiArrowBackOutline/>}
                >
                    Back to {info[0]}
                </SuperButton>

                {/*<Link to={'/blogger'} className={s.link}>*/}
                {/*    <span className={s.span}></span>*/}
                {/*    <span className={s.span}></span>*/}
                {/*    <span className={s.span}></span>*/}
                {/*    <span className={s.span}></span>*/}
                {/*    <div className={s.back}>*/}
                {/*        <div className={s.back_icon}>*/}
                {/*            <TiArrowBackOutline/>*/}
                {/*        </div>*/}
                {/*        <div> Back to {info[0]}</div>*/}
                {/*    </div>*/}
                {/*</Link>*/}
            </div>

        </div>
    );
};

export default InfoPanel;
