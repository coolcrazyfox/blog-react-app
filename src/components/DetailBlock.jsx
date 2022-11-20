import React, {useState} from 'react';
import s from "../styles/DetailBlock.module.css";
import Blog from "./Blog";


const DetailBlock = ({title, image, website, text }) => {
    const [detail, setDetail]=useState()
    return (
        <div className={s.blogs}>
            <div className={s.box}>
                <div className={s.container_items}>
                    <h1>{title}1</h1>
                    <p>{image}2</p>
                    <p>{website}3</p>
                    <p>{text}4</p>


                    <Blog />
                </div>
            </div>
        </div>
    );
};

export default DetailBlock;
