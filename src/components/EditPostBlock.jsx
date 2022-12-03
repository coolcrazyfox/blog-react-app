import React, {useState} from 'react';
import s from "../styles/DetailPostBlock.module.css";
import {initialPostsTasks} from "./Post";



const EditPostBlock = ({onClickListItem, details, sortDetails}) => {

    return (
        <div className={s.blogs}>
            <div className={s.box}>
                <div className={s.container}>
                    <div className={s.post_info_box}>
                        <img src={sortDetails.image} alt="img"/>
                        <p>{sortDetails.title}</p>
                    </div>
                    <div className={s.title}>
                       <h2>
                           First day at the office{sortDetails.title}
                       </h2>
                    </div>
                    <div className={s.date_info}>
                        {sortDetails.date} at 15:46:58
                    </div>
                    <div className={s.main_img}>
                        <img src={sortDetails.image}  alt="img"/>
                    </div>
                    <textarea className={s.text_form} name="" id="" cols="30" rows="10">
                    </textarea>

                </div>
            </div>


        </div>
    );
};

export default EditPostBlock;
