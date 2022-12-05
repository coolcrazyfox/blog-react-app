import React, {useState} from 'react';
import s from "../styles/InfoPanel.module.css";
import {MdDoubleArrow} from "react-icons/md";
import {TiArrowBackOutline} from "react-icons/ti";
import {Link} from "react-router-dom";
import SuperButton from "./SuperButton";

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
                <SuperButton
                    link={'/posts'}
                    label={<TiArrowBackOutline/>}
                >
                    Back to {info[1]}
                </SuperButton>
            </div>

        </div>
    );
};

export default InfoPostsPanel;
