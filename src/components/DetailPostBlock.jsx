import React, {useState} from 'react';
import s from "../styles/DetailPostBlock.module.css";
import {initialTasks} from "./Blog";


const DetailPostBlock = () => {
    const [detail, setDetail] = useState(initialTasks)
    const card = initialTasks[0]
    return (
        <div className={s.blogs}>
            <div className={s.box}>

            </div>


        </div>
    );
};

export default DetailPostBlock;
