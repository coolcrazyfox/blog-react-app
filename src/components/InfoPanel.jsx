import React, {useState} from 'react';
import s from "../styles/InfoPanel.module.css";
import {MdDoubleArrow} from "react-icons/md";
import {TiArrowBackOutline} from "react-icons/ti";
import {Link} from "react-router-dom";
import {initialState} from "./NavBar";
import {initialTasks} from "./Blog";

const InfoPanel = () => {
    const [inform,setInform]=useState(initialState)
    const info = inform[1]
    const [detail, setDetail] = useState(initialTasks)
    const card = initialTasks[0]

    return (
        <div className={s.info}>
            <div className={s.title_box}>
                <div className={s.title}>{info.title}</div>
                <div className={s.arrow}>
                    <MdDoubleArrow />
                </div>
                <div className={s.title_text}>{card.title}</div>

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
                        <div> Back to {info.title}</div>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default InfoPanel;
