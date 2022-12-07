import React, {useState} from 'react';
import s from "../styles/DetailPostBlock.module.css";
import {initialPostsTasks} from "./Post";



const DetailPostBlock = ({onClickListItem, details, sortDetails}) => {
    const [open, setOpen]=useState(false)
    const selectTitle=['for public posts','for private posts']
    return (
        <div className={s.blogs}>
            <div className={s.box}>
                <div className={s.container}>
                    <div className={s.post_info_box}>
                        <img src={sortDetails.image} alt="img"/>
                        <p>Back-end blog</p>
                    </div>
                    <div className={s.title}>
                       <h2>
                           First day at the office
                       </h2>
                        <span>(for public posts)</span>
                    </div>
                    <div className={s.select_box}>
                        <ul>
                            {selectTitle.map((s , i)=>(
                                <li key={i}> {s}</li>)
                            )}

                        </ul>
                    </div>
                    <div className={s.date_info}>
                        12/12/2022 at 15:46:58
                    </div>
                    <div className={s.main_img}>
                        <img src={sortDetails.image}  alt="img"/>
                    </div>
                    <textarea className={s.text_form} name="" id="" cols="30" rows="10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolorum quis repellendus sunt veritatis. Accusamus aperiam architecto blanditiis dolores harum impedit minima non quo saepe totam ullam, vel vero voluptatibus.
                    </textarea>

                </div>
            </div>


        </div>
    );
};

export default DetailPostBlock;
